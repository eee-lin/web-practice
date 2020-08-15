// const number = 24;

// if (number % 3 === 0) {
//   console.log(number + "!!!!!!!");
// } else {
//   console.log(number);
// }
// n に入っている値を 1 から、 number まで、 1 ずつ増やしながら、 {} の中身を繰り返す
// for (let n = 1; n <= number; n++) {
//   if (n % 3 === 0) {
//     console.log(n + "!!!!!!!");
//   } else {
//     console.log(n);
//   }
// }
// 引数 number を受け取る関数
// eslint-disable-next-line no-unused-vars
const genkiFunction = function(number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log(`FizzBuzz`);
    } else if (n % 5 === 0) {
      console.log("Buzz");
    } else if (n % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(n);
    }
  }
};

//３が大好き
//元気な秒針
//まだやっていない
