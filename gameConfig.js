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
      onFullScreenButtonClick(unityInstance);
      };
    })
    .catch((message) => {
      console.error(message);
    });
};

document.body.appendChild(script);
