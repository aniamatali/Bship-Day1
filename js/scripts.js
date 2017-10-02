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


$("#a1, #a2, #a3, #a4, #a5, #a6, #a7, #a8, #a9, #a10, #a11, #a12, #a13, #a14, #a15, #a16, #a17, #a18, #a19, #a20, #a21, #a22, #a23, #a24, #a25, #a26, #a27, #a28, #a28, #a29, #a30, #a31, #a32, #a33, #a34, #a35, #a36").click(function() {
  var smtg = this.id;
})

$("#b1, #b2, #b3, #b4, #b5, #b6, #b7, #b8, #b9, #b10, #b11, #b12, #b13, #b14, #b15, #b16, #b17, #b18, #b19, #b20, #b21, #b22, #b23, #b24, #b25, #b26, #b27, #b28, #b28, #b29, #b30, #b31, #b32, #b33, #b34, #b35, #b36").click(function() {
  var smtg2 = this.id;
})

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
