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
 * intersectionWith
 */
var objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
var others = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}];
console.log(_.intersectionWith(objects, others, _.isEqual));//[{'x': 1, 'y': 2}]