// let time = 0;
// setInterval(function(){
//     time+=2;
//     console.log(time + "seconds passed")
// },2000)

// console.log(__dirname);
// console.log(__filename);

// function callFunction(fun,name){
//     fun(name);
// }
// var sayBye = function(name){
//     console.log(name + " bye");
// }
// callFunction(sayBye,"rail");

// var stuff = require('./count');
// console.log(stuff.counter([1,2,3]));
// console.log(stuff.adder(1,2));
// console.log(stuff.pi);

// var events = require('events');
// var util = require('util');
// var Person = function(name){
//     this.name = name;
// }
// util.inherits(Person,events.EventEmitter);
// var ming = new Person("xiaoming");
// var li = new Person("lili");
// var lucy = new Person("lucy");
// var person = [ming,li,lucy];
// person.forEach(function(person){
//     person.on('speak',function(message){
//         console.log(person.name + " said " + message);
//     })
// })
// ming.emit('speak','hi');
// li.emit('speak','i can carry');

// var myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent',function(message){
//     console.log(message);
// })
// myEmitter.emit('someEvent','the event was emitted');

// var fs = require("fs");
// var readMe = fs.readFile('123.txt',function(err,data){
//     if(err) return console.error(err);
//     console.log(data.toString())
// });
// console.log("程序执行结束");

//var fs = require('fs');
//删除一个文件
// fs.unlink("write.txt",function(){
//     console.log("delete file");
// })
//复制
// fs.mkdir('stuff',function(){
//     fs.readFile('123.txt','utf8',function(err,data){
//         fs.writeFile('./stuff/456.txt',data,function(){
//             console.log("copy successful");
//         })
//     })
// })

// var fs = require('fs');
// var readStream = fs.createReadStream(__dirname + '/123.txt','utf8');
// var writeStream = fs.createWriteStream(__dirname + '/111.txt','utf8');
// readStream.pipe(writeStream);
// var data = "";
// readStream.on('data',function(chunk){
//     writeStream.write(chunk);
//     data+=chunk;
// })
// readStream.on('end',function(){
//     console.log(data);
// })

// var http = require('http');
// var onRequest = function(request,response){
//     console.log('request received');
//     response.writeHead(200,{'Conteny-type':'application/json'});
//     // response.end('hello from out application');
//     var myObj = {
//         name:"hfpp",
//         job:"programmer",
//         age:20
//     }
//     response.end(JSON.stringify(myObj));
// }
// var server = http.createServer(onRequest);
// server.listen(3000,'127.0.0.1');
// console.log('server started on localhost port 3000');


