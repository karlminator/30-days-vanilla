const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
  const now = new Date();

  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  const secDeg = (sec / 60) * 360 + 90;
  const minDeg = (min / 60) * 360 + 90;
  const hourDeg = (hour / 12) * 360 + 90;
  styleRotation(secHand, secDeg);
  styleRotation(minHand, minDeg);
  styleRotation(hourHand, hourDeg);
};

const styleRotation = (hand, degrees) => {
  hand.style.transform = `rotate(${degrees}deg)`;

  // Remove transition at 0 seconds to prevent backward spin
  if (degrees === 90) {
    hand.style.transition = 'none';
  } else {
    hand.style.transition = '';
  }
};

setInterval(setDate, 1000);
