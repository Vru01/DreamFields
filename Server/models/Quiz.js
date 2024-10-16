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

module.exports = mongoose.model('Quiz', quizSchema);
