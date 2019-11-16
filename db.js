const mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://localhost/1911',{ useNewUrlParser: true, useUnifiedTopology: true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
//   console.log('db ok')
});
// 创建一个和集合相关的schema对象 类似表头
var Schema = mongoose.Schema;
var userSchema = new Schema({
    us:{type:String,required:true},
    ps:{type:String,required:true},
    age:Number,
    sex:{type:Number,default:0}
});
// 将schema对象转化为数据模型
var User = mongoose.model('user', userSchema);//表名
// 操作数据库
// User.insertMany({us:'zhang',ps:'123',age:18})
// .then((data)=>{
//     console.log(data)
//     console.log('插入成功')
// })
// .catch((err)=>{
//     console.log('插入失败')
// })
// User.find({age:17})
// .then((data)=>{
//     console.log(data)
//     console.log('查询成功')
// })
// .catch((err)=>{
//     console.log('查询失败')
// })
// User.remove()
// .then((data)=>{
//     console.log(data)
//     console.log('成功')
// })
// .catch((err)=>{
//     console.log('失败')
// })
User.update({age:20})
.then((data)=>{
    console.log(data)
    console.log('成功')
})
.catch((err)=>{
    console.log('失败')
})