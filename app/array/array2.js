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