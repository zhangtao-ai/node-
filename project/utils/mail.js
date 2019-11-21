'use strict';
const nodemailer = require('nodemailer');
    //创建发送邮件的对象
    let transporter = nodemailer.createTransport({
        host: 'smtp.qq.com',//发送方邮箱 QQ 通过lib/well-know/service.json
        port: 465,//端口号
        secure: true, // true for 465, false for other ports
        auth: {
            user: '1916320565@qq.com', // 发送方邮箱地址
            pass: 'idaqwushylmlbccb' // smtp 验证码
        }
    });
    
   

    function send(mail,code){
        //邮件信息
        let mailobj = {
            from: '"Fred Foo 👻" <1916320565@qq.com>', // sender address
            to: mail, // list of receivers
            subject: '1902', // Subject line
            text: `您的验证码是${code}，有效期5分钟`, // plain text body
            // html: '<b>Hello world?</b>' // html body
        }
        return new Promise((resolve,reject)=>{
            transporter.sendMail(mailobj,(err,data)=>{
                if(err){
                    reject()
                }else{
                    resolve()
                }
            });
        })
    }
    module.exports={send}