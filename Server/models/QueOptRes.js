const mongoose = require("mongoose");

// Option schema should be defined before using it in questionSchema
const optionSchema = new mongoose.Schema({
    text: String,
    value: String,
});

// Question schema refers to optionSchema
const questionSchema = new mongoose.Schema({
    text: String,
    options: [optionSchema] // Use optionSchema directly
});

// Response schema tracks questionId and value for answers
const responseSchema = new mongoose.Schema({
    answers: [{ questionId: mongoose.Schema.Types.ObjectId, value: String }]
});

module.exports = {
    questionSchema,
    optionSchema,
    responseSchema
};
