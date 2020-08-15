const imageElement = document.getElementById("cocktail-image");

// 指定したサーバーにデータを取りに行く
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then(res => {
    return res.json(); // 結果を json として読み込む
  })
  .then(data => {
    imageElement.src = data.drinks[0].strDrinkThumb; // 画像を表示する
    console.log(data.drinks[0].strDrinkThumb);
  });
