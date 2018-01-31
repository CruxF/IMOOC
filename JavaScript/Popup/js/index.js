window.onload = function () {
  var Mask = document.getElementById("mask");
  var LoginCon = document.getElementById("loginCon");
  var Close = document.getElementById("close");
  var BtnLogin = document.getElementById("btnLogin");

  BtnLogin.onclick = function () {
    Mask.style.display = "block";
    LoginCon.style.display = "block";
  }
  Close.onclick = function () {
    Mask.style.display = "none";
    LoginCon.style.display = "none";
  }
  Mask.onclick = function () {
    Mask.style.display = "none";
    LoginCon.style.display = "none";
  }
}