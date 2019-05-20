var pace = require("./pace");
var weather = require("./weather");
var terrain = require("./terrain");
function gameData(){
  this.playerNames = [];
  this.playerStatus = [true,true,true,true,true];
  this.playerProfession = "";
  this.playerMoney = 0;
  this.startMonth = "";
  this.mileTravled = 0;
  this.groupHealth = 100;
  this.currentPace = pace.getPace("Resting");
  this.daysOnTrail = 0;
  this.currentWeather = weather.getRandomWeather();
  this.currentTerrain = terrain.getTerrain("Hill");
  this.messages= "";
}

exports.healthCheck = function(){
  if(groupHealth>=80){
    return "good";
  }
  else if (groupHealth>=50){
    return "fair";
  }
  else if (groupHealth>=20){
    var response = "poor";
    for (var i = 0;i < playerStatus.length;i++){
      var randomNum = Math.floor(Math.random()*(100 - 1 + 1)) + 1;
      if (randomNum <=3 && playerStatus[i] == true){
        playerStatus[i] = false;
        response += playerNames[i]+ " has been eliminated "
      }
    }
    return response;
  }
  else if (groupHealth>0){
    var response = "very poor";
    for (var i = 0;i < playerStatus.length;i++){
      var randomNum = Math.floor(Math.random()*(100 - 1 + 1)) + 1;
      if (randomNum <=10 && playerStatus[i] == true){
        playerStatus[i] = false;
        response += playerNames[i]+ " has been eliminated "
      }
    }
    return response;
  }
  else{
    for (var i = 0;i < playerStatus.length;i++){
      playerStatus[i] = false;
    }
    return "everyone in party is eliminated, you lose"
  }
}

exports.getGameData = function(){
  return new gameData()
}

exports.getSetupScreen = function(id) {
  if (id == 1) {
    return startGame1;
  }
  if (id == 2){
    return startGame2;
  }
}
var startGame1 = "<p>Many kinds of people made the trip trip to Oregon.</p>"
         + "<p>You may:</p>"
         + "<ol id=\"setupQuestions1\" >"
         + "<li id=\"bankerMenuItem\">Be a banker from Boston</li>"
         + "<li id=\"carpenterMenuItem\">Be a carpenter from Ohio</li>"
         + "<li id=\"farmerMenuItem\">Be a farmer from Illinois</li>"
         + "<li id=\"differencesMenuItem\">Find out the differences between the choices</li>"
         + "</ol>"
         + "<div id=\"selectedOption\">What is your choice?</div>";

var startGame2 = "<p>What is your wagon leader name.</p>"
        + "<ol id=\"setupQuestions2\" >"
        + "<li id=\"bankerMenuItem\"><input id=\"leader\" type = \"text\"></li>"
        + "</ol>"
        + "<button> submit </button>"
