const buttons = document.querySelectorAll(".btn");
let currentAudio = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // stop previous sound
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.remove(); // remove old <audio> from DOM
    }

    // create and append new audio element
    const sound = document.createElement("audio");
    sound.src = `./sounds/${button.id}.mp3`;
    sound.setAttribute("controls", ""); // optional (helps Cypress detect it)
    document.body.appendChild(sound);

    sound.play();
    currentAudio = sound;
  });
});

// stop button functionality
const stop = document.querySelector(".stop");
stop.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio.remove();
  }
});