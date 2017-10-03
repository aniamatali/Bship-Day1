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

//constructor player

var Players = function(player,board){
  this.player = player;
  this.board = board;
}

//winning function
var winning = function(board){
  var value = true;
  board.forEach(function(bo) {
    if(bo === 1){
      value = false;
    }
  })
  if(value === true){
    alert("you win");
    index = 2;
  }
}

var score = [];

var player1Value = [];
var player2Value = [];

var index = 2;


var changeTurn = (function(index){
  if(index === 0){
     return index += 1;
  } else if (index === 1){
     return index -= 1;
  }
})

///computer turn function
var computerTurn = function(){
  var compValue = computerRand();
  while(board1[compValue-1] === 2){
    compValue = computerRand();
  }
  if(board1[compValue-1] != 2){
    if(board1[compValue-1] === 1){
      alert("computer hit a ship");
      $("#a"+compValue).addClass("hit");
      board1[compValue-1] = 2;
      winning(board1);
      computerTurn();
    } else if (board1[compValue-1] === 0){
      alert("computer miss");
      $("#a"+compValue).addClass("miss");
      board1[compValue-1] = 2;
    }
  }
}

///computer selection function
var compSelect = function(){
  for(i=0;i<5;i++){
    var compValue = computerRand();
    while(board2[compValue-1] === 1){
      compValue = computerRand();
    }
    board2[compValue-1]= 1;
  }
}

///computer random function
var computerRand = function(){
  return Math.floor(Math.random() * 36) + 1;
}

//User Interface Logic**********************************************************

$(document).ready(function(){


  $("form.player1Board").submit(function(event){
     event.preventDefault();
     debugger;
     $("input:checkbox[name=player1]:checked").each(function(){
       var value = $(this).val();
       player1Value.push(value);
     });
     player1Value.forEach(function(value){
       board1[value] = 1;
     })
     $(".player1").hide();
     $(".combined").show();
     index = 1;
     compSelect();
   });

  //  $("form.player2Board").submit(function(event){
  //     event.preventDefault();
  //     $("input:checkbox[name=player2]:checked").each(function(){
  //       var value = $(this).val();
  //       player2Value.push(value);
  //     });
  //     player2Value.forEach(function(value){
  //       board2[value] = 1;
  //     })
  //     $(".player2").hide();
  //     $(".combined").show();
  //     index = 0;
   //
  //   });



// $("#a1, #a2, #a3, #a4, #a5, #a6, #a7, #a8, #a9, #a10, #a11, #a12, #a13, #a14, #a15, #a16, #a17, #a18, #a19, #a20, #a21, #a22, #a23, #a24, #a25, #a26, #a27, #a28, #a28, #a29, #a30, #a31, #a32, #a33, #a34, #a35, #a36").click(function() {
//   var smtg = this.id;
//   var number = parseInt(smtg.replace("a",""));
//   if(index === 0 && board1[number-1] != 2){
//     if(board1[number-1] === 1){
//       alert("you hit a ship");
//       $(this).addClass("hit");
//     } else if (board1[number-1] === 0){
//       alert("you miss");
//       $(this).addClass("miss");
//     }
//     board1[number-1] = 2;
//     winning(board1);
//   }
// })

$("#b1, #b2, #b3, #b4, #b5, #b6, #b7, #b8, #b9, #b10, #b11, #b12, #b13, #b14, #b15, #b16, #b17, #b18, #b19, #b20, #b21, #b22, #b23, #b24, #b25, #b26, #b27, #b28, #b28, #b29, #b30, #b31, #b32, #b33, #b34, #b35, #b36").click(function() {
  var smtg2 = this.id;
  var number = parseInt(smtg2.replace("b",""));
  if(index === 1 && board2[number-1] != 2){
    if(board2[number-1] === 1){
      alert("you hit a ship");
      $(this).addClass("hit");
      board2[number-1] = 2;
      winning(board2);
    } else if (board2[number-1] === 0){
      alert("you miss");
      $(this).addClass("miss");
      board2[number-1] = 2;
      computerTurn();
    }

    alert(board1)
  }

})



});
