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

var player1Value = [];
var player2Value = [];

//User Interface Logic**********************************************************

$(document).ready(function() {

  $("form.player1Board").submit(function(event){
     event.preventDefault();
     $("input:checkbox[name=player1]:checked").each(function(){
       var value = $(this).val();
       player1Value.push(value);
     });
     player1Value.forEach(function(value){
       board1[value] = 1;
     })
     $(".player1").hide();
     $(".player2").show();
     console.log(player1Value);
     console.log(board1);
   });

   $("form.player2Board").submit(function(event){
      event.preventDefault();
      $("input:checkbox[name=player2]:checked").each(function(){
        var value = $(this).val();
        player2Value.push(value);
      });
      player2Value.forEach(function(value){
        board2[value] = 1;
      })
      $(".player2").hide();
      $(".combined").show();
      console.log(player2Value);
      console.log(board2);
    });



// $("").submit(function(event)){
//   event.preventDefault();
//   var player = 1;
//   var player1 = new Player(player,board1);
// }
//
// for (i = 0; i <= board1.length; i ++) {
//   $("").click(function() {
//     if ()
//     board1[] = 1;
//
//
//     if (a1.length === 1) {
//   } else if (a1.length === 2) {
//     $("#missile1").show();
//     score.push (1);
//     console.log(score);
//     scoreFunction(score);
//   }
// })
});
