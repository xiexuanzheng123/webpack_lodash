// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done');
//     });
// }
// timeout(100).then(value => {
//     console.log(value);
// });

/**
 * Promise新建之后就会立即执行
 */
let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});
promise.then(function() {
    console.log('Resolved.');
});
console.log('Hi');
