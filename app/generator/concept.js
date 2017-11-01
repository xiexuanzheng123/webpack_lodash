/**
 * Generator可以理解成一个状态机，封装了多个内部状态
   执行Generator函数会返回一个遍历器对象，除了是状态机，还是一个遍历器对象的生成函数
 */
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
var hw = helloWorldGenerator();//返回遍历器对象(指向内部状态的指针对象),内部有两个yield语句，即该函数有三个状态
console.log(typeof(hw));
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());//{value: undefined, done: false}

/**
 * generator函数返回遍历器对象，yield语句就是暂停标志
 * Generator函数也可以不使用yield，这时候就变成了一个单纯的暂缓执行函数
 */
function * f() {
    console.log('执行了！');
}
var generator = f();
console.log(generator.next());//执行了

/**
 * 与 Iterator接口的关系,任意一个对象的Symbol.iterator方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象
 * 
 * Generator函数赋值给Symbol.iterator属性，从而myIterable对象具有了Iterator接口，可以被...运算符遍历了
 */
var myIterable = {};
myIterable[Symbol.iterator] = function *() {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...myIterable]);

/**
 * Generator函数执行后，返回一个遍历器对象，该对象本身也具有Symbol.iterator属性，执行后返回自身
 */
function *gen() {
    //some code
}
var g = gen();
console.log(g[Symbol.iterator]() === g);