const express = require('express')
const router = express.Router()
const multer = require('multer')
var stroage = multer.diskStorage({
    // 设置上传后文件路径，uploads文件夹会自动创建
    destination: function(req, file, cb) {
        cb(null, './static/img')
    },
    // 给上传文件重命名，获取添加后缀名
    filename: function(req, file, cb) {
        let ext = file.originalname.split('.')[1]
        let tmpname = (new Date()).getTime()+parseInt(Math.random()*9999)
        cb(null, `${tmpname}.${ext}`)
    }
})
let upload = multer({
    storage: stroage
})

router.post('/upload',upload.single('file'),(req,res)=>{
    //haha 要上传图片数据的key值 必须前后端统一
    // console.log(req.file)
    let {size,mimetype,path} = req.file
    let types=['jpg','jpeg','png','gif'] //允许上传的类型
    let tmpType=mimetype.split('/')[1]
    if(size>500000){
        return res.send({err:-1,msg:'尺寸过大'})
    }else if(types.indexOf(tmpType)==-1){
        return res.send({err:-2,msg:'媒体类型错误'})
    }else{
        let url = `/public/img/${req.file.filename}`
        res.send({msg:'ok',img:url})
    }
})




module.exports = router