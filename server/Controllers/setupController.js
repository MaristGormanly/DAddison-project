var gameController = require("./gameController.js");
var gameData = require("../models/gameData.js");

exports.getGameScreen  = function(req, res) {
  var gameScreen = gameController.getGameData().currentTerrain.imageUrl;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameScreen);
}
exports.saveProfession  = function(req, res) {
  gameController.getGameData().playerProfession = req.body.profession;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameController.getGameData().playerProfession);
}
exports.savePlayerName  = function(req, res) {
  gameController.getGameData().playerNames = req.body.names;
  res.setHeader('Content-Type', 'application/json');
  res.send(gameController.getGameData().playerNames);
}
exports.saveStartMonth  = function(req, res) {
  gameController.getGameData().startMonth = req.body.month;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameController.getGameData().startMonth);
}
exports.savePlayerMoney  = function(req, res) {
  gameController.getGameData().playerMoney = req.body.money;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameController.getGameData().playerMoney);
}
exports.saveCurrentPace  = function(req, res) {
  gameController.getGameData().currentPace = req.body.pace;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameController.getGameData().currentPace);
}
exports.getAllPlayerNames  = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(gameController.getGameData().playerNames);
}
exports.getPlayerProfession  = function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameController.getGameData().playerProfession);
}
exports.getPlayerMoney  = function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameController.getGameData().playerMoney);
}
exports.updatePlayerMoney  = function(req, res) {
  gameController.getGameData().playerMoney = req.body.money;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameController.getGameData().playerMoney);
}
exports.getStartMonth  = function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameController.getGameData().startMonth);
}

exports.getCurrentPace  = function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameController.getGameData().currentPace);
}
exports.updateCurrentPace  = function(req, res) {
  gameController.getGameData().currentPace = req.body.pace;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameController.getGameData().currentPace);
}

exports.getSetupScreen = function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameData.getSetupScreen(req.params.id));
}

/*exports.changePlayerName  = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(gameController.getData().playerNames);
}
exports.deletePlayerName  = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(gameController.getData().playerNames);
}
*/
