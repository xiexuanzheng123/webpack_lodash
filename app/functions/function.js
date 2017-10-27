import _ from 'lodash';
import $ from 'jquery';
/**
 * after
 */
$('#btnAfter').on('click', _.after(5, addLiToUlAfter));
function addLiToUlAfter() {
    $('#ulAfter').append('<li>lodash after</li>');
}
/**
 * ary
 */
var arr = _.map(['6', '8', '10'], _.ary(parseInt, 1));
console.log(arr);
//console.log(_.ary(parseInt, 1));

/**
 * before
 */
$('#btnBefore').on('click', _.before(5, addContactToList));
function addContactToList() {
    $('#ulBefore').append('<li>lodash before</li>');
}

/**
 * bind
 */
var greet = function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
};
var object = {'user': 'fred'};
var bound = _.bind(greet, object, 'hi');
console.log(bound('!')); //hi fred!

var bound= _.bind(greet, object, _, '!');
console.log(bound('hi'));

/**
 * bindKey
 */
var object = {
    'user': 'fred',
    'greet': function(greeting, punctuation) {
        return greeting + ' ' + this.user + punctuation;
    }
};
var bound = _.bindKey(object, 'greet', 'hi');
console.log(bound('!'));

/**
 * defer
 */
_.defer(function(text) {
    console.log(text);
}, 'deferred1');

/**
 * flip(func) 创建一个函数，调用func时接受翻转的参数
 */
var flipped = _.flip(function() {
    return _.toArray(arguments);
});
flipped('a', 'b', 'c', 'd');

/**
 * negate
 */
function isEven(n) {
    return n % 2 === 0;
}
var newArr = _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
console.log(newArr);

/**
 * once 参数函数只能执行一次
 */
var initialize = _.once(createApplication);
function createApplication() {
    console.log('initialize');
}
initialize();
initialize();

/**
 * overArgs 创建一个新的函数
 */
function doubled(n) {
    return n * 2;
}
function square(n) {
    return n * n;
}
var func = _.overArgs(function(x, y) {
    return [x, y];
}, [square, doubled]);
console.log(func(9, 3));//[81, 6]
console.log(func(10, 5));//[100, 10]

/**
 * partial 该函数调用 func，并传入预设的 partials 参数
 */
var greet = function(greeting, name) {
    return greeting + ' ' + name;
}
var sayHelloTo = _.partial(greet, 'hello');
console.log(sayHelloTo('fred'));

/**
 * rearg调整元素的位置
 */
var rearged = _.rearg(function(a, b, c) {
    return [a, b, c];
}, [2, 0, 1]);
console.log(rearged('b', 'c', 'a'));

/**
 * rest（func，[start=func.length - 1]）
 * 创建一个函数，调用func时，this绑定到创建的新函数，
 */
var say = _.rest(function(what, names) {
    return what + ' ' + _.initial(names).join(', ') + (_.size(names) > 1 ? ', & ' : '') + _.last(names);
});
console.log(say('hello', 'fred', 'barney', 'prebbles')); 