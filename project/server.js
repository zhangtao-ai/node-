const express = require('express')
const db = require('./db/connect')
const app = express()
const path = require('path');  

const bodypaser = require('body-parser')
app.use(bodypaser.urlencoded({extended:false}))
app.use(bodypaser.json())
//路由
app.use('/public',express.static(path.join(__dirname,'./static')))
const userRouter = require('./router/userRouter')
app.use('/user',userRouter)
const foodRouter = require('./router/foodRouter')
app.use('/food',foodRouter)
const fileRouter = require('./router/fileRouter')
app.use('/file',fileRouter)

app.listen(3000,()=>{
    console.log('server start')
})