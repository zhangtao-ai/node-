const express = require('express')
const app = express()
app.use('/',(req,res,next)=>{
    let {token} = req.query
    if(token){
        next() //继续往下执行
    }else{
        res.send('缺少token')
    }
})
app.get('/test',(req,res)=>{
    res.send('test ok')
})
// 局部中间件
// app.get('/test1',(req,res,next)=>{
//     next()
// },
// (req,res)=>{
//     res.send('test1')
// })
// 直接指向规定的静态目录
// app.use(express.static(path.join(__dirname,'./hehe')))
// app.use('/public',express.static(path.join(__dirname,'./hehe')))
app.listen(3000,()=>{
    console.log('server start')
})