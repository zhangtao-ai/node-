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
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
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