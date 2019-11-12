const qs = require('querystring')
// let string = 'name=zhang&pass=123&sex=0'
// let obj = qs.parse(string)
// let string = 'name-zhang#pass-123#sex-0'
// let obj = qs.parse(string,'#','-')
//将query字符串变成query对象 split
// console.log(obj)

// let obj = { name: 'zhang', pass: '123', sex: '0' }
// let string = qs.stringify(obj)
// let string = qs.stringify(obj,'^','?')
// console.log(string)

// let stringfg = 'w=你好&foo=bar'
// let result = qs.escape(stringfg)
// console.log(result)
// let escape = 'w%3D%E4%BD%A0%E5%A5%BD%26foo%3Dbar'
// console.log(qs.unescape(escape))

let err = new Error('发生错误')//这是一个错误对象 对象本身没有终止代码执行
// console.log(err) 打印错误对象
throw err //抛出错误 中止代码执行
console.log(222)