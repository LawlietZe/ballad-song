// function* idMaker() {
//   let index = 0;
//   while(true) {
//     yield index++;
//   }
// }

// let gen = idMaker();

// let val1 = gen.next().value;
// let val2 = gen.next().value;

var myInterable = {};
myInterable[Symbol.iterator] = function* (){
  yield 1;
  yield 2;
  yield 3;
}

let arr = [...myInterable];
