function weather(id,type,healthChange,mileChange,probability){
  this.ids = id;
  this.type = type;
  this.healthChange = healthChange;
  this.mileChange = mileChange;
  this.probability = probability;
}
var weatherList = [
  new weather(0,"Very Hot", -8,0.7,0.1),
  new weather(1,"Hot", -3,0.9,0.1),
  new weather(2,"Warm", 1,1,0.2),
  new weather(3,"Cool", 1,0.95,0.1),
  new weather(4,"Cold", -5,0.8,0.1),
  new weather(5,"Very Cold", -12,0.7,0.1),
  new weather(6,"Rain", -4,0.6,0.1),
  new weather(7,"Heavy Rain", -8,0.4,0.05),
  new weather(8,"Snow", -15,0.3,0.5),
  new weather(9,"Blizzard", -30,0.1,0.5),
  new weather(10,"Heavy Fog", -3,0.5,0.5),
]
exports.getAllWeather = function (){
  return weatherList;
}
exports.getWeather = function (weather){
  if(weather=="Very Hot"){
    return weatherList[0];
  }
  if(weather=="Hot"){
    return weatherList[1];
  }
  if(weather=="Warm"){
    return weatherList[2];
  }
  if(weather=="Cool"){
    return weatherList[3];
  }
  if(weather=="Cold"){
    return weatherList[4];
  }
  if(weather=="Very Cold"){
    return weatherList[5];
  }
  if(weather=="Rain"){
    return weatherList[6];
  }
  if(weather=="Heavy Rain"){
    return weatherList[7];
  }
  if(weather=="Snow"){
    return weatherList[8];
  }
  if(weather=="Blizzard"){
    return weatherList[9];
  }
  if(weather=="Heavy Fog"){
    return weatherList[10];
  }
}
exports.getRandomWeather = function (weather){
  var randomNum = Math.floor(Math.random()*(100 - 1 + 1)) + 1;
  if (randomNum < 10){
    return weatherList[0];
  }
  else if (randomNum < 20){
    return weatherList[1];
  }
  else if (randomNum < 40){
    return weatherList[2];
  }
  else if (randomNum < 50){
    return weatherList[3];
  }
  else if (randomNum < 60){
    return weatherList[4];
  }
  else if (randomNum < 70){
    return weatherList[5];
  }
  else if (randomNum < 80){
    return weatherList[6];
  }
  else if (randomNum < 85){
    return weatherList[7];
  }
  else if (randomNum < 90){
    return weatherList[8];
  }
  else if (randomNum < 95){
    return weatherList[9];
  }
  else {
    return weatherList[10];
  }
}
