var container = document.querySelector("#unity-container");
var canvas = document.querySelector("#unity-canvas");
var loadingBar = document.querySelector("#unity-loading-bar");
var progressBarFull = document.querySelector("#unity-progress-bar-full");
var fullscreenButton = document.querySelector("#unity-fullscreen-button");
var warningBanner = document.querySelector("#unity-warning");

function unityShowBanner(msg, type) {
  function updateBannerVisibility() {
    warningBanner.style.display = warningBanner.children.length
      ? "block"
      : "none";
  }
  var div = document.createElement("div");
  div.innerHTML = msg;
  warningBanner.appendChild(div);
  if (type == "error") div.style = "background: red; padding: 10px;";
  else {
    if (type == "warning") div.style = "background: yellow; padding: 10px;";
    setTimeout(function () {
      warningBanner.removeChild(div);
      updateBannerVisibility();
    }, 5000);
  }
  updateBannerVisibility();
}
function updateScreenOrientation(screenIndex) {}
let _currentMapIndex = 0;
setInterval(function () {
  updateJsSceneIndex(_currentMapIndex);
}, 1000);
function updateJsSceneIndex(currentMapIndex) {
  _currentMapIndex = currentMapIndex;
  //const nlitsolutions = document.getElementById("nlitsolutions");
  if (!canvas) return;
  const height = window.innerHeight;
  const width = window.innerWidth;
  if (currentMapIndex <= 2) {
    if (width > height) {
      canvas.style.maxWidth = `${height / 1.3}px`;
    }
  }
  else if(currentMapIndex === 5)
  {
    if(width > height)
    canvas.style.maxWidth = `${height / 1.3}px`;
    canvas.style.height = `${height}px`;

  }
  else
  {
    canvas.style.maxWidth = `${width}px`;
  }
}
var buildUrl = "Build";
var loaderUrl = buildUrl + "/Builds.loader.js";
var config = {
  dataUrl: buildUrl + "/Builds.data",
  frameworkUrl: buildUrl + "/Builds.framework.js",
  codeUrl: buildUrl + "/Builds.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "Ocaye",
  productName: "DoodleDawdle",
  productVersion: "1.0",
  showBanner: unityShowBanner,
};
if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  var meta = document.createElement("meta");
  meta.name = "viewport";
  meta.content =
    "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes";
  document.getElementsByTagName("head")[0].appendChild(meta);
  container.className = "unity-mobile";
  canvas.className = "unity-mobile";
} else {
  container.className = "unity-mobile";
  canvas.className = "unity-mobile";
}
loadingBar.style.display = "block";

var script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
  createUnityInstance(canvas, config, (progress) => {
    progressBarFull.style.width = 100 * progress + "%";
  })
    .then((unityInstance) => {
      loadingBar.style.display = "none";
      fullscreenButton.onclick = () => {
        if (unityInstance.SetFullscreen) unityInstance.SetFullscreen(1);
      };
    })
    .catch((message) => {
      console.error(message);
    });
};

document.body.appendChild(script);

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
