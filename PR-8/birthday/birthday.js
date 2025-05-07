const endDate = new Date("2025-09-17T00:00:00").getTime();


function getTimeRemaining(endTime) {
  const now = new Date().getTime();
  const total = endTime - now;

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function updateClockDisplay() {
  const t = getTimeRemaining(endDate);

  if (t.total <= 0) {
    clearInterval(timerInterval);
    document.getElementById("countdown").textContent = "Time's up!";
    return;
  }

  document.getElementById("days").textContent = t.days;
  document.getElementById("hours").textContent = t.hours;
  document.getElementById("minutes").textContent = t.minutes;
  document.getElementById("seconds").textContent = t.seconds;
}


const timerInterval = setInterval(updateClockDisplay, 1000);
updateClockDisplay();