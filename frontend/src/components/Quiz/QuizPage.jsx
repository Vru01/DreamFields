import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = () => {
    const [quizData, setQuizData] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);

    // Start Quiz Function
    const startQuiz = async () => {
        setLoading(true);
        try {
            await axios.post('http://localhost:5000/api/v1/quiz/startQuiz'); // Start quiz API call
            fetchQuiz(); // Immediately fetch quiz questions after starting
        } catch (error) {
            console.error('Error starting the quiz:', error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch Quiz Questions Function
    const fetchQuiz = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/quiz/getQuiz');
            setQuizData(response.data.quiz.questions);
        } catch (error) {
            console.error('Error fetching quiz:', error);
        }
    };

    // Handle Answer Selection
    const handleAnswerChange = (questionId, answer) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: answer,
        }));
        console.log("answers" , questionId, " -> " , answer) ;
    };

    // Submit Answers Function
    const submitAnswers = async () => {
        try {
            console.log("Answers sendind") ;
            const response = await axios.post('http://localhost:5000/api/v1/quiz/submitAnswers', { answers: selectedAnswers });
            // Expecting recommendations to be in response.data.recommended_fields
            console.log("Answers sendind2") ;
            const recommendedFields = response.data.recommendations.recommended_fields || [];
            console.log("recommendedFields" , recommendedFields) ;
            setRecommendations(recommendedFields);
            toast.success('Answers submited successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
        } catch (error) {
            console.error('Error submitting answers:', error);
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Quiz Time!</h1>
            <button 
                onClick={startQuiz} 
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
                disabled={loading}
            >
                {loading ? 'Starting Quiz...' : 'Start Quiz'}
            </button>
            {quizData.length > 0 && (
                <div className="mb-4">
                    {quizData.map((question) => (
                        <div key={question.number} className="border p-4 mb-2 rounded-md shadow-md">
                            <p className="font-semibold">{question.text}</p>
                            <div className="flex flex-col">
                                {Object.entries(question.options).map(([key, value]) => (
                                    <label key={key} className="flex items-center mt-2">
                                        <input 
                                            type="radio" 
                                            name={`question-${question.number}`} 
                                            value={key} 
                                            onChange={() => handleAnswerChange(question.number, key)} 
                                            className="mr-2"
                                        />
                                        {value}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button 
                        onClick={submitAnswers} 
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                        Submit Answers
                    </button>
                </div>
            )}
            {recommendations.length > 0 && (
                <div className="mt-4 p-4 border rounded-md shadow-md">
                    <h2 className="font-bold">Recommended Fields Based on Your Interests:</h2>
                    <ul>
                        {recommendations.map((rec, index) => (
                            <li key={index} className="mt-1">{rec.field}</li> // Adjusting to use rec.field
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Quiz;
