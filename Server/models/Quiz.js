// models/Quiz.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  number: Number,
  text: String,
  options: {
    A: String,
    B: String,
    C: String,
    D: String,
    E: String,
  },
});

const quizSchema = new mongoose.Schema({
  questions: [questionSchema],
  createdAt: { type: Date, default: Date.now },
});

const recommendationSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Quiz' },
  recommendedFields: [{ field: String }]
});

// Exporting both models
const Quiz = mongoose.model('Quiz', quizSchema);
const Recommendation = mongoose.model('Recommendation', recommendationSchema);

module.exports = { Quiz, Recommendation };
