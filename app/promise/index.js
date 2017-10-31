/**
 * Promise对象是一个构造函数，用来生成Promise实例
 * Promise构造函数，接受一个函数作为参数，该函数的两个参数分别是resolve，reject
 * resolve函数的作用是将Promise对象的状态从未完成变成完成，，异步操作成功时调用，并将异步操作的结果作为参数传递出去
 * reject函数的作用是将Promise对象的状态从未完成变成失败，在异步操作失败时调用
 * Promise实例生成以后，可以使用then方法分别指定resolved状态和reject状态的回调函数
 */
var promise = new Promise(function(resolve, reject) {
    // ... some code
    if(true) {
        resolve(value);
    } else {
        reject(error);
    }
});
promise.then(function(value) {
    return value;  //接受两个回调函数作为参数，第一个是状态变成resolve时使用，第二个时失败时候
}, function(error) {
    return error;
});
