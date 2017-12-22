var button = document.getElementById("button");
var breezewax = document.getElementById("breezewax");
button.addEventListener("click", playButton);

function playSong() {
  alert("Playing");
  breezewax.play();
  button.innerHTML = "Pause!";
}

function pauseSong() {
  alert("Pausing");
  breezewax.pause();
  button.innerHTML = "Play!";
}

function playButton() {
  if(breezewax.paused) {
    playSong();
  }
  else {
    pauseSong();
  }
}