const display = document.getElementById("display");
const button = document.getElementById("button");

let count = 0;

const countUp = function() {
  // count を更新
  count += 1;
  // count を秒単位にして表示
  display.textContent = count / 100;
};

// 実行中のタイマーのid
let id = null; // null は 値なし を意味する値

button.onclick = function() {
  // 10ms ごとに countUp を実行するように登録する
  if (id === null) {
    // start
    id = setInterval(countUp, 10);
    button.textContent = "stop";
  } else {
    // stop
    clearInterval(id);
    id = null;
    button.textContent = "start";
  }
};
