/**
 * 防抖节流 - 搜索框弹簧，如果还在持续输入就等他直到最后一次统一发车
 * @param {Function} func 待执行函数
 * @param {Number} wait 间隔时间
 * @param {Object} options 配置项
 * @returns {Function} throttled 返回值
 */
function throttle(func, wait) {
    
    var timer = null;
    var firstTime  = true; // 是否第一次
    /**
     * 闭包返回
     * @param {Array} args 剩余参数 
     */
    function throttled() {
        var args = arguments; // 传参
        var _me = this;

        if(firstTime) {

        }

        clearTimeout(timer);
        timer = setTimeout(function() {
            func();
        }, wait);
    }
    return throttled;
}

window.onresize = throttle( () => { console.log('Awesome') }, 1000)