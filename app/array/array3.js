import _ from 'lodash';

/**
 * union
 */
console.log(_.union([2], [1, 2]));

/**
 * unionBy
 */
console.log(_.unionBy([2.1], [1.2, 2.3], Math.floor));

/**
 * unionWith
 */
var objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
var others = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}];
console.log(_.unionWith(objects, others, _.isEqual));

/**
 * uniq
 */
console.log(_.uniq([2, 1, 1, 2]));

/**
 * uniqBy
 */
console.log(_.unionBy([1.1, 1.5, 2.2, 2.4], Math.floor));

/**
 * uniqWith
 */
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
console.log(_.uniqWith(objects, _.isEqual));

/**
 * unzip拆开数组
 */
var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
//[['fred', 30, true], ['barney', 40, false]]
console.log(_.unzip(zipped));

/**
 * unzipWith
 */
var zipped = _.zip([1, 2], [10, 20], [100, 200]);
//[[1, 10, 100], [2, 20, 200]]
console.log(_.zipWith(zipped, _.add));
//[3, 30, 300]