/**
 * 深拷贝
 */
let obj = {
  a: 1,
  b: {
    c: 3,
    d: 4
  }
}

let newObj = JSON.parse(JSON.stringify(a));