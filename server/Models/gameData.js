var pace = require(./pace);
var pace = require(./weather);
var pace = require(./terrain);
function pace(){
  this.playerNames = [];
  this.playerStatus = [true,true,true,true,true];
  this.playerProfession = "";
  this.playerMoney = 0;
  this.startMonth = "";
  this.mileTravled = 0;
  this.groupHealth = 100;
  this.currentPace = "";
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
  }
    return "poor";
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
