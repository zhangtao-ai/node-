const express = require('express')
const app = express()
let userRouter = require('./userRouter')
app.use('/user',userRouter)
app.listen(3000,()=>{
    console.log('server start')
    })