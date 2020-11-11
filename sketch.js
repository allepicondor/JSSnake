var game;
var leaderboard
var OUTCOME;
var USERNAME_FIELD;
var submitButton;
const scale = 1
function setup() {
  createCanvas(550*scale, 402*scale);
  game = new VanillaSnake([400*scale,400*scale],10*scale);
  USERNAME_FIELD = createInput("Username")
  submitButton = createButton("submit")
  submitButton.mousePressed(SubmitScore);
  leaderboard = new Leaderboard("https://therionmcserver.xyz/");
  leaderboard.request("snake/Leaderboard")
  setInterval(onTimerTick, 60);
  setInterval(GrabLeaderBoardData, 1000);

}
function SubmitScore(){
  let username =  USERNAME_FIELD.value()
  let score = game.points;
  leaderboard.send(username, score,"snake/Leaderboard")
  game.reset();
}
function GrabLeaderBoardData(){
  leaderboard.request("snake/Leaderboard")
}
function keyPressed() {
  game.keyInput(keyCode)
}

function onTimerTick(){
  game.update();
}
function draw() {
  background(51);
  game.draw();
  leaderboard.draw();
}
