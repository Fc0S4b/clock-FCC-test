const Display = ({ sessionTime, onBreak }) => {
  return (
    <div className="display">
      <div id="timer-label">{onBreak ? <h2>Break</h2> : <h2>Session</h2>}</div>
      <div id="time-left">{sessionTime}</div>
    </div>
  );
};
export default Display;
