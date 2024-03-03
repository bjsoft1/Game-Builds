window.addEventListener("orientationchange", function () {
  if (window?.orientation === 90 || window?.orientation === -90) {
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
requestFullscreen();

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && document.fullscreenElement) {
    event.preventDefault();
  }
});
WebGLInput.captureAllKeyboardInput = false;
