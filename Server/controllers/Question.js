const User = require("../models/User");
const Question = require("../models/Question");

async function common (userData , field, res ) {
    try{
        const user = await User.findById(userData._id) ;
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        const questions = await Question.find({ field: field });
        if( questions.length === 0 ) {
            return res.status(404).json({
                success : false ,
                message: "Que field is empty or not found",
            })
        }
        return res.status(200).json({
            success: true,
            message: "Field 1 questions fetched successfully",
            data: questions
        }) ;
    } catch(error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "An issue occurred while fetching field1 questions"
        });
    }
}

exports.field1 = async (req, res) => {
    const userData = req.body ;
    await common(userData , "field1" , res) ;
};

exports.field2 = async (req, res) => {
    const userData = req.body ;
    await common(userData , "field2" , res) ;
};

exports.field3 = async (req, res) => {
    const userData = req.body ;
    await common(userData , "field3" , res) ;
};

exports.field4 = async (req, res) => {
    const userData = req.body ;
    await common(userData , "field4" , res) ;
};

exports.field5 = async (req, res) => {
    const userData = req.body ;
    await common(userData , "field5" , res) ;
};
