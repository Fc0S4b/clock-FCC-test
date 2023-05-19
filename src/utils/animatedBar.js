export default function fillTimer(time, newTime) {
  let circleBar = document.getElementById('circle-svg');
  let dot = document.querySelector('.dot');
  let degStep = 360 / time;

  circleBar.style.strokeDashoffset = -692 + (692 * newTime) / time;
  dot.style.transform = `rotateZ(-${newTime * degStep}deg)`;
}
