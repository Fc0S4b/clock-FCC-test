const TimerConf = ({
  id,
  idDecrement,
  idIncrement,
  idLength,
  configType,
  timeLength,
}) => {
  return (
    <div id={id} className="timer-conf">
      <div className=" inner">
        <span id={idLength} className="timer-conf-value">
          {timeLength}
        </span>
        <div className="btn-container">
          <button id={idIncrement} className="timer-conf-btn inc">
            +
          </button>
          <button id={idDecrement} className="timer-conf-btn dec">
            -
          </button>
        </div>
        <span className="timer-conf-title">{configType}</span>
      </div>
    </div>
  );
};
export default TimerConf;
