var fetch = require('node-fetch');
/**
 * 协程coroutine,多个线程互相协作，完成异步任务
 * 1 协程A开始执行
 * 2 协程A执行到一半，进入暂停，执行权转移到协程B
 * 3 执行完B，协程B交还执行权
 * 4 协程A恢复执行
 */
// function *asyncJob() {
//     //
//     var f = yield readFile(fileA);
//     //
//}
//函数asyncJob就是一个协程，原理就在yield命令，执行到此处，执行权交给其他协程，
// yield命令是异步两个阶段的分界线

/**
 * Generator函数，最大的特点就是可以交出函数的执行权，
 * 调用指针的next方法，会移动内部指针，指向第一个遇到的yield函数，
 * 函数体内外的数据交换和错误处理机制
 */
function * gen(x) {
    var y = yield x + 2;
    return y;
}
var g = gen(1);//返回指针对象
console.log(g);//内部zhizhen(遍历器)
console.log(g.next());//{value: 3, done: false}
console.log(g.next());//{value: undefined, done: true}可以向generator函数内输入数据
console.log(g.next(4));//{value: 4, done: true}可以向generator函数内输入数据,作为上一阶段的返回值传给y

function* gen1() {
    var url = 'http://localhost:8080/build/lodash.html';
    var result = yield fetch(url);
    console.log(result.bio);
}
var g = gen1();//只针对象
console.log(g);
var result = g.next();
console.log('result', result);
var nextValue = result.value.then(function(data) {
    console.log(data.json());
});


