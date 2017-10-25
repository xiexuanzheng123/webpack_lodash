import _ from 'lodash';
/**
 * flatten将嵌套数组的维数减少
 */
console.log(_.flatten([1, [2, 3, [4]]]));//[1, 2, 3, Array(1)]

/**
 * flattenDeep将array递归为一维数组
 */
console.log(_.flattenDeep([1, [2, 3, [4]]]));//[1, 2, 3, 4]

/**
 * flattenDepth指定递归减少的层数
 */
console.log(_.flattenDepth([1, [2, [3, [4]], 5]], 2));//[1, 2, 3, Array(1), 5]

/**
 * fromPairs返回一个由键值对构成的对象
 */
console.log(_.fromPairs([['fred', 30], ['barney', 40]]));//{fred: 30, barney: 40}

/**
 * head和first一样
 */

 /**
  * indexOf返回首次value在数组中被找到的索引值，
  * 如果fromIndex为负值，则从数组尾端索引进行匹配,并且与值大小无关
  */
console.log(_.indexOf([1, 2, 1, 2], 2));//1
console.log(_.indexOf([1, 2, 1, 2], 2, -2));//3

/**
 * initial去除最后一个元素
 */
console.log(_.initial([1, 2, 3]));//[1, 2]

/**
 * intersection获取多个数组的交集
 */
console.log(_.intersection([2, 1], [4, 2], [1, 2]));//[2]

/**
 * intersectionBy 将数组中的每个值变形后再比较，然后返回第一个数组中的元素
 */
console.log(_.intersectionBy([2.1, 1.2], [4.3, 2.4]), Math.floor);//[2.1]
console.log(_.intersectionBy([{'x': 1}], [{'x': 2}, {'x': 1}], 'x'));//[{'x': 1}]

/**
 * intersectionWith 比较两个数组中的元素，返回第一个数组中的元素
 */
var objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
var others = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}];
console.log(_.intersectionWith(objects, others, _.isEqual));//[{'x': 1, 'y': 2}]

/**
 * join
 */
console.log(_.join([1, 2, 3], '~'));//1~2~3

/**
 * last
 */
console.log(_.last([1, 2, 3]));//3

/**
 * lastIndexOf
 */
console.log(_.lastIndexOf([1, 2, 1, 2], 2));
console.log(_.lastIndexOf([1, 2, 1, 2], 2, 2));

/**
 * nth
 */
console.log(_.nth(['a', 'b', 'c', 'd'], -1));//d

/**
 * pull 移除与给定元素相等的元素
 */
console.log(_.pull([1, 2, 3, 1, 2, 3], 2, 3));//[1, 1]

/**
 * pullAll与pull不同的是接受一个数组
 */
console.log(_.pullAll([1, 2, 3, 1, 2, 3], [2, 3]));//[1, 1]

/**
 * pullAllBy
 */
let array = [{'x': 1}, {'x': 2}, {'x': 3}, {'x': 1}];
console.log(_.pullAllBy(array, [{'x': 1}, {'x': 3}], 'x'));// => [{ 'x': 2 }]

/**
 * pullAllWith
 */
let arrayWith = [{'x': 1, 'y': 2}, {'x': 3, 'y': 4}, {'x': 5, 'y': 6}];
console.log(_.pullAllWith(arrayWith, [{'x': 3, 'y': 4}], _.isEqual));

/**
 * pullAt
 */
var arrayPullAt = [5, 10, 15, 20];
var evens = _.pullAt(arrayPullAt, 1, 3);
console.log(arrayPullAt);//[5, 15]
console.log(evens);//[10, 20]

/**
 * remove
 */
let arrayRemove = [1, 2, 3, 4];
let arr = _.remove(arrayRemove, function(n) {
    return n % 2 === 0;
})
console.log(arrayRemove);//[1, 3]
console.log(arr);//[2, 4]