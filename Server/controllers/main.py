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
    "Based on my quiz responses, provide an overall recommendation of fields of interest as a structured JSON object. "
    "The JSON should contain an array of objects named 'recommended_fields'. Each object should include 'field' "
    "and 'percent_interest' (the percentage interest in that field based on the quiz responses). "
    "The recommendations should reflect an overall analysis of all quiz responses, not question-by-question. "
    "Provide only 3 to 4 fields as recommendations. The JSON format should look like this example: "
    "{\"recommended_fields\": [{\"field\": \"field_name\", \"percent_interest\": 75}]}."
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
