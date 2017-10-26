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
 * filter
 */
var users = [
    { 'user': 'barney', 'age': 36, 'active': true }, 
    { 'user': 'fred',   'age': 40, 'active': false }
];
console.log(_.filter(users, function(o) {return !o.active}));//[{ 'user': 'fred',   'age': 40, 'active': false }]
console.log(_.filter(users, {'age': 36, 'active': true}));//[{ 'user': 'barney', 'age': 36, 'active': true }]
console.log(_.filter(users, ['active', false]));//[{ 'user': 'fred',   'age': 40, 'active': false }]
console.log(_.filter(users, active));//[{ 'user': 'barney', 'age': 36, 'active': true }]