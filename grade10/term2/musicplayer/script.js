var playButton = document.getElementById("play-button");

var volumeSlider = document.getElementById("volume-slider");
var currentVolume = document.getElementById("current-volume");

var trackButtons = document.getElementsByClassName("track-select");
var trackTitles = document.getElementsByClassName("track-title");
var tracks = document.getElementsByClassName("track");

var currentTrackID = 0;
var currentTrack = tracks[currentTrackID];
var currentTrackDisplay = document.getElementById("current-track-display");

var trackDurations = document.getElementsByClassName("track-duration");

playButton.addEventListener("click", togglePlayPause);
volumeSlider.addEventListener("input", changeVolume);

setTrackDurations();
activateButtons();
changeVolume();
updateCurrentTrackDisplay();

function setTrackDurations() {
  for(var i = 0; i < tracks.length; i++) {
    tracks[i].addEventListener("loadedmetadata", setTrackDuration(i));
  }
}

function setTrackDuration(trackID) {
  return function() {
    var seconds = tracks[trackID].duration;
    var minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    if(seconds < 10) {
      seconds = "0" + seconds;
    }
    trackDurations[trackID].innerHTML = minutes + ":" + seconds;
  }
}

function activateButtons() {
  for(var i = 0; i < trackButtons.length; i++) {
    trackButtons[i].addEventListener("click", setCurrentTrack(i));
    //trackButtons[i].addEventListener("dblclick", togglePlayPause);
  }
}

function setCurrentTrack(trackID) {
  return function() {
    setCurrentTrack(trackID);
    pauseTrack();
    currentTrackID = trackID;
    currentTrack = tracks[trackID];
    currentTrack.load();
    updateCurrentTrackDisplay();
    togglePlayPause();
  }
}

function playTrack() {
  console.log("Playing");
  changeVolume();
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
  console.log("Current volume: " + currentTrack.volume);
}

function updateVolumeText() {
  currentVolume.innerHTML = (Math.round(currentTrack.volume * 100)) + "%";
}

function updateCurrentTrackDisplay() {
  currentTrackDisplay.innerHTML = trackTitles[currentTrackID].textContent;
}