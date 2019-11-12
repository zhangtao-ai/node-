/*
1.请求网站数据
2.将数据保存本地文件
*/
const http = require('https')
const fs = require('fs')
let url = 'https://www.bilibili.com/'
http.get(url,(res)=>{
    //数据分段 只要接受数据就会触发data 事件 chunk 每次接受的数据片段
    let rawData=''
    res.on('data',(chunk)=>{
        rawData+=chunk.toString('utf8')
        // console.log(chunk.toString('utf8'))
    })
    //数据请求完毕
    res.on('end',()=>{
        fs.writeFileSync('./bili.html',rawData)
        console.log('数据传输完毕')
    })
}).on('error',(err)=>{
    console.log('请求错误')
})