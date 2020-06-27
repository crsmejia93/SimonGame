var buttonColors = ["red","blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var startingPressed = false;
var level = 1;

function nextSequence() {//this is the sequence the user will follow
  var randomNumber = Math.floor((Math.random()*4));
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  gamePattern.forEach((color)=>{
    $("#"+color).fadeOut('fast').fadeIn('fast', playSound(color));
    setTimeout(800);
    console.log(color);
  });
  levelProcess();
}

function playSound(name){
  var sound = new Audio("sounds/"+name+".mp3");
  sound.play();
}

function animatePress(currentColor){
  $('#'+currentColor).addClass('pressed');
  setTimeout(function(){
    $('#'+currentColor).removeClass('pressed');
  }, 100);
}

function levelProcess(){
  $("#level-title").text('Level '+level);
  level++;
}

function checkAnswer(){
  gamePattern.forEach((gameColor)=>{
    console.log("Game pattern color: "+ gameColor);
    userClickedPattern.forEach((userColor)=>{
      console.log("User pattern color: "+ userColor);
    });
  });
}

$(".btn").click(function(){
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer();
});

$(document).on('keydown', (argument) => {
  if(argument.key === 'a' && startingPressed === false){
    nextSequence();
    startingPressed = true;
  }
});
