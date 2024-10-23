import React, { useState, useEffect } from 'react';
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
    useEffect(() => {
        if (recommendations.length > 0) {
            console.log("Updated recommendations => ", recommendations);
        }
    }, [recommendations]);

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

    // Submit Answers Function
    const submitAnswers = async () => {
        try {
            console.log("Answers in progress");
            const response = await axios.post('http://localhost:5000/api/v1/quiz/submitAnswers', { answers: selectedAnswers });
            const recommendedFields = response.data.recommendations || [];
            console.log("submit answer => ");
            console.log("recommendedFields => ", recommendedFields);

            // Set recommendations state
            setRecommendations(recommendedFields);

            toast.success('Answers submitted successfully!', {
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
