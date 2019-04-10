var topTen = require("../models/topTen.js");
var gameScores = [];

exports.getTopScores = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(gameScores);
}
exports.saveTopScore = function(req, res) {
  var topScore = topTen.newTopScores(req.body.playerName, req.body.playerScore, req.body.dateEarned);
  gameScores.push(topScore);
  res.setHeader('Content-Type', 'application/json');
  res.send(gameScores);
}
