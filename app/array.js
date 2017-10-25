import _ from 'lodash';

/**将array拆分为多个长度为size的块 */
let chunkArr = ['a', 'b', 'c', 'd'];
console.log(_.chunk(chunkArr, 3));//[['a', 'b', 'c'], ['d']]

/**去掉数组中为假的元素 
 * false 0 "" undefined null NaN
*/
let  compactArr = [0, 1, false, 2, '', 3];
console.log(_.compact(compactArr));

/**
 * difference过滤数组,去掉第一个数组中在第二个参数数组中包含的元素
 */
let diffArr = [1, 2, 3];
console.log(_.difference(diffArr, [4, 2]));

/**
 * drop 去掉数组中前N个元素
 */
let dropArr = [1, 2, 3];
console.log('drop1: ', _.drop(dropArr, 1));//如果长度是1，则可以省略
console.log('drop0: ', _.drop(dropArr, 0));

/**
 * dropRight去掉数组中尾部的元素
 */
let dropRightArr = [1, 2, 3];
console.log('dropRight: ', _.dropRight(dropRightArr, 1));

/**
 * dropRightWhile从右端开始查询 ，
 */
console.log('drw: ', _.dropRightWhile([1, 1, 2, 3, 0], function(n) {
    return n > 1;
}));//[1]
var users = [
    {'user': 'barney', 'active': true},
    {'user': 'fred', 'active': false},
    {'user': 'pebbles', 'active': true}
];
// _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');//['barney', 'fred']
// _.pluck(_.dropRightWhile(users, 'active', false), 'user');//['barney']
// _.pluck(_.dropRightWhile(users, 'active'), 'user');//['barney','fred']