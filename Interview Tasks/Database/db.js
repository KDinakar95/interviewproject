const mongoose = require('mongoose');
const url =   'mongodb+srv://konetidinakar:interview1234@cluster0.ekeilh7.mongodb.net/?retryWrites=true&w=majority';

const connection = ()=>{
    const db = mongoose.connect(url);
    if(db){
        console.log("Database Connection Established Successfully")
    }else{
        console.log("Database connection was not Established Successfully")
    }
}

connection();

