from meta_ai_api import MetaAI
import json

ai = MetaAI()
question = input()

# Get response
response = ai.prompt(message=question)

# Convert JSON response to a single-line string
cleaned_response = json.dumps(response["message"], separators=(',', ':'))

# Print the result
print(cleaned_response)

#file