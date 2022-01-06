const videoElment = document.getElementById("video");
const videoButton = document.getElementById("videoButton");

// get media stream to pass the video to video element

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElment.srcObject = mediaStream;
    videoElment.onloadedmetadata = () => {
      videoElment.play();
    };
  } catch (erro) {
    console.log("opps erro has occured....");
  }
}

videoButton.addEventListener("click", async () => {
  // disabled the button
  videoButton.disabled = true;
  // start picture in picture
  await videoElment.requestPictureInPicture();
  // rest the button
  videoButton.disabled = false;
});
// on load
selectMediaStream();
