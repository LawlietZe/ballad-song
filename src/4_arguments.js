/**
 * arguments 对象主要作用于函数局部，枚举出传入的实参
 */
var add = function() {
    console.log(arguments);
}

add(1, 2, 3);


/**
 * arguments 形参展开表达式
 */
function greet() {
    return this.name + arguments[0] + arguments[1];
}

var obj = {
    name: 'dengdeng',
    age: 15
}

var name = 'global'

greet2 = greet.bind(obj);
console.log(greet2(1,2));

console.log(greet.call(obj, 1, 2));
console.log(greet.apply(obj, [1,2]));