const fs = require('fs')

function isexit () {
    return new Promise((resolve,reject)=>{
        fs.stat('./hehe.js',(err,stats)=>{
            if(err){
                reject('文件不存在')
            }else{
                resolve('文件存在')
            }
        })
    })
}
function delfile () {
    return new Promise((resolve,reject)=>{
        fs.unlink('./hehe.js',(err)=>{
            if(err){
                reject('失败')
            }else{
                resolve('成功')
            }
        })
    })
}
isexit()
.then(()=>{
    return delfile()
})
.then(()=>{
    console.log('删除文件成功')
    throw new Error('手动中止')
})
.then(()=>{
    console.log('test')
})
.catch((err)=>{
    console.log(err)
})