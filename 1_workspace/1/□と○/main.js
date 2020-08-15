// const figure = document.getElementById("figure");
// const squareButton = document.getElementById("square-button");
// const circleButton = document.getElementById("circle-button");

// circleButton.onclick = function (){
//   // figure に rounded クラスを追加する
//   //classListは、要素が持っているクラスの一覧
//   figure.classList.add('rounded')
// }

// squareButton.onclick = function (){
//   // figure から rounded クラスを削除する
//   figure.classList.remove('rounded')
// }
const figure = document.getElementById("figure");

figure.onclick = function() {
  figure.classList.toggle("rounded");
};
