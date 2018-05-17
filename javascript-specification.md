# JavaScript代码规范

从事前端开发也有一段时间了，一直在遵循着规范化开发，从 js 也逐渐转向了 ts ，在这个过程中也有了很多收获，在此把自己的开发心得写下来。

>  本文参考了参考自[掘金周刊](https://juejin.im/entry/599d433cf265da24797b5c66)，并做了补充和修改，同时删去了框架开发相关的内容(侵删)。

## 1. 命名规范

ECMAScript 规范中标识符采用驼峰大小写格式，驼峰命名法由小(大)写字母开始，后续每个单词首字母都大写。根据首字母是否大写，分为两种方式：

1. Pascal Case 大驼峰式命名法：首字母大写。eg：StudentInfo、UserInfo、ProductInfo

2. Camel Case 小驼峰式命名法：首字母小写。eg：studentInfo、userInfo、productInfo

标识符，则包括变量、函数名、类名、属性名和函数或类的参数，每个命名方法又略有不同，下面详细解释一下：

### 1.1 变量

- **命名方法**：小驼峰式命名法。

- **命名规范**：前缀应当是名词。(函数的名字前缀为动词，以此区分变量和函数)

- **命名建议**：尽量在变量名字中体现所属类型，如:length、count等表示数字类型；而包含name、title表示为字符串类型。

- **eg**

```js
// 好的命名方式
let maxCount = 10;
let tableTitle = 'LoginTable';
// 不好的命名方式
let setCount = 10;
let getTitle = 'LoginTable';
```

## 2. 注释

## 开发
