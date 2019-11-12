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
    //邮件信息
    let mailobj = {
        from: '"Fred Foo 👻" <1916320565@qq.com>', // sender address
        to: '1916320565@qq.com', // list of receivers
        subject: '1902', // Subject line
        text: '您的验证码是123456，有效期5分钟', // plain text body
        // html: '<b>Hello world?</b>' // html body

    }
    //发送邮件
    transporter.sendMail(mailobj,(err,data)=>{
        console.log(err)
        console.log(data)
    });