import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StarsBackground } from '../Helper/stars-background';

const Quiz = () => {
    const [quizData, setQuizData] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);

    // Effect to log recommendations when updated

    // Start Quiz Function
    const startQuiz = async () => {
        setLoading(true);
        try {
            await axios.post('http://localhost:5000/api/v1/quiz/startQuiz');
            fetchQuiz();
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
        console.log("answers", questionId, " -> ", answer);
    };

    const submitAnswers = async () => {
        try {
            console.log("Answers in progress");
    
            // Submit answers to the backend
            await axios.post('http://localhost:5000/api/v1/quiz/submitAnswers', { answers: selectedAnswers });
            console.log("submit answer => ");
    
            // Once answers are submitted, fetch the latest recommendations from the database
            const recommendationResponse = await axios.get('http://localhost:5000/api/v1/quiz/getLatestRecommendation');
            const recommendedFields = recommendationResponse.data.recommendation.recommendedFields || [];
            console.log("recommendedFields from DB => ", recommendedFields);
    
            // Set recommendations state
            setRecommendations(recommendedFields);
    
            // Show success message
            toast.success('Answers submitted successfully and recommendations fetched!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } catch (error) {
            console.error('Error submitting answers or fetching recommendation:', error);
            toast.error('An error occurred. Please try again.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };
    

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <StarsBackground />
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full z-20">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Quiz Time!</h1>
                
                {/* Start Quiz Button, only show when no recommendations are present */}
                {!recommendations.length && (
                    <button
                        onClick={startQuiz}
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md transition 
                        duration-300 ease-in-out hover:bg-blue-700 mb-6 shadow-lg"
                        disabled={loading}
                    >
                        {loading ? 'Starting Quiz...' : 'Start Quiz'}
                    </button>
                )}

                {/* Show Quiz Questions only if recommendations are not present */}
                {quizData.length > 0 && !recommendations.length && (
                    <div className="space-y-6">
                        {quizData.map((question) => (
                            <div key={question.number} className="border p-4 rounded-md shadow-md bg-gray-50">
                                <p className="font-semibold text-lg text-gray-700">{question.text}</p>
                                <div className="mt-4 space-y-2">
                                    {Object.entries(question.options).map(([key, value]) => (
                                        <label key={key} className="flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                name={`question-${question.number}`}
                                                value={key}
                                                onChange={() => handleAnswerChange(question.number, key)}
                                                className="form-radio text-blue-600"
                                            />
                                            <span className="text-gray-600">{value}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button
                            onClick={submitAnswers}
                            className="w-full bg-green-600 text-white font-semibold py-3 rounded-md transition duration-300 ease-in-out hover:bg-green-700 shadow-lg"
                        >
                            Submit Answers
                        </button>
                    </div>
                )}

                {/* Show Recommendations once they are available */}
                {Array.isArray(recommendations) && recommendations.length > 0 && (
                    <div className="mt-8 p-6 bg-gray-100 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended Fields Based on Your Interests:</h2>
                        <ul className="space-y-2">
                            {recommendations.map((rec, index) => (
                                <li key={index} className="text-gray-700 font-medium bg-white p-3 rounded-md shadow-sm">
                                    {rec.field}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Toast notifications container */}
            <ToastContainer />
        </div>
    );
};

export default Quiz;
