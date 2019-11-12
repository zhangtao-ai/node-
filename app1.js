const fs = require('fs')
// 同步读取文件
// try{
//     let dirs = fs.readdirSync('./')
// }catch(err){
//     console.log(err)
// }
// console.log(222)
// fs.readdir('./',(err,data)=>{
//     if(err){
//         console.log('读取错误')
//     }else{
//         console.log(data)
//     }
// })
//错误的回调优先 在回调函数中第一个参数表示错误对象 默认为null 如果出现错误err 就是错误对象
//创建文件夹
// fs.mkdir('./test',(err)=>{
//     console.log(err)
// })
//更改
// fs.rename('./test','./test01',(err)=>{
//     if(err){
//         console.log('失败')
//     }else{
//         console.log('ok')
//     }
// })
//删除只能删除空文件夹
// fs.rmdir('./test01',(err)=>{
//     if(err){
//         console.log('失败')
//     }else{
//         console.log('ok')
//     }
// })
//创建文件 覆盖写入
// fs.writeFile('name.txt','contritute',(err)=>{
//     console.log(err)
// })
//写入文件
// fs.appendFile('name.txt','myself',(err)=>{
//     console.log(err)
// })
// fs.readFile('name.txt','utf8',(err,data)=>{
//     console.log(err)
//     console.log(data)
// })
//删除文件
// fs.unlink('./name.txt',(err)=>{
//     console.log(err)
// })
fs.readdir('../node.js',(err,data)=>{
    for(let i = 0; i < data.length; i++){
        console.log(data[i])
    }
})