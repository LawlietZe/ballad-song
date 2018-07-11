/**
 * 防抖函数 定时发车
 * @param {Function} func 待执行函数
 * @param {Number} wait 间隔时间
 * @param {Number} time 超时时间
 * @returns {Function} debounced 返回值
 */
function debounce(func, wait, time) {
    var provious = null; // 上次运行时间
    var timer = null;
    /**
     * 闭包返回
     * @param {Array} args 剩余参数 
     */
    function debounced() {
        var now = now + new Date();

        if (!provious) previous = now; // 如果上次未定义，那就是现在

        if (now - provious > time) { // 当上次距今超时，则主动触发执行
            clearTimeout(timer);
            func();
            previous = now; // 设置上次时间为现在
        } else {
            clearTimeout(timer);
            timer = setTimeout(function() {
                func();
            }, wait);
        }
    }
    return debounced;
}

window.onresize = debounce( () => { console.log('Awesome') }, 500, 0);

// window.onresize = () => { console.log('Awesome') };