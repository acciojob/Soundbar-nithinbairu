    const buttons = document.querySelectorAll(".btn");
    let currentAudio = null; // store currently playing sound

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        // Stop any currently playing sound before starting a new one
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }

        // Create and play new sound
        const sound = new Audio(`./sounds/${button.id}.mp3`);
        currentAudio = sound;
        sound.play();
      });
    });

    // Stop button functionality
    const stop = document.querySelector(".stop");
    stop.addEventListener("click", () => {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // reset audio to start
      }
    });