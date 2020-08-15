const imageElement = document.getElementById("dog-image");
const button = document.getElementById("button");

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => {
    return res.json(); // 結果を json として読み込む
  })
  .then(data => {
    imageElement.src = data.message; // 画像を表示する
    // console.log(data);
  });

button.onclick = function() {
  // reloadメソッドによりページをリロード
  window.location.reload();
};
