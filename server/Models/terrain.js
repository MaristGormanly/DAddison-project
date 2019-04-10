function terrain(name,imageUrl){
  this.name = name;
  this.imageUrl = imageUrl;
}
var terrainList = [
  new terrain("Mountain","/images/mountain.jpg"),
  new terrain("Desert","images/desert.jpg"),
  new terrain("Valley","images/Valley.jpg"),
  new terrain("Hill","images/hill.jpg")
]
exports.getAllTerrain = function (){
  return terrainList;
}
exports.getTerrain = function (terrain){
  if(terrain=="Mountain"){
    return terrainList[0];
  }
  if(terrain=="Desert"){
    return terrainList[1];
  }
  if(terrain=="Valley"){
    return terrainList[2];
  }
  if(terrain=="Hill"){
    return terrainList[3];
  }
}
