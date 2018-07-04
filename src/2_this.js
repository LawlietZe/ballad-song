/**
 * 函数上下文- 在函数内部，
 * this的值取决于函数被调用的方式。
 */
function f1(){
    return this;
}
//在浏览器中：
f1() === window; // => true 在浏览器中，全局对象是window

/**
 * Function 构造函数创建一个对象，
 * 这个对象就是一个函数，因此函数是一个特殊的对象
 */
var sum = new Function('a', 'b', 'return a + b');

/**
 * Function.bind 绑定指定对象的 this 到 调用者身上
 */
var FundComponent = function(name) {
    this.name = name;
}
FundComponent.prototype = {
    constructor: FundComponent,
    sayHello: function(name) {
        return name;
    }
}

var module1 = {
    name: 'm1',
    setName: function(name) {
        this.name = name;
    },
    getName: function() {
        return this;
    },
    __proto__: FundComponent.prototype
}

var module2 = {
    name: 'm2',
}


var getName = module1.getName;
var newGetName = getName.bind(module2); // 将 module2 的 this 绑定到
console.log('this 指向 module 本身:', window.module1.getName()); // => m1
console.log('this 指向全局作用于:', window.getName()); // 全局的 window.getName 并没有 name 属性
console.log('this 指向绑定到 module 本身:', newGetName()); 

/**
 *  Function.call && Function.apply 绑定指定对象的 this 到 调用者身上 并可携带函数
 */
var obj = { name: 'dengdeng' };
var name = 'lishilei'; // window.name = 'lishilei'

var sayYeah = (a, b) => {
    console.log(this.name + a + b);
}

sayYeah(3, 4) // 不绑定上下文

var bindThis = sayYeah.bind(obj); // 先绑定
bindThis(1, 2); // 再执行

sayYeah.call(obj, 1, 2); // 绑定并且执行

sayYeah.apply(obj, [1, 2]); // 绑定并且执行




