document.body.addEventListener("keyup", function(e){
  if (e.key == "1")
    window.location.href = "/trail.html";
  if (e.key == "3")
    window.location.href = "/topten.html";
  if (e.key == "4")
    toggleaudio();
});

function toggleaudio() {
  var audioplayer = document.getElementById("audioplayer");
  var audiobutton = document.getElementById("audiobutton");

  if (audioplayer.volume === 1){
    audioplayer.volume = 0;
    audiobutton.value = "Turn Sound (On)";
  }
  else {
    audioplayer.volume = 1;
    audiobutton.value = "Turn Sound (Off)";
  }
}
