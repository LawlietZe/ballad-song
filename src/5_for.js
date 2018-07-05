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