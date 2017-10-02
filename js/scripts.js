//Business Logic**********************************************************

//Selection of Squares
var board1 =
  [0,0,0,0,0,0,
  0,0,0,0,0,0,
  0,0,0,0,0,0,
  0,0,0,0,0,0,
  0,0,0,0,0,0,
  0,0,0,0,0,0]

  var board2 =
    [0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0]

var sumbitBoard = [];

var Players = function(player,board){
  this.player = player;
  this.board = board;
}

var score = [];

var scoreFunction = function(score){
  if (score.length === 3) {
    alert("player 1 wins");
  } else {
  }
}

//User Interface Logic**********************************************************

$(document).ready(function() {




$("").submit(function(event)){
  event.preventDefault();
  var player = 1;
  var player1 = new Player(player,board1);
}

for (i = 0; i <= board1.length; i ++) {
  $("").click(function() {
    if ()
    board1[] = 1;


    if (a1.length === 1) {
  } else if (a1.length === 2) {
    $("#missile1").show();
    score.push (1);
    console.log(score);
    scoreFunction(score);
  }
})
});
