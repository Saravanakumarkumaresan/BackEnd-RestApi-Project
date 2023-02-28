const express= require('express')
const app=express()
const mongoose=require('mongoose')
const postRouter=require('./routes/posts')
const bodyparser=require('body-parser')


app.use(bodyparser.json())
app.use('/posts',postRouter)

app.get('/',(req,res)=>{
    res.send('I am a enginner')
})


mongoose.connect('mongodb://localhost:27017',()=>{
    console.log('connected');
})



app.listen(4000)