var playButton = document.getElementById("play-button");
var breezewax = document.getElementById("breezewax");
var volumeSlider = document.getElementById("volume-slider");
var currentVolume = document.getElementById("current-volume");

changeVolume();

playButton.addEventListener("click", play);
volumeSlider.addEventListener("input", changeVolume);

function playSong() {
  console.log("Playing");
  breezewax.play();
  playButton.id = "pause-button";
  playButton.title = "Play";
}

function pauseSong() {
  console.log("Pausing");
  breezewax.pause();
  playButton.id = "play-button";
  playButton.title = "Pause";
}

function play() {
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