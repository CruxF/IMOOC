function a() {
  var i = 0;

  function b() {
    alert(++i);
  }
  return b;
}
var c = a();
c();