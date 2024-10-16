// routes/quizRoutes.js
const express = require('express');
const { startQuiz,  getQuiz , submitAnswers  } = require('../controllers/quizController');

const router = express.Router();


// Route to submit the quiz questions
router.post('/startQuiz', startQuiz) ;
router.get('/getQuiz' , getQuiz) ;
router.post('/submitAnswers', submitAnswers ) ;

// Route to process quiz answers and get recommendations
// router.post('/get-result', getResult);

module.exports = router;
