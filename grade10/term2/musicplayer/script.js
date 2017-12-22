var button = document.getElementById("button");
var breezewax = document.getElementById("breezewax");
var volumeSlider = document.getElementById("volume-slider");
var currentVolume = document.getElementById("current-volume");

changeVolume();

button.addEventListener("click", playButton);
volumeSlider.addEventListener("input", changeVolume);

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

function changeVolume() {
  breezewax.volume = volumeSlider.value / 100;
  updateVolumeText();
}

function updateVolumeText() {
  currentVolume.innerHTML = (Math.round(breezewax.volume * 100)) + "%";
}