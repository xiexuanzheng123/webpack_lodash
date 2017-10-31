import _ from 'lodash';

/**
 * _(value)创建一个lodash对象，包装value后的对象启用隐式方法链，返回的数组、集合、方法相互之间能够链式调用
 *  _#value 方法解除链，使用 _.chain 开启
 */
function square(n) {
    return n * n;
}
var wrapped = _([1, 2, 3]);
console.log(wrapped.reduce(_.add));//6
var squares = wrapped.map(square);
console.log(squares.value());

/**
 * chain
 */
var users = [
    { 'user': 'barney',  'age': 36 },
    { 'user': 'fred',    'age': 40 },
    { 'user': 'pebbles', 'age': 1 }
];
var youngest = _
                .chain(users)
                .sortBy('age')
                .map(function(o) {
                    return o.user + ' is ' + o.age;
                })
                .head()
                .value();

console.log(youngest);                