import _ from 'lodash';
/**
 * reverse
 */
console.log(_.reverse([1, 2, 3]));//[3, 2, 1]

/**
 * slice
 */
console.log(_.slice([1, 2, 3], 0, 1));//[1]

/**
 * sortedIndex  value的值应该插入到数组中尽可能小的索引位置
 */
console.log(_.sortedIndex([30,40,50], 41));

/**
 * sortedIndexBy
 */
var objects = [{'x': 4}, {'x': 5}];
// console.log(_.sortedIndexBy(objects, {'x': 4}, function(o) {
//     return o.x;
// });
console.log(_.sortedIndexBy(objects, {'x': 4}, 'x'));

/**
 * sortedIndexOf前面查
 */
console.log(_.sortedIndexOf([4, 5, 6, 5], 5));

/**
 * sortedLastIndex后面插入位置
 */
console.log(_.sortedLastIndex([4, 5, 6, 5], 5));

/**
 * sortedLastIndexBy 从后面数组array中插入的索引位置 index
 */
var objects = [{'x': 4}, {'x': 5}];
console.log(_.sortedLastIndexBy(objects, {'x': 4}, function(o) {
    return o.x;
}));

/**
 * sortedLastIndexOf 从后面查找元素的索引
 */
console.log(_.sortedLastIndexOf([4, 5, 5, 5, 6], 5));

/**
 * sortedUniq针对已排序的数组去重
 */
console.log(_.sortedUniq([1, 1, 2, 2]));

/**
 * sortedUniqBy
 */
console.log(_.sortedUniqBy([1.1, 1.2, 2.1, 2.2], Math.floor));

/**
 * tail去掉首字母
 */
console.log(_.tail([1, 2, 3]));
