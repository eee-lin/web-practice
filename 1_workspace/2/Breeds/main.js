//犬種を選んで画像を取得するアプリケーション
const imageElement = document.getElementById("dog-image");
const button = document.getElementById("button");
const input = document.getElementById("input");

let url1 = "https://dog.ceo/api/breed/";
let url2 = "/images/random";
let input = "Akita";
// 指定したサーバーにデータを取りに行く
fetch(url1 + input + url2)
  // http://exapmple.com/xxx/123 → http://example.com/aiueo
  //history.replaceState('','','/aiueo');
  .then(res => {
    return res.json(); // 結果を json として読み込む
  })
  .then(data => {
    imageElement.src = data.message; // 画像を表示する
    console.log(data);
  });

button.onclick = function() {
  // reloadメソッドによりページをリロード
  window.location.reload();
};

const addTodo = () => {
  push(input.value);
  //card.textContent = input.value;
};
