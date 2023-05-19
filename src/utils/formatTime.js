const formatTime = (time) => {
  let min = Math.floor(time / 60);
  let sc = time % 60;
  return (min < 10 ? '0' + min : min) + ':' + (sc < 10 ? '0' + sc : sc);
};

export default formatTime;
