import _ from 'lodash';

/**
 * forIn
 */
function Foo() {
    this.a = 1;
    this.b = 2;
}
Foo.prototype.c = 3;
_.forIn(new Foo, function(value, key) {
    console.log(key);
});
