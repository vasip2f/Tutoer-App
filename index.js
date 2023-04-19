const express = require('express');
const app = express();
app.use(express.json());
const cors=require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require('mongoose');
const signUp = require('./Route/tutorSignin');
const signin = require('./Route/tutorSignin');
app.use('/',signUp)
app.use('/',signin)




MONGO_URI = "mongodb+srv://tutor:tutor@cluster0.n9yyq5l.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            app.listen(6000, ()=> console.log("App is connected port 6000"))
        }).catch((err) =>{
            console.log("Db not conected")
        })
