/**
 * 异步-获取信息
 */
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('FetchData Finished');
      resolve('Fucking Awesome!');
    }, 2000)
  })
}

/**
 * 异步-获取名称
 */
async function fetchName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('FetchName Finished');
      resolve('Turkyden');
    }, 1000)
  })
}

/**
 * 异步-打招呼
 */
async function greet() {
  const data = await fetchData();
  const name = await fetchName();
  console.log(data + ' @ ' + name);
}

greet();

