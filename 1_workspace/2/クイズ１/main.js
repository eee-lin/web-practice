// const list = [1,2,3]
// localStorage["items"] = JSON.stringify(list)

const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const feedback = document.getElementById("feedback");

// feedback の内容
const feedbacks = [
  "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
  "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
  "正解！ガニメデは、木星の第三惑星だよ！"
];

// 正解を判定する
choice1.onclick = function() {
  choiced(0);
};
choice2.onclick = function() {
  choiced(1);
};
choice3.onclick = function() {
  choiced(2);
};

// 正解を判定する
const choiced = function(choiceNumber) {
  feedback.textContent = feedbacks[choiceNumber];
};
