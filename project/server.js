const express = require('express')
const db = require('./db/connect')
const app = express()
const path = require('path');  
const request = require('request')
const bodypaser = require('body-parser')
app.use(bodypaser.urlencoded({extended:false}))
app.use(bodypaser.json())
//通过cors解决跨域(不知道我的项目为啥不管用)
// const cors = require('cors')
// app.use(cors)
//路由
app.get('/cors',(req,res)=>{
    //发送一个服务器请求
    request('https://www.baidu.com/',(err,response,body)=>{
        if(!err){
          res.send(body)
        }
    })
    // res.send('ok')
})
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