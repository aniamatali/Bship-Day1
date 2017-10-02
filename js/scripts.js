
$(document).ready(function() {

var a1 = [];
var a2 = [];
var a3 = [];
var a4 = [];
var a5 = [];
var a6 = [];

var b1 = [];
var b2 = [];
var b3 = [];
var b4 = [];
var b5 = [];
var b6 = [];

var c1 = [];
var c2 = [];
var c3 = [];
var c4 = [];
var c5 = [];
var c6 = [];

var d1 = [];
var d2 = [];
var d3 = [];
var d4 = [];
var d5 = [];
var d6 = [];

var score = [];

var scoreFunction = function(score){
  if (score.length === 3) {
    alert("player 1 wins");
  } else {
  }
}

  $("#a1").click(function() {

    a1.push(+1);
    if (a1.length === 1) {
    $(".player1").append("<p>Square Selected</p>");
  } else if (a1.length === 2) {
    alert("hit");
    $("#missile1").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
})


  $("#a2").click(function() {

    a2.push(+1);
    if (a2.length === 1) {
    $(".player1").append("<p>Square Selected</p>");
  } else if (a2.length === 2) {
    alert("hit");
    $("#missile2").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#a3").click(function() {
    a3.push(+1);
    if (a3.length === 1) {
    alert("miss");
  } else if (a3.length === 2) {
    alert("hit");
    $("#missile3").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#a4").click(function() {
    a4.push(+1);
    if (a4.length === 1) {
    alert("miss");
  } else if (a4.length === 2) {
    alert("hit");
    $("#missile4").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#a5").click(function() {
    a1.push(+1);
    if (a5.length === 1) {
    alert("miss");
  } else if (a5.length === 2) {
    alert("hit");
    $("#missile5").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#a6").click(function() {
    a1.push(+1);
    if (a6.length === 1) {
    alert("miss");
  } else if (a6.length === 2) {
    alert("hit");
    $("#missile6").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#b1").click(function() {
    b1.push(+1);
    if (b1.length === 1) {
    alert("miss");
  } else if (b1.length === 2) {
    alert("hit");
    $("#missile7").show();
    score.push (1);
    scoreFunction(score);
  }
  });

  $("#b2").click(function() {
    b2.push(+1);
    if (b2.length === 1) {
    alert("miss");
  } else if (b2.length === 2) {
    alert("hit");
    $("#missile8").show();
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#b3").click(function() {
    b3.push(+1);
    if (b3.length === 1) {
    alert("miss");
  } else if (b3.length === 2) {
    alert("hit");
    $("#missile9").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#b4").click(function() {
    b4.push(+1);
    if (b4.length === 1) {
    alert("miss");
  } else if (b4.length === 2) {
    alert("hit");
    $("#missile10").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#b5").click(function() {
    b5.push(+1);
    if (b5.length === 1) {
    alert("miss");
  } else if (b5.length === 2) {
    alert("hit");
    $("#missile11").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#b6").click(function() {
    b6.push(+1);
    if (b6.length === 1) {
    alert("miss");
  } else if (b6.length === 2) {
    alert("hit");
    $("#missile12").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#c1").click(function() {
    c1.push(+1);
    if (c1.length === 1) {
    alert("miss");
  } else if (c1.length === 2) {
    alert("hit");
    $("#missile13").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#c2").click(function() {
    c2.push(+1);
    if (c2.length === 1) {
    alert("miss");
  } else if (c2.length === 2) {
    alert("hit");
    $("#missile14").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#c3").click(function() {
    c3.push(+1);
    if (c3.length === 1) {
    alert("miss");
  } else if (c3.length === 2) {
    alert("hit");
    $("#missile15").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#c4").click(function() {
    c4.push(+1);
    if (c4.length === 1) {
    alert("miss");
  } else if (c4.length === 2) {
    alert("hit");
    $("#missile16").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#c5").click(function() {
    c5.push(+1);
    if (c5.length === 1) {
    alert("miss");
  } else if (c5.length === 2) {
    alert("hit");
    $("#missile17").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#c6").click(function() {
    c6.push(+1);
    if (c6.length === 1) {
    alert("miss");
  } else if (c6.length === 2) {
    alert("hit");
    $("#missile18").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#d1").click(function() {
    d1.push(+1);
    if (d1.length === 1) {
    alert("miss");
  } else if (d1.length === 2) {
    alert("hit");
    $("#missile19").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#d2").click(function() {
    d2.push(+1);
    if (d2.length === 1) {
    alert("miss");
  } else if (d2.length === 2) {
    alert("hit");
    $("#missile20").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#d3").click(function() {
    d3.push(+1);
    if (d3.length === 1) {
    alert("miss");
  } else if (d3.length === 2) {
    alert("hit");
    $("#missile21").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#d4").click(function() {
    d4.push(+1);
    if (d4.length === 1) {
    alert("miss");
  } else if (d4.length === 2) {
    alert("hit");
    $("#missile22").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#d5").click(function() {
    d5.push(+1);
    if (d5.length === 1) {
    alert("miss");
  } else if (d5.length === 2) {
    alert("hit");
    $("#missile23").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });

  $("#d6").click(function() {
    d6.push(+1);
    if (d6.length === 1) {
    alert("miss");
  } else if (d6.length === 2) {
    alert("hit");
    $("#missile24").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
  });





});
