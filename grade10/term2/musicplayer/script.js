var playButton = document.getElementById("play-button");

var volumeSlider = document.getElementById("volume-slider");
var currentVolume = document.getElementById("current-volume");

var trackButtons = document.getElementsByClassName("track-select");
var trackTitles = document.getElementsByClassName("track-title");
var tracks = document.getElementsByClassName("track");

var currentTrackID = 0;
var currentTrack = tracks[currentTrackID];
var currentTrackDisplay = document.getElementById("current-track-display");

function activateButtons() {
  for(var i = 0; i < trackButtons.length; i++) {
    trackButtons[i].addEventListener("click", setCurrentTrackDelegate(i));
    //trackButtons[i].addEventListener("dblclick", togglePlayPause);
  }
}

function setCurrentTrackDelegate(trackID) {
  return function() {
    setCurrentTrack(trackID);
  }
}

function setCurrentTrack(trackID) {
  pauseTrack();
  currentTrack.load();
  currentTrackID = trackID;
  currentTrack = tracks[trackID];
  updateCurrentTrackDisplay();
  togglePlayPause();
}

playButton.addEventListener("click", togglePlayPause);
volumeSlider.addEventListener("input", changeVolume);

activateButtons();
changeVolume();
updateCurrentTrackDisplay();

function playTrack() {
  console.log("Playing");
  currentTrack.play();
  playButton.id = "pause-button";
  playButton.title = "Pause";
}

function pauseTrack() {
  console.log("Pausing");
  currentTrack.pause();
  playButton.id = "play-button";
  playButton.title = "Play";
}

function togglePlayPause() {
  if(currentTrack.paused) {
    playTrack();
  }
  else {
    pauseTrack();
  }
}

function changeVolume() {
  currentTrack.volume = volumeSlider.value / 100;
  updateVolumeText();
}

function updateVolumeText() {
  currentVolume.innerHTML = (Math.round(currentTrack.volume * 100)) + "%";
}

function updateCurrentTrackDisplay() {
  currentTrackDisplay.innerHTML = trackTitles[currentTrackID].textContent;
}