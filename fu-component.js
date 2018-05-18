; (function (global) {
    // 模块兼容写法
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        // 兼容nodejs环境
        module.exports = factory();
    } else if (typeof define === 'function' && (define.cmd || define.amd)) {
        // 兼容amd & cmd
        define(factory);
    } else {
        // 兼容全局引入
        global.FuComponent = factory();
    }
    function factory() {
        /**
         * 构造函数
         *
         * @param {any} option 配置项
         */
        function FuComponent(option) {
            // 默认配置
            this.config = {

            };
            // 组件对象
            this.conponent = '';
            // 缓存
            this.cache = {};
            // 混合配置参数
            this.config = $.extend(this.config, option || {});
        }
        /**
         * 类-xxx组件
         */
        FuComponent.prototype = {
            constructor: FuComponent,
            // 渲染-组件DOM
            renderDom: function (dom) {
                var tag = '<div class="fu-component">';
                tag += '<h2>hi i am fu-component !</h2>';
                tag += '</div>';
                dom.innerHTML = tag;
            },
            // 公有方法-初始化
            init: function () {
                this._getConfig(this.config);
            },
            // 私有方法-创建实例
            _getConfig: function(config) {
                //...
            }
        }
        return FuComponent;
    }
    
})(typeof window !== 'undefined' ? window : global);  