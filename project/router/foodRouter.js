const express = require('express')
const router = express.Router()
const foodModel = require('../db/model/foodModel')

router.post('/add',(req,res)=>{
    // let data = {
    //     name : '西红柿',
    //     price : '999',
    //     desc : '好吃',
    //     typename : '凉菜',
    //     typeid : 1,
    //     img : '/public/image/1.jpg'
    // }
    let {name, price, desc, typename, typeid, img} = req.body
    foodModel.insertMany({name, price, desc, typename, typeid, img})
    .then((data)=>{
        res.send({err:0,msg:'添加成功'})
    })
    .catch(()=>{
        res.send({err:-1,msg:'添加失败'})
    })
})
router.post('/getInfoByType',(req,res)=>{
    let {typeid} = req.body
    foodModel.find({typeid})
    .then((data)=>{
        res.send({list:data})
    })
    .catch(()=>{
        res.send({err:-1,msg:'查询失败'})
    })
})
router.post('/getInfoByKw',(req,res)=>{
    // $set $gte $or $and $regex 
    let {kw} = req.body
    let reg = RegExp(kw)// 创建正则表达式 匹配关键字
    // foodModel.find({name:{$regex:reg}}) 名字模糊
    foodModel.find({$or:[{name:{$regex:reg}},{desc:{$regex:reg}}]})// 名字以及描述
    .then((data)=>{
        res.send({list:data})
    })
    .catch(()=>{
        res.send({err:-1,msg:'查询失败'})
    })
})
router.post('/del',(req,res)=>{
    let{_id} = req.body
    foodModel.deleteOne({_id})
    .then((data)=>{
        res.send({err:0,msg:'del ok'})
    })
    .catch(()=>{
        res.send({err:-1,msg:'删除失败'})
    })
})
router.post('/update',(req,res)=>{
    let {_id, name, price, desc, typename, typeid, img} = req.body
    foodModel.updateOne({_id},{name, price, desc, typename, typeid, img})
    .then((data)=>{
        res.send({err:0,msg:'修改 ok'})
    })
    .catch(()=>{
        res.send({err:-1,msg:'修改失败'})
    })
})
router.post('/getInfoByPage',(req,res)=>{
    let pageSize = req.body.pageSize || 5 //设置默认值
    let page = req.body.page || 1
    let count = 0
    foodModel.find()
    .then((data)=>{
        count = data.length //获取总的数据条数
        return  foodModel.find().limit(Number(pageSize)).skip(Number((page-1)*pageSize))
    })
    .then((data)=>{
        let allpage = Math.ceil(count/pageSize)
        res.send({err:0,msg:'ok',info:{list:data,count:count,allpage:allpage}})
    })
    .catch(()=>{
        res.send({err:-1,msg:'修改失败'})
    })
})
module.exports = router