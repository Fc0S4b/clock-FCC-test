const Display = ({ sessionTime }) => {
  return (
    <div className="display">
      <div id="timer-label">
        <h2>Session</h2>
      </div>
      <div id="time-left">{sessionTime}</div>
    </div>
  );
};
export default Display;
