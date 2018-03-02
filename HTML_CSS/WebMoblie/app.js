require("./index.scss");

let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDOM = document.getElementsByTagName('html')[0];
htmlDOM.style.fontSize = htmlWidth / 10 + 'px';

window.addEventListener('resize', (e) => {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

  htmlDOM.style.fontSize = htmlWidth / 10 + 'px';

})