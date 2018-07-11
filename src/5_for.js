var obj = {
    name: 'dengdeng',
    age: 51
}

for( var item in obj ) {
    console.log(obj[item]);
}

var arr = ['dengdeng', 51]; // 数组是特殊的对象，只不过 key 值为数字

for( var item in arr ) {
    console.log(arr[item]);
}

var option = {
    name: 'dd',
    getName: function() {
        console.log('dd');
    },
    callback: function() {
        this.getName();
        
    }
}

var name = 'global'
var getName = function() {
    console.log('global');
}

option.callback();