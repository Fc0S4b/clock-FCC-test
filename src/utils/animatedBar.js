export default function fillTimer() {
  return setInterval(() => {
    let circleBar = document.getElementById('circle-svg');
    let dot = document.querySelector('.dot');

    let time = new Date().getSeconds();

    circleBar.style.strokeDashoffset = 692 - (692 * time) / 60;

    // 360/60 = 6
    dot.style.transform = `rotateZ(${time * 6}deg)`;
    console.log(time);
  }, 1000);
}
