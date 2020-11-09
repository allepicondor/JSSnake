var game;
var leaderboard
var OUTCOME;
var USERNAME_FIELD;
var submitButton;
const scale = 2
function setup() {
  createCanvas(550*scale, 402*scale);
  game = new VanillaSnake([400*scale,400*scale],10*scale);
  USERNAME_FIELD = createInput("Username")
  submitButton = createButton("submit")
  submitButton.mousePressed(SubmitScore);
  leaderboard = new Leaderboard("https://18.215.30.158/");
  leaderboard.request("snake/Leaderboard")
  setInterval(onTimerTick, 60);

}
function SubmitScore(){
  let username =  USERNAME_FIELD.value()
  let score = game.points;
  leaderboard.send(username, score,"snake/Leaderboard")
  game.reset();
}
function keyPressed() {
  game.keyInput(keyCode)
}
function onTimerTick(){
  leaderboard.request("snake/Leaderboard")
  game.update();
}
function draw() {
  background(51);
  game.draw();
  leaderboard.draw();
}
