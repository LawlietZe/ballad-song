/**
 * arguments 对象主要作用于函数局部，枚举出传入的实参
 */
var add = function() {
    console.log(arguments);
}

add(1, 2, 3);