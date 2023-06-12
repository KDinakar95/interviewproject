const express = require('express');
const  app = express();
const cors = require('cors')
const User = require('./Modal/userSchema')
require('./Database/db')
const port = 5066;
app.use(express.json())
app.use(cors())


app.post('/postuser', async(req,res)=>{
    try{

const newuser =  new User(req.body)

const data = await  newuser.save();

if(data){
    return res.json({message:'Data stored Successfully',data})
}else{
    return res.json({message:'Data not stored successfully'})
}

    }catch(err){
        return res.json({message:err.message})
    }
})

app.get('/getdetails', async(req,res)=>{
    try{
     const found = await User.find();
     if(found){
        return res.json({message:'All Details found',found})
     }else{
        return res.json({message:'No Details Found'})
     }


    }catch(err){
        return res.json({message:err.message})
    }
})





app.listen(port, ()=>{
    console.log(`listening on the port ${port}`)
})