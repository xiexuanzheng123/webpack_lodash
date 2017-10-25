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