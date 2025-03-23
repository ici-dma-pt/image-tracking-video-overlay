window.addEventListener("arjs-nft-loaded", () => {
    document.querySelector(".arjs-loader").style.display = "none";
  });
  
  const marker = document.querySelector("a-nft");
  const video = document.querySelector("#ar-video");
  
  marker.addEventListener("markerFound", () => {
    video.play();
  });
  
  marker.addEventListener("markerLost", () => {
    video.pause();
  });
  