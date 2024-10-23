// routes/quizRoutes.js
const express = require('express');
const { startQuiz,  getQuiz , submitAnswers , getLatestRecommendation } = require('../controllers/quizController');

const router = express.Router();


// Route to submit the quiz questions
router.post('/startQuiz', startQuiz) ;
router.get('/getQuiz' , getQuiz) ;
router.post('/submitAnswers', submitAnswers ) ;
router.get('/getLatestRecommendation' , getLatestRecommendation ) ;
// router.get('/api/v1/recommendations/:quizId', getRecommendationsByQuizId);

// Route to process quiz answers and get recommendations
// router.post('/get-result', getResult);

module.exports = router;
