const {Quiz , Recommendation } = require('../models/Quiz');
const axios = require('axios'); 
const { PythonShell } = require('python-shell');

// Function to store the quiz in the database
exports.startQuiz = async (req, res) => {
    try {
        // Hardcoded prompt to generate quiz questions
        const prompt = "(Give me 5 questions)Play a quiz with me. I want to conduct a quiz to determine the user's interest. Ask 5 questions one by one in the following format without any extra comments: Question format: Question [number]: [Question text]? A) Option A B) Option B C) Option C D) Option D E) Option E After the last question, provide a list of recommended activities based on the user's interests, structured neatly like this: Recommended Activities Based on Your Interests: 1. [Category Name]: - [Activity 1] - [Activity 2] - [Activity 3] Not more than 2. Please avoid any unnecessary comments. Play in json format so it will be easier for me to add in my backend. For example: {\"question\": [{\"number\": 1,\"text\": \"What do you enjoy doing in your free time?\",\"options\": {\"A\": \"Reading books and articles\",\"B\": \"Watching movies and TV shows\",\"C\": \"Playing sports and outdoor games\",\"D\": \"Traveling and exploring new places\",\"E\": \"Creating art and music\"}}]}";

        // Initialize PythonShell to run the Python script
        let pyshell = new PythonShell('./main.py');
        // Send the prompt to the Python script
        pyshell.send(prompt);
        // Listen for messages from the Python script
        pyshell.on('message', async function (message) {
            try {
                // Parse the response from the Python script
                const parsedAnswer = JSON.parse(JSON.parse(message));
                // Create the quiz object based on the Mongoose schema
                const newQuiz = new Quiz({ questions: parsedAnswer.question });
                // Store the quiz in MongoDB
                await newQuiz.save();
                // Send the response back to the client
                return res.status(201).json({
                    message: 'Quiz stored successfully',
                    quizId: newQuiz._id,
                    questions: parsedAnswer.question, // Send the questions back
                });
            } catch (err) {
                return res.status(500).json({ message: "Failed to parse the response from Python." });
            }
        });
        // Handle errors in executing the Python script
        pyshell.end((err) => {
            if (err) {
                return res.status(500).json({ message: 'Error executing Python script', error: err.message });
            }
        });
    } catch (err) {
        return res.status(500).json({ message: 'Error storing quiz', error: err.message });
    }
};

exports.getQuiz = async (req, res) => {
    try {
        // Find the latest quiz in the database
        const quiz = await Quiz.findOne().sort({ createdAt: -1 }); // Sort by createdAt in descending order
        // Check if the quiz exists
        if (!quiz) {
            return res.status(404).json({ message: 'No quizzes found' });
        }
        // Send the quiz data back to the client
        return res.status(200).json({
            message: 'Latest quiz retrieved successfully',
            quiz: quiz, // Return the quiz object containing questions
        });
    } catch (err) {
        return res.status(500).json({ message: 'Error retrieving quiz', error: err.message });
    }
};


exports.submitAnswers = async (req, res) => {
    try {
        const { answers } = req.body; // Get answers from the request body
        const latestQuiz = await Quiz.findOne().sort({ createdAt: -1 }); // Get the latest quiz

        if (!latestQuiz) {
            return res.status(404).json({ message: 'No quizzes found' });
        }

        const quizId = latestQuiz._id; // Get quizId from the latest quiz

        // Validate the input
        if (!answers || !quizId ) {
            return res.status(400).json({ message: 'Answers and quiz fields are required' });
        }

        // const formattedAnswers = {};
        // for (let key in answers) {
        //     // Convert both the key (question number) and value (answer) to strings
        //     formattedAnswers[String(key)] = String(answers[key]);
        // }
        // const answerPayload = {
        //     answers: answers
        // };
        // console.log(answerPayload)
        // console.log(JSON.stringify(answerPayload, null, 2));
        // console.log(answerPayload);
        
        // Prepare the answer payload for the AI model
        const answerPayload = {
            question: latestQuiz.questions, // Use questions from the latest quiz
            // response: answers // Pass user-selected answers
            answers: answers 
        };
        console.log(answerPayload) ;
        

        // Call the recommendations logic
        const recommendations = await getRecommendations(answerPayload); // Define this function

        return res.status(200).json({
            message: 'Answers submitted successfully',
            recommendations, // Include recommendations in the response
            // recommendations: {
            //     recommended_fields: recommendations.recommended_fields.length > 0 ? recommendations.recommended_fields : [{ field: "Hello" }]
            // } 
        });
    } catch (err) {
        return res.status(500).json({ message: 'Error submitting answers', error: err.message });
    }
};

// Function to get recommendations from the Python model
async function getRecommendations(answerPayload) {
    return new Promise((resolve, reject) => {
        let pyshell = new PythonShell('./main.py');

        // Construct the prompt based on the input structure you provided
        const prompt = {
            answer: `(Give me recommendations based on this quiz) {\"question\": ${JSON.stringify(answerPayload.question)}, \"answers\": ${JSON.stringify(answerPayload.answers)}}. Based on this, recommend fields of interest for me in a structured JSON format. Do not give any traits just array of objects named as recommended_fields inside of it the field. No description required keep this names same always. Give me the overall recommendation based on the quiz do not go question wise recommendation field.`
        };

        // Send the answer payload to the Python script
        console.log("python" , JSON.stringify(prompt)) ;
        pyshell.send(JSON.stringify(prompt));

        pyshell.on('message', function (message) {
            try {
                const recommendations = JSON.parse(message);
                resolve(recommendations);
            } catch (err) {
                reject(new Error("Failed to parse recommendations from Python."));
            }
        });

        // Handle errors in executing the Python script
        pyshell.end((err) => {
            if (err) {
                reject(new Error('Error executing Python script: ' + err.message));
            }
        });
    });
}




// exports.submitAnswers = async (req, res) => {
//     try {
//         const { answers } = req.body; // Get answers from the request body
//         const latestQuiz = await Quiz.findOne().sort({ createdAt: -1 }); // Get the latest quiz

//         if (!latestQuiz) {
//             return res.status(404).json({ message: 'No quizzes found' });
//         }

//         const quizId = latestQuiz._id; // Get quizId from the latest quiz

//         // Validate the input
//         if (!answers) {
//             return res.status(400).json({ message: 'Answers are required' });
//         }

//         // Prepare the answer payload for the AI model
//         const answerPayload = {
//             question: latestQuiz.questions, // Use questions from the latest quiz
//             response: answers // Pass user-selected answers
//         };

//         // Call the recommendations logic
//         const recommendations = await getRecommendations(answerPayload); // Define this function

//         // Store the recommendations in the database
//         const recommendation = new Recommendation({
//             quizId: quizId,
//             recommendedFields: recommendations.recommended_fields
//         });
//         await recommendation.save(); // Save the recommendations to the database

//         // Fetch recommendations from the database
//         const storedRecommendations = await Recommendation.findOne({ quizId: quizId });

//         if (!storedRecommendations) {
//             return res.status(404).json({ message: 'No recommendations found for this quiz' });
//         }

//         return res.status(200).json({
//             message: 'Answers submitted successfully and recommendations fetched',
//             recommendations: storedRecommendations.recommendedFields // Return the array of recommended fields
//         });
//     } catch (err) {
//         return res.status(500).json({ message: 'Error submitting answers', error: err.message });
//     }
// };

// // Function to get recommendations from the Python model
// async function getRecommendations(answerPayload) {
//     return new Promise((resolve, reject) => {
//         let pyshell = new PythonShell('./main.py');

//         // Construct the prompt based on the input structure you provided
//         const prompt = {
//             answer: `(Give me recommendations based on this quiz) {\"question\": ${JSON.stringify(answerPayload.question)}, \"response\": ${JSON.stringify(answerPayload.response)}}. Based on this, recommend fields of interest for me in a structured JSON format. Do not give any traits just array of objects named as recommended_fields inside of it the field. No description required keep this names same always. Give me the overall recommendation based on the quiz do not go question wise recommendation field.`
//         };

//         // Send the answer payload to the Python script
//         pyshell.send(JSON.stringify(prompt));

//         pyshell.on('message', function (message) {
//             try {
//                 const recommendations = JSON.parse(message);
//                 resolve(recommendations);
//             } catch (err) {
//                 reject(new Error("Failed to parse recommendations from Python."));
//             }
//         });

//         // Handle errors in executing the Python script
//         pyshell.end((err) => {
//             if (err) {
//                 reject(new Error('Error executing Python script: ' + err.message));
//             }
//         });
//     });
// }
