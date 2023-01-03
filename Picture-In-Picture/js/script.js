const videoElement = document.getElementById("video");
const button = document.getElementById("button");
//Prompt to select media stream , pass to video element,then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Cath Error Here
    console.log("whoops , error here:", error);
  }
}
button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // Start Pictire in Picture
  await videoElement.requestPictureInPicture();
  // Reset Buttton
  button.disabled = false;
});

selectMediaStream();
