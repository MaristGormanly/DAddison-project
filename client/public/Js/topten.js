document.body.addEventListener("keyup", function(e){
  if (e.key == " ")
    window.location.href = "/mainmenu.html";
});

var topscore1 = {name:"Daniel", score:1000, Date:"Mar 15, 2019"};
var topscore2 = {name:"Daniella", score:500, Date:"Mar 14, 2019"};
var topscore3 = {name:"Henry", score:2000, Date:"Mar 16, 2019"};
var topscore4 = {name:"vida", score:800, Date:"Mar 13, 2019"};

var scoreArray = [topscore1,topscore2,topscore3,topscore4];
for (var j = 0; j < 3; j++) {
  for (var i = 0; i < scoreArray.length - 1; i++) {
    if(scoreArray[i].score > scoreArray[i+1]){
      var temp = scoreArray[i];
      scoreArray[i] = scoreArray[i+1];
      scoreArray[i+1] = temp;
    }
  }
}
window.onload = function() {
  document.getElementById("row1Name").innerHTML = scoreArray[0].name;
  document.getElementById("row1Score").innerHTML = scoreArray[0].score;
  document.getElementById("row1Date").innerHTML = scoreArray[0].Date;
  document.getElementById("row2Name").innerHTML = scoreArray[1].name;
  document.getElementById("row2Score").innerHTML = scoreArray[1].score;
  document.getElementById("row2Date").innerHTML = scoreArray[1].Date;
  document.getElementById("row3Name").innerHTML = scoreArray[2].name;
  document.getElementById("row3Score").innerHTML = scoreArray[2].score;
  document.getElementById("row3Date").innerHTML = scoreArray[2].Date;
  document.getElementById("row4Name").innerHTML = scoreArray[3].name;
  document.getElementById("row4Score").innerHTML = scoreArray[3].score;
  document.getElementById("row4Date").innerHTML = scoreArray[3].Date;
}
