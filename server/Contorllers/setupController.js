var gameController = require("./gameController.js");

exports.getGameScreen  = function(req, res) {
  var gameScreen = gameController.getGameData().currentTerrain.imageUrl;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameScreen);
}
exports.saveProfession  = function(req, res) {
  gameController.getData().playerProfession = req.body.profession;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameController.getData().playerProfession);
}
exports.savePlayerName  = function(req, res) {
  gameController.getData().playerNames = req.body.names;
  res.setHeader('Content-Type', 'application/json');
  res.send(gameController.getData().playerNames);
}
exports.saveStartMonth  = function(req, res) {
  gameController.getData().startMonth = req.body.month;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameController.getData().startMonth);
}
exports.saveplayerMoney  = function(req, res) {
  gameController.getData().playerMoney = req.body.money;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameController.getData().playerMoney);
}
exports.saveCurrentPace  = function(req, res) {
  gameController.getData().currentPace = req.body.pace;
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameController.getData().currentPace);
}
