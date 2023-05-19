import TimerConf from './components/TimerConf';
import TimerControls from './components/TimerControls';
import Display from './components/Display';
import formatTime from './utils/formatTime';
import { useState } from 'react';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [sessionTime, setSessionTime] = useState(25 * 60);
  const [timeOn, setTimeOn] = useState(false);
  const [play, setPlay] = useState(true);

  const confBtn = (seconds, type) => {
    if (type === 'break') {
      if (
        (breakLength < 1 && seconds < 0) ||
        (breakLength >= 60 && seconds > 0)
      ) {
        return;
      }
      setBreakLength((prevBreak) => prevBreak + seconds);
    } else if (type === 'session') {
      if (
        (sessionLength < 1 && seconds < 0) ||
        (sessionLength >= 60 && seconds > 0)
      ) {
        return;
      }
      setSessionLength((prevSession) => prevSession + seconds);
      if (!timeOn) {
        setSessionTime((sessionLength + seconds) * 60);
      }
    }
  };

  const reset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setSessionTime(25 * 60);
    setTimeOn(false);
    // setPlay
  };

  return (
    <div className="container">
      <div className="clock-wrapper">
        <TimerConf
          id={'break-label'}
          idDecrement={'break-decrement'}
          idIncrement={'break-increment'}
          idLength={'break-length'}
          configType={'Break Length'}
          timeLength={breakLength}
          type={'break'}
          confBtn={confBtn}
        />
        <div className="display-wrapper">
          <div className="dot"></div>
          <svg>
            <circle cx="110" cy="110" r="110" id="circle-svg"></circle>
          </svg>
          <Display sessionTime={formatTime(sessionTime)} />
          <TimerControls play={play} reset={reset} />
        </div>
        <TimerConf
          id={'session-label'}
          idDecrement={'session-decrement'}
          idIncrement={'session-increment'}
          idLength={'session-length'}
          configType={'Session Length'}
          timeLength={sessionLength}
          type={'session'}
          confBtn={confBtn}
        />
        {/* <audio id="beep"></audio> */}
      </div>
    </div>
  );
}

export default App;
