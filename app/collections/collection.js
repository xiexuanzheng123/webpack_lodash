import _ from 'lodash';

/**
 * countBy
 * 创建一个组成对象，key是经过迭代函数处理之后返回的结果，
 * value是迭代函数返回key的次数
 */
console.log(_.countBy([6.1, 4.2, 6.3], Math.floor));//{'4': 1, '6': 2}
console.log(_.countBy(['one', 'two', 'three'], 'length'));//{'3': 2, '5': 1}
var collection = [
    { name: 'Pamela', gender: 'f' },
    { name: 'Vanessa', gender: 'f' },
    { name: 'Gina', gender: 'f' },
    { name: 'Dennis', gender: 'm' }
];
var r1 = _(collection).countBy('gender').value();
console.log(r1);//{'f': 3, 'm': 1}

/**
 * every 检查所有元素是否符合条件
 */
console.log(_.every([true, 1, null, 'yes'], Boolean));//fasle
var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
console.log(_.every(users, {'user': 'barney', 'active': false}));//false
console.log(_.every(users, ['active', false]));//true
console.log(_.every(users, 'active'));//fasle

/**
 * filter遍历所有元素，返回由符合限制函数的元素组成的数组
 */
var users = [
    { 'user': 'barney', 'age': 36, 'active': true }, 
    { 'user': 'fred',   'age': 40, 'active': false }
];
console.log(_.filter(users, function(o) {return !o.active}));//[{ 'user': 'fred',   'age': 40, 'active': false }]
console.log(_.filter(users, {'age': 36, 'active': true}));//[{ 'user': 'barney', 'age': 36, 'active': true }]
console.log(_.filter(users, ['active', false]));//[{ 'user': 'fred',   'age': 40, 'active': false }]
console.log(_.filter(users, 'active'));//[{ 'user': 'barney', 'age': 36, 'active': true }]

/**
 * find 返回第一个符合条件的元素
 */
var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },  
    { 'user': 'pebbles', 'age': 1,  'active': true }
];
console.log(_.find(users, function(o) {return o.age < 40}));//{ 'user': 'barney',  'age': 36, 'active': true }
console.log(_.find(users, {'age': 1, 'active': true}));

/**
 * findLast
 */
console.log(_.findLast([1, 2, 3, 4], function(n) {
    return n % 2 === 1;
}));//3

/**
 * flatMap
 */
function duplicate(n) {
    return [n, n];
}
console.log(_.flatMap([1, 2], duplicate));//[1, 1, 2, 2]

/**
 * flatMapDeep 返回新扁平化数组
 */
function duplicateDeep(n) {
    return [[[n, n]]];
}
console.log(_.flatMapDeep([1, 2], duplicateDeep));//[1, 1, 2, 2]

/**
 * flatMapDepth 根据指定的 depth（递归深度）继续扁平化递归映射结果
 */
function duplicateDepth(n) {
    return [[[n, n]]];
}
console.log(_.flatMapDepth([1, 2], duplicateDepth, 2));//[[1, 1], [2, 2]]

/**
 * forEach
 */
 _.forEach([1, 2], function(value) {
    console.log(value);
});
_.forEach({'a': 1, 'b': 2}, function(value, key) {
    console.log(key);
});

/**
 * forEachRight
 */
_.forEachRight([1, 2], function(value) {
    console.log(value);
});

/**
 * groupBy
 */
console.log(_.groupBy([6.1, 4.2, 6.3], Math.floor));//{'4': [4.2], '6': [6.1, 6.3]}

/**
 * includes 
 */
console.log(_.includes([1, 2, 3], 1));
console.log(_.includes([1, 2, 3], 1, 2));
console.log(_.includes({'a': 1, 'b': 2}, 1));//true




