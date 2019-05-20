document.body.addEventListener("keyup", function(e){
  if (e.key == " ")
    window.location.href = "/mainmenu.html";
  if (e.key == "1"|| e.key == "2" || e.key == "3"){
    if (currentScreen == 1){
      if (e.key == "1"){
        saveProfession("Banker");
        saveMoney(2000);
        getScreen(2);
      }
      if (e.key == "2"){
        saveProfession("Carpenter");
        saveMoney(1800);
        getScreen(2);
      }
      if (e.key == "3"){
        saveProfession("Farmer");
        saveMoney(1500);
        getScreen(2);
      }
    }
  }
});

var currentScreen = 1;

getScreen(1);

function getScreen(screen) {
  fetch("http://localhost:1337/api/setup/screen/" + screen)
    .then(function(response) {
      if (response.status == 200){
        response.text()
          .then(function (data) {
            setupDiv.innerHTML = data;
          })
      }
      else {
        console.log(response.status + "")
        console.log(response.value)
      }
    });
}

function saveProfession(profession){
  fetch("http://localhost:1337//api/setup/playerProfession", {
    method: 'POST',
    body: JSON.stringify(profession),
    headers: {'content-type': 'application/json'}
  })
}

function saveMoney(money){
  fetch("http://localhost:1337//api/setup/playerMoney", {
    method: 'POST',
    body: JSON.stringify(money),
    headers: {'content-type': 'application/json'}
  })
}
