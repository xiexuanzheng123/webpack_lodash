/**
 * async就是generator的语法糖
 */
var fs = require('fs');
var readFile = function (fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if(error) {
                reject(error);
            }
            resolve(data);
        });
    });
};
var gen = function* () {
    var f1 = yield readFile('../main.js');
    var f2 = yield readFile('../Greeter.js');
    console.log(f1.toString());
    console.log(f2.toString());
}
gen();