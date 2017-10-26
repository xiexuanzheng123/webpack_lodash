import _ from 'lodash';

/**
 * invokeMap(collection, path, [args])
 * 调用path上的方法处理collection中的每个元素
 */
console.log(_.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort'));
console.log(_.invokeMap([123, 456], String.prototype.split, ''));//[['1', '2', '3'], ['4', '5', '6']]

/**
 * keyBy(collection, [iteratee = _.identity])
 * 创建一个对象组成，key是collection中的每个元素经过iteratee处理后返回的结果，
 * 每个key是对应的值是生成key的最后一个元素
 */
var array = [
    {'dir': 'left', 'code': 97},
    {'dir': 'right', 'code': 100}
];
var s = _.keyBy(array, function(o) {
    return String.fromCharCode(o.code);
});
console.log(s);//{'a': {'dir': 'left', 'code': 97}, 'd': {'dir': 'right', 'code': 100}}
var s1 = _.keyBy(array, 'dir');
console.log(s1);// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }

/**
 * map
 */
function square(n) {
    return n * n;
}
console.log(_.map([4, 8], square));
console.log(_.map({'a': 4, 'b': 8}, square));

/**
 * orderBy
 */
var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 36 }
];
console.log(_.orderBy(users, ['user', 'age'], ['asc', 'asc']));