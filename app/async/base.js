/**
 * javascript 语言的执行环境是单线程，必须需要异步编程
 * ES6之前的异步编程方法有四种：
 * 1 回调函数
 * 2 事件监听
 * 3 发布/订阅
 * 4 Promise对象
 * ES7中引入Async函数提出了异步编程的终极解决方案
 */
// fs.readFile('/etc/passwd', function (err, data) {
//     if(err) {
//         throw er;
//     }
//     console.log(data);
// });
//上述代码就是一个使用回调函数的异步函数
//回调函数的第一个参数，必须是错误对象err，原因是执行分成两段，在这两段之间抛出的错误，
//程序无法捕获，只能当做参数，传入第二段


/**
 * 回调函数本身是可以解决问题的，但是如果回调函数过多，嵌套太多，造成回调噩梦
 * Promise允许回调函数链式调用
 */
var readFile = require('fs-readfile-promise');
readFile('../main.js')
        .then(function(data) {
            console.log(data.toString());
        });
