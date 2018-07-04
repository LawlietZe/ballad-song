/**
 * 方法-异步打个招呼
 * @param {String} name 姓名
 */
var greet = function(name) {
    var dfd = new $.Deferred();
    setTimeout(function() {
        dfd.resolve('Hi i am ' + name);
        // dfd.reject('Erro:' + name);
    }, 2000);
    return dfd.promise();
}

/**
 * 方法-吃东西
 * @param {String} food 食物名称 
 */
var eat = function(food) {
    var dfd = new $.Deferred();
    setTimeout(function() {
        dfd.resolve('I eated ' + food);
        //dfd.reject('Erro:' + food);
    }, 2000);
    return dfd.promise();
}

/**
 * Promise 调用栈
 */
greet('Dengdeng')
    .then(function(res){
        console.log(res);
        eat('Apple')
            .then(function(res) {
                console.log(res);
                console.log('Finished')
            }, function(erro) {
                console.log(erro);
            })
    }, function(erro) {
        console.log(erro);
    })
console.log('Hey guy');