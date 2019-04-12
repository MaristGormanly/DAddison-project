function pace(name,miles,healthChange){
  this.name = name;
  this.miles = miles;
  this.healthChange = healthChange;
}
var paceList = [
  new pace("Steady",20,0),
  new pace("Strenous",30,-3),
  new pace("Grueling",35,-8),
  new pace("Resting",0,5)
]
exports.getAllPaces = function (){
  return paceList;
}
exports.getPace = function (pace){
  if(pace=="Steady"){
    return paceList[0];
  }
  if(pace=="Strenous"){
    return paceList[1];
  }
  if(pace=="Grueling"){
    return paceList[2];
  }
  if(pace=="Resting"){
    return paceList[3];
  }
}
