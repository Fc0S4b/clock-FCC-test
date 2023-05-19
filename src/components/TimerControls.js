import fillTimer from '../utils/animatedBar';

const TimerControls = ({ play, reset }) => {
  const controlTime = () => {
    fillTimer(60, 50);
  };

  return (
    <div className="timer-ctrl">
      <span className="title-ctrl">Controls</span>
      <div className="btn-container">
        <button
          id="start_stop"
          onClick={() => controlTime()}
          className="timer-ctrl-btn play"
        >
          {play ? (
            <i className="material-icons">play_arrow</i>
          ) : (
            <i className="material-icons">pause</i>
          )}
        </button>
        <button id="reset" className="timer-ctrl-btn reset">
          <i className="material-icons">loop</i>
        </button>
      </div>
    </div>
  );
};
export default TimerControls;
