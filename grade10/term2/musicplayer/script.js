var button = document.getElementById("button");
var breezewax = document.getElementById("breezewax");
button.addEventListener("click", playSong);

function playSong(){
  alert("Hello!");
  breezewax.play();
}
