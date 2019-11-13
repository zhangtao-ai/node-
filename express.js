const express = require('express')
//express实例化
const app = express()

//最简单的api接口
app.get('/user/login',(req,res)=>{
    let{us,ps}=req.query
    if(us==='admin'&&ps==123){
        res.send({err:0,msg:'regist ok'})
    }else(
        res.send({err:-1,msg:'us pass no ok'})
    )
})
app.listen(3000,()=>{
// 监听3000端口 开启服务器
console.log('server start')
})
// http:localhost:3000/user/login 10.128.57.165