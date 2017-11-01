/**
 * yield句本身没有返回值，或者说总是返回undefined，next方法可以带一个参数，该参数可以当做上一个yield语句的返回值
 * 
 */
function *f() {
    for(var i=0; true; i++) {
        var reset = yield i;//总是返回undefined
        if(reset) {
            i = -1;
        }
    }
}
var g = f();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next(true));
console.log(g.next());

function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}
var a = foo(5);
console.log(a.next());//6 false
console.log(a.next());//NaN false
console.log(a.next());//Nan fasle

var b = foo(5);
console.log(b.next());//6 fasle
console.log(b.next(12));//8 false
console.log(b.next(13));//42 true

function* dataConsumer() {
    console.log('Started');
    console.log(`1, ${yield}`);
    console.log(`2, ${yield}`);
    return 'result';
}
let genObj = dataConsumer();
console.log(genObj.next());
console.log(genObj.next('a'));
