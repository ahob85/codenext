var button = document.getElementById("button");
var breezewax = document.getElementById("breezewax");
button.addEventListener("click", playButton);

function playSong() {
  console.log("Playing");
  breezewax.play();
  button.innerHTML = "Pause!";
}

function pauseSong() {
  console.log("Pausing");
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