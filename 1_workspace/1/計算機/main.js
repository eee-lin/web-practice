const display = document.getElementById("display");
const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");
const multiplyButton = document.getElementById("multiply-button");
const devideButton = document.getElementById("devide-button");
const equalButton = document.getElementById("equal-button");
const input = document.getElementById("input");
let enzan = "=";

plusButton.onclick = function() {
  //1つ前の演算を実行する
  if (enzan === "=") {
    display.textContent = input.value;
  } else if (enzan === "+") {
    display.textContent = Number(display.textContent) + Number(input.value);
  }
  enzan = "+";
};
