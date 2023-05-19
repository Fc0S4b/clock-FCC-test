export default function fillTimer(time, newTime) {
  let circleBar = document.getElementById('circle-svg');
  let dot = document.querySelector('.dot');
  let degStep = 360 / (time * 60);

  circleBar.style.strokeDashoffset = -692 + (692 * (newTime - 1)) / (time * 60);
  dot.style.transform = `rotateZ(-${degStep * (newTime - 1)}deg)`;
  console.log(dot.style.transform, newTime);
}
