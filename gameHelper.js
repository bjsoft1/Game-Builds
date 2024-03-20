var container = document.querySelector("#unity-container");
var canvas = document.querySelector("#unity-canvas");
var loadingBar = document.querySelector("#unity-loading-bar");
var progressBarFull = document.querySelector("#unity-progress-bar-full");
var fullscreenButton = document.querySelector("#unity-fullscreen-button");
var warningBanner = document.querySelector("#unity-warning");
onLoadGame();
function onLoadGame() {
  fullscreenButton.addEventListener('onClick', function(e){
    onFullScreenButtonClick();
  });
  container.style.width = "100vw";
  container.style.maxWidth = "100vw";
  container.style.height = "100vh";
  container.style.maxHeight = "100vh";
  container.style.backgroundColor = "rgb(35,31,32)";
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";

  const width = window.innerWidth;
  const height = window.innerHeight;

  if (currentSceneIndex != 3) {
    if (width > height) {
      canvas.style.width = `${height / 1.4}px`;
      canvas.style.maxWidth = `${height / 1.4}px`;
      //canvas.style.
    }
  } else {
  }
  canvas.style.maxWidth = "100vw";
  canvas.style.height = "100vh";
  canvas.style.maxHeight = "100vh";
}

function onFullScreenButtonClick(unityInstance = null)
{
if (unityInstance && unityInstance.SetFullscreen) unityInstance.SetFullscreen(1);
const width = window.innerWidth;
const height = window.innerHeight;
canvas.style.width = `${height / 1.4}px`;
canvas.style.maxWidth = `${height / 1.4}px`;

}


var currentSceneIndex = 0;
function updateJsSceneIndex(index) {
  currentSceneIndex = index;
}
updateScreenOrientation(0);
function updateScreenOrientation(isLandScape) {}

window.addEventListener("orientationchange", function () {
  const isLandscape = window.matchMedia("(orientation: landscape)").matches;
  if (isLandscape) {
  } else {
  }
});

window.alert = function () {};
function requestFullscreen() {
  var canvas = document.getElementById("unity-canvas"); // Replace "gameCanvas" with the ID of your Unity WebGL canvas element
  if (canvas.requestFullscreen) {
    canvas.requestFullscreen();
  } else if (canvas.mozRequestFullScreen) {
    /* Firefox */
    canvas.mozRequestFullScreen();
  } else if (canvas.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    canvas.webkitRequestFullscreen();
  } else if (canvas.msRequestFullscreen) {
    /* IE/Edge */
    canvas.msRequestFullscreen();
  }
}
//requestFullscreen();

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    event.preventDefault();
  }
});
//WebGLInput.captureAllKeyboardInput = false;
