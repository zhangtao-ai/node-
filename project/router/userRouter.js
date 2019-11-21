const express = require('express')
const router = express.Router()
const User = require('../db/model/userModel')
const Mail = require('../utils/mail')
let codes = {}
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.get('',(req,res)=>{
    User.find()
    .then((data)=>{
        res.send(data)
    })
})
router.post('/reg',(req,res)=>{
//获取数据
let {us,ps,code} = req.body
if(us&&ps&&code){
    if(codes[us]!=code){return res.send({err:-6,msg:'验证码错误'})}
    User.find()
    .then((data)=>{
        if(data.length === 0){
            return User.insertMany({us:us,ps:ps})
        }else{
            res.send({err:-4,msg:'用户名已存在'})
        }
    })
//数据处理
    .then(()=>{
        res.send({err:0,msg:'注册ok'})
    })
    .catch((err)=>{
        res.send({err:-2,msg:'注册err'})
    })
}else{
    return res.send({err:-1,msg:'参数错误'})
}
})
router.post('/login',(req,res)=>{
    let {us,ps} = req.body
    if(us&&ps){
        User.find({us,ps})
        .then((data)=>{
            if(data.length>0){
                res.send({err:0,msg:'登录ok'})
            }else{
                res.send({err:-2,msg:'用户名或密码不正确'})
            }
        })
        .catch((err)=>{
            res.send({err:-3,msg:'内部错误'})
        })
    }else{
        return res.send({err:-1,msg:'参数错误'})
    }
})
//发送邮件验证码
router.post('/getMailCode',(req,res)=>{
    let{mail} = req.body
    if(mail){
        let code = parseInt(Math.random()*10000)
        Mail.send(mail,code)
        .then(()=>{
            // 邮箱及相应的验证码保存到缓存中
            codes[mail] = code
            res.send({err:0,msg:'验证码发送成功'})
        })
        .catch((err)=>{
            res.send({err:-2,msg:'验证码发送失败'})
        })
    }else{
        res.send({err:-1,msg:'邮箱参数错误'})
    }
})
module.exports = router