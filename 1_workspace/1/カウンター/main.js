//document.getElementById("○○")は、idをもとに HTML の要素を取得するもの
//idがdisplayを取得している
const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");
const display3 = document.getElementById("display3");
const display4 = document.getElementById("display4");
//idがplus-buttonを取得している
const plusButton = document.getElementById("plus-button");
//JavaScript から HTML の要素にアクセスする仕組みをDOMという
const minusButton = document.getElementById("minus-button");
const multiplyButton = document.getElementById("multiply-button");
const devideButton = document.getElementById("devide-button");
const equalButton = document.getElementById("equal-button");

//数字をクリック
const one = document.getElementById("1");
//const two = document.getElementById("2");
////const three = document.getElementById("3");
//const four = document.getElementById("4");

//let count = 0;
let firstclick = false;
let markclick = false;
let secondclick = false;
let firstcount = 0;
let secondcount = 0;
let answer = 0;

one.onclick = function() {
  if (firstclick === false) {
    firstcount = 1;
    firstclick = true;
    display1.textContent = firstcount;
  } else {
    secondcount = 1;
    secondclick = true;
    display3.textContent = secondcount;
  }
};

//on + イベント名
plusButton.onclick = function() {
  // count を更新
  //count += 1;
  if (markclick === false) {
    markclick = true;
    display2.textContent = "+";
  }
};

minusButton.onclick = function() {
  if (markclick === false) {
    markclick = true;
    display2.textContent = "-";
  }
};

multiplyButton.onclick = function() {
  if (markclick === false) {
    markclick = true;
    display2.textContent = "×";
  }
};

// devideButton.onclick = function() {
//   if (markclick === false) {
//     markclick = true;
//     display2.textContent = "/";
//   }
// };

equalButton.onclick = function() {
  if (firstclick === true && secondclick === true && markclick === true) {
    if (display2.textContent === "+") {
      answer = firstcount + secondcount;
      console.log(answer);
    } else if (display2.textContent === "-") {
      answer = firstcount - secondcount;
    } else if (display2.textContent === "×") {
      answer = firstcount * secondcount;
    } else {
      answer = firstcount / secondcount;
    }
  }
  display4.textContent = answer;
};

//計算機
