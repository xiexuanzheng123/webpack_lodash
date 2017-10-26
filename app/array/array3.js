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
let objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
let others = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}];
console.log(_.unionWith(objects, others, _.isEqual));