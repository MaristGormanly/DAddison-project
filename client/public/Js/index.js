document.body.addEventListener("keyup", function(e){
  if (e.key == " ")
    window.location.href = "/mainmenu.html";
});
window.onload = function() {
  fadeout();
}

function fadeout() {
  document.getElementById('fadetext').style.opacity = '0';
  window.setTimeout(fadein, 1000); //1 second
}

function fadein() {
  document.getElementById('fadetext').style.opacity = '1';
  window.setTimeout(fadeout, 1000); //1 second
}
