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
 * difference过滤数组
 */
let diffArr = [1, 2, 3];
console.log(_.difference(diffArr, [4, 2]));