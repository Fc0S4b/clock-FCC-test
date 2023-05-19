import fillTimer from '../utils/animatedBar';

const TimerControls = ({ countDown, play, reset }) => {
  return (
    <div className="timer-ctrl">
      <span className="title-ctrl">Controls</span>
      <div className="btn-container">
        <button
          id="start_stop"
          onClick={() => countDown()}
          className="timer-ctrl-btn play"
        >
          {!play ? (
            <i className="material-icons">play_arrow</i>
          ) : (
            <i className="material-icons">pause</i>
          )}
        </button>
        <button
          id="reset"
          className="timer-ctrl-btn reset"
          onClick={() => reset()}
        >
          <i className="material-icons">loop</i>
        </button>
      </div>
    </div>
  );
};
export default TimerControls;
