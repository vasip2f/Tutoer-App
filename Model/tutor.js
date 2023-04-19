const mongoose = require('mongoose');


const tutorSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:false
    },
});

const tutorSignup = mongoose.model('tutorSignup',tutorSchema);
module.exports= tutorSignup