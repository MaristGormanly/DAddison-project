var gameData = require("../models/gameData.js");

exports.changePace = function(req,res){
gameData.currentPace = req.body.pace;
res.setHeader('Content-Type', 'text/plain');
res.send(gameData.currentPace());
};
exports.updateGame = function(req,res){

};
exports.resetGame = function(req,res){

};
exports.getGameData = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.send(gameData);
}
