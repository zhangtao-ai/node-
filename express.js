const express = require('express')
//express实例化
const app = express()
const bodypaser = require('body-parser')
//app.use 使用插件
//解析表单数据 x-www-form-urlencode
app.use(bodypaser.urlencoded({extended:false}))
app.use(bodypaser.json())
//最简单的api接口
app.get('/user/login',(req,res)=>{
    let{us,ps}=req.query
    if(us==='admin'&&ps==123){
        res.send({err:0,msg:'regist ok'})
    }else(
        res.send({err:-1,msg:'us pass no ok'})
    )
})
app.post('/user/reg',(req,res)=>{
    //接受post数据 消息体 请求体 req.body
    let {us,ps}=req.body
    console.log(req.body)
    //express 不能直接解析消息体
    //通过第三方插件实现解析
    if(us==='123'&&ps==123){
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