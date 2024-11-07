import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StarsBackground } from '../Helper/stars-background';
import BTN from '../Common/CButton';
import Loader from '../Loaders/Loader1';

import img1 from '../../assets/img1.png';  // Image for the start phase
import img2 from '../../assets/img2.png';  // Image for loading phase
import img3 from '../../assets/img1.png';  // Image for the recommendations phase

const Quiz = () => {
    const [quizData, setQuizData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    // Handler to update selection
    const handleOptionClick = (optionKey) => {
        setSelectedOption(optionKey);
        handleAnswerChange(quizData[currentQuestionIndex].number, optionKey);
    };

    // Start Quiz Function
    const startQuiz = async () => {
        setLoading(true);
        try {
            await axios.post('http://localhost:5000/api/v1/quiz/startQuiz');
            fetchQuiz();
            setLoading(false);
        } catch (error) {
            console.error('Error starting the quiz:', error);
            setLoading(false);
        }
    };

    // Fetch Quiz Questions Function
    const fetchQuiz = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/quiz/getQuiz');
            setQuizData(response.data.quiz.questions);
            setQuizStarted(true);
        } catch (error) {
            console.error('Error fetching quiz:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle Answer Selection
    const handleAnswerChange = (questionId, answer) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: answer,
        }));
        console.log(questionId + "=>" + answer);
    };

    // Submit Answers Function
    const submitAnswers = async () => {
        setLoading(true);
        try {
            await axios.post('http://localhost:5000/api/v1/quiz/submitAnswers', { answers: selectedAnswers });
            const recommendationResponse = await axios.get('http://localhost:5000/api/v1/quiz/getLatestRecommendation');
            setRecommendations(recommendationResponse.data.recommendation.recommendedFields || []);
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
        } finally {
            setLoading(false);
        }
    };

    // Handle Next Button Click
    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
        } else {
            submitAnswers();
        }
    };

    // Handle Previous Button Click
    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            const prevQuestionNumber = quizData[currentQuestionIndex - 1].number;
            setSelectedOption(selectedAnswers[prevQuestionNumber] || null); // Restore selected option for previous question
        }
    };

    return (
        <div className="min-h-screen  flex flex-col items-center justify-center relative">

            <StarsBackground />

            {/* Start Quiz Section with img1 */}
            {!quizStarted && recommendations.length === 0 && (
                <div className="absolute inset-0 bg-cover bg-center z-20" 
                    style={{ 
                        backgroundImage: `url(${img1})`, 
                        height: '100vh', 
                        width: '100vw' , 
                    }}>
                    <div className="translate-y-3/4 h-full w-full">
                        <div className=" max-w-2xl w-full mx-auto z-20">
                            <button
                                onClick={startQuiz}
                                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-300 ease-in-out hover:bg-blue-700 mb-6 shadow-lg"
                                disabled={loading}
                            >
                                {loading ? 'The quiz will start soon...' : 'Start Quiz'}
                            </button>
                        </div>
                    </div>
                </div>
            )}


            {loading && <Loader />}

            {/* Questions Section with img2 */}
            {quizStarted && quizData.length > 0 && recommendations.length === 0 && (
                <div className="absolute inset-0 bg-cover bg-center z-20" style={{ 
                    backgroundImage: `url(${img2})`, 
                    height: '100vh', 
                    width: '100vw' 
                }}>
                    <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg max-w-4xl w-full mx-auto space-y-6">
                        <div key={quizData[currentQuestionIndex].number} className="border p-4 rounded-xl shadow-lg bg-white">
                            <p className="text-2xl font-bold mb-4">
                                <span className="font-bold text-5xl text-purple-400">
                                    {quizData[currentQuestionIndex].number < 10 ? `0${quizData[currentQuestionIndex].number}` : quizData[currentQuestionIndex].number}
                                </span>
                                /{quizData.length}
                            </p>
                            <p className="font-bold text-3xl text-gray-700 mb-6">{quizData[currentQuestionIndex].text}</p>
                            <div className="space-y-4">
                                {Object.entries(quizData[currentQuestionIndex].options).map(([key, value]) => (
                                    <div
                                        key={key}
                                        onClick={() => handleOptionClick(key)}
                                        className={`flex items-center space-x-4 p-3 rounded-xl cursor-pointer border-2
                                            ${selectedOption === key ? "border-blue-500 bg-blue-500" : "border-gray-300"}
                                            hover:border-blue-400 hover:bg-blue-50 transition duration-200 ease-in-out shadow-sm`}
                                    >
                                        <span className="font-bold text-xl text-purple-500 bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
                                            {key.toUpperCase()}
                                        </span>
                                        <span className="text-gray-700 font-semibold">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            {currentQuestionIndex > 0 && (
                                <button
                                    onClick={handlePreviousQuestion}
                                    className="w-1/2 bg-purple-600 text-white font-semibold py-3 rounded-md transition duration-300 ease-in-out hover:bg-purple-800 shadow-lg"
                                >
                                    Previous
                                </button>
                            )}
                            <button
                                onClick={handleNextQuestion}
                                className="w-1/2 bg-purple-600 text-white font-semibold py-3 rounded-md transition duration-300 ease-in-out hover:bg-purple-800 shadow-lg"
                            >
                                {currentQuestionIndex < quizData.length - 1 ? 'Next' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Recommendations Section with img3 */}
            {Array.isArray(recommendations) && recommendations.length > 0 && (
                <div className="absolute inset-0 bg-cover bg-center z-20" style={{ 
                    backgroundImage: `url(${img3})`, 
                    height: '100vh',
                    width: '100vw',
                    objectFit: 'cover' 
                }}>
                    <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg max-w-[70%] w-full mx-auto mt-8 scale-110">
                        <h2 className="text-4xl text-center font-bold text-purple-900 mb-14">
                            Recommended Fields Based on Your Interests
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-3 max-w-7xl">
                            {recommendations.map((rec, index) => (
                                <div key={index} className="relative bg-gradient-to-br from-purple-100 to-blue-50 p-6 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                                    <h3 className="text-2xl font-bold text-purple-600 mb-4">{rec}</h3>
                                    <p className="text-gray-700">Explore this field to discover more opportunities and resources!</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <ToastContainer />
        </div>
    );
};

export default Quiz;
