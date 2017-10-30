import _ from 'lodash';

/**
 * forIn 遍历对象的自身和继承的可枚举属性
 */
function Foo() {
    this.a = 1;
    this.b = 2;
}
Foo.prototype.c = 3;
_.forIn(new Foo, function(value, key) {
    console.log(key);
});
