/**
 * 全局上下文-在浏览器中, 
 * window 对象同时也是全局对象：
 */
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"

/**
 * 函数上下文- 在函数内部，
 * this的值取决于函数被调用的方式。
 */
function f1(){
    return this;
}
//在浏览器中：
f1() === window; //在浏览器中，全局对象是window
  
//在Node中：
f1() === global;

/**
 * Function 构造函数创建一个对象，
 * 这个对象就是一个函数，因此函数是一个特殊的对象
 */
var sum = new Function('a', 'b', 'return a + b');

/**
 * Function.bind 
 */
var module = {
    name: 'm1',
    setName: function(name) {
        this.name = name;
    },
    getName: function() {
        return this.name;
    }
}

var getName2 = module.getName;
console.log('this 指向 module 本身：', window.module.getName());
console.log('this 指向全局作用于:', window.getName2());
console.log('this 指向绑定到 module本身 :', (window.getName2.bind(module))());

