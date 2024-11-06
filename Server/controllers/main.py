from meta_ai_api import MetaAI
import json
import sys

ai = MetaAI()

# Get input from stdin
input_data = sys.stdin.read()
data = json.loads(input_data)

# Extract questions and responses
questions = data['question']  # List of questions
responses = data['response']  # User's selected responses

# Construct the prompt for recommendations
# recommendation_prompt = "(Give me recommendations based on this quiz) {\"question\": " + json.dumps(questions) + ", \"response\": " + json.dumps(responses) + "}. Based on this, recommend fields of interest for me in a structured JSON format. Do not give any traits just array of objects named as recommended_fields inside of it the field. No description required keep this names same always. Give me the overall recommendation based on the quiz do not go question wise recommendation field."
recommendation_prompt = (
    "(Give me recommendations based on this quiz) "
    "{\"question\": " + json.dumps(questions) + ", \"response\": " + json.dumps(responses) + "}. "
    "Based on this data, recommend fields of interest in a structured JSON format with an array named 'recommended_fields'. "
    "Each object inside 'recommended_fields' should contain only the 'field' name with no additional traits or descriptions. "
    "Provide an overall recommendation based on the quiz results, rather than a question-by-question analysis. "
    "Example of the required output format: "
    "{\"recommended_fields\": [{\"field\": \"Data Analyst\"}, {\"field\": \"Engineer\"}]}. "
    "Maintain this structure and avoid any extra comments."
)


# Get response
response = ai.prompt(message=recommendation_prompt)

# Attempt to parse the AI's response into the expected structure
try:
    # Parse response to get the recommended fields
    recommended_fields = json.loads(response["message"])

    # Check if it matches the expected structure
    if "recommended_fields" in recommended_fields and isinstance(recommended_fields["recommended_fields"], list):
        output_response = json.dumps(recommended_fields, separators=(',', ':'))
    else:
        # If the structure is not as expected, create an empty response
        output_response = json.dumps({"recommended_fields": []}, separators=(',', ':'))

except json.JSONDecodeError:
    # Handle invalid JSON responses
    output_response = json.dumps({"recommended_fields": []}, separators=(',', ':'))

# Print the result
print(output_response)
