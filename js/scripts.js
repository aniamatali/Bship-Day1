$(document).ready(function() {

var a1 = [];


  $("#a1").click(function() {
    this.value = "a1";
    a1.push(+1);
    console.log(a1);
    if (a1.length === 1) {
    alert("miss");
  } else if (a1.length === 2) {
    alert("hit");
  }
  });

});
