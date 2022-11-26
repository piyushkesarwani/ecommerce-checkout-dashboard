const startingMinutes = 20;

let time = startingMinutes * 60;

const countdownElement = document.getElementById("timer");

const countId = setInterval(updateTimer, 1000);

function updateTimer() {
    const minutes = Math.floor(time / 60);

    let seconds = Math.floor(time % 60);

  seconds = seconds < startingMinutes ? "0" + seconds : seconds;

  countdownElement.innerHTML = ` ${minutes} : ${seconds}`;
  time--;

  if (time < 0) {
    clearInterval(countId);
  }
}

