from meta_ai_api import MetaAI

def play_quiz():
    # Initialize the Meta AI instance
    ai = MetaAI()
    
    # Start the quiz
    response = ai.prompt(message="Play a quiz with me and let me know my interest based on responses. ASk 5 questions and let me know my interest.")
    print(response['message'])

    while True:
        user_input = input("Your answer (A, B, C, D, E) or type 'exit' to stop: ")  # Take user's input for each question
        
        # Check if the user wants to exit the quiz
        if user_input.lower() == 'exit':
            print("Thanks for playing! Goodbye!")
            break
        
        # Send the user's answer back to Meta AI
        response = ai.prompt(message=user_input)  
        
        # Print the AI's response
        print(response['message'])
        

# Run the quiz
if __name__ == "__main__":
    play_quiz()
