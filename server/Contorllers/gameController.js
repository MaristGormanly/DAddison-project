var gameData = require("../models/gameData.js");
var weather = require("../models/weather.js");
var terrain = require("../models/terrain.js");
var pace = require("../models/pace.js");
var currentGameData = gameData.getGameData();

exports.changePace = function(req,res){
  currentGameData.currentPace = req.body.pace;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameData.currentPace());
};
exports.updateGame = function(req,res){
  currentGameData.groupHealth += currentGameData.currentPace.healthChange + currentGameData.currentWeather.healthChange;
  if(currentGameData.groupHealth > 100){
    currentGameData.groupHealth = 100;
  }
  gameData.healthCheck();
  if(currentGameData.groupHealth = 0){
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.send("everyone in party is eliminated, you lose");
  }
  currentGameData.daysOnTrail++;
  if(currentGameData.daysOnTrail > 45){
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.send("You've ran out of time, you lose");
  }
  currentGameData.currentWeather = weather.getRandomWeather();
  currentGameData.mileTravled += currentGameData.mileTravled + currentGameData.currentPace.miles;
  if(currentGameData.mileTravled > 500){
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.send("Congratulations, you won the game");
  }
};
exports.resetGame = function(req,res){
  currentGameData.playerNames = [];
  currentGameData.playerStatus = [true,true,true,true,true];
  currentGameData.playerProfession = "";
  currentGameData.playerMoney = 0;
  currentGameData.startMonth = "";
  currentGameData.mileTravled = 0;
  currentGameData.groupHealth = 100;
  currentGameData.currentPace = pace.getPace("Resting");
  currentGameData.daysOnTrail = 0;
  currentGameData.currentWeather = weather.getRandomWeather();
  currentGameData.currentTerrain = terrain.getTerrain("Hill");
  currentGameData.messages= "";
};
exports.getGameData = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData);
}

exports.getPlayerStatus = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.playerStatus);
}

exports.getMilesTraveled = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.milesTraveled);
}

exports.saveMilesTraveled = function(req, res) {
  currentGameData.mileTravled = req.body.milesTraveled;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.milesTraveled);
}

exports.updateMilesTraveled = function(req, res) {
  currentGameData.mileTravled = req.body.milesTraveled;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.milesTraveled);
}

exports.getGroupHealth = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.groupHealth);
}

exports.saveGroupHealth = function(req, res) {
  currentGameData.groupHealth = req.body.groupHealth;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.groupHealth);
}

exports.updateGroupHealth = function(req, res) {
  currentGameData.groupHealth = req.body.groupHealth;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.groupHealth);
}

exports.getDaysOnTrail = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.daysOnTrail);
}

exports.saveDaysOnTrail = function(req, res) {
  currentGameData.daysOnTrail = req.body.daysOnTrail;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.daysOnTrail);
}

exports.updateDaysOnTrail = function(req, res) {
  currentGameData.daysOnTrail = req.body.daysOnTrail;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.daysOnTrail);
}

exports.getCurrentWeather = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.currentWeather);
}

exports.saveCurrentWeather = function(req, res) {
  currentGameData.currentWeather = req.body.currentWeather;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.currentWeather);
}

exports.updateCurrentWeather = function(req, res) {
  currentGameData.currentWeather = weather.getRandomWeather;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.currentWeather);
}

exports.getCurrentTerrain = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.currentTerrain);
}

exports.saveCurrentTerrain = function(req, res) {
  currentGameData.currentTerrain = req.body.terrain;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.currentTerrain);
}

exports.updateCurrentTerrain = function(req, res) {
  currentGameData.currentTerrain = req.body.terrain;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.currentTerrain);
}

exports.getMessages = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.messages);
}

exports.saveMessages = function(req, res) {
  currentGameData.messages = req.body.messages;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.messages);
}

exports.updateMessages = function(req, res) {
  currentGameData.messages = req.body.messages;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData.messages);
}
