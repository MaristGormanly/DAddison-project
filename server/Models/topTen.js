function topTen(playerName,playerScore,dateEarned){
  this.name = playerName;
  this.playerScore = playerScore;
  this.dateEarned = dateEarned;
}
exports.newTopScores = function(playerName,playerScore,dateEarned){
  return new topTen(playerName,playerScore,dateEarned);
}
