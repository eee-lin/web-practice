const display = document.getElementById("display");
const buttonBox = document.getElementById("button-Box");

const choices = [
  { question: "ジャグリング", ans: "正解！" },
  { question: "帰宅部", ans: "不正解！" },
  { question: "サッキー部", ans: "不正解！" }
];

for (const choice of choices) {
  const button = document.createElement("button");
  button.textContent = choice;
  buttonBox.append(button);
  button.onclick = function() {
    display.textContent = choices.ans;
  };
}
