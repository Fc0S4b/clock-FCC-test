export default function fillTimer(time, newTime) {
  let nextTime = newTime - 1;
  let circleBar = document.getElementById('circle-svg');
  let dot = document.querySelector('.dot');
  let degStep = 360 / (time * 60);

  circleBar.style.strokeDashoffset = -692 + (692 * nextTime) / (time * 60);
  dot.style.transform = `rotateZ(-${degStep * nextTime}deg)`;
}
