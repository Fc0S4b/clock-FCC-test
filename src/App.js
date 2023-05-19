import TimerConf from './components/TimerConf';
import TimerControls from './components/TimerControls';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const [breakLength, setbreakLength] = useState(5 * 60);
  const [sessionLength, setSessionLength] = useState(25 * 60);
  const [sessionTime, setSessionTime] = useState(25 * 60);
  const [play, setPlay] = useState(true);

  const formatTime = (time) => {
    let min = Math.floor(time / 60);
    let sc = time % 60;
    return (min < 10 ? '0' + min : min) + ':' + (sc < 10 ? '0' + sc : sc);
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
          timeLength={formatTime(breakLength)}
        />
        <div className="display-wrapper">
          <div className="dot"></div>
          <svg>
            <circle cx="110" cy="110" r="110" id="circle-svg"></circle>
          </svg>
          <Display sessionTime={formatTime(sessionTime)} />
          <TimerControls play={play} />
        </div>
        <TimerConf
          id={'session-label'}
          idDecrement={'session-decrement'}
          idIncrement={'session-increment'}
          idLength={'session-length'}
          configType={'Session Length'}
          timeLength={formatTime(sessionLength)}
        />
        {/* <audio id="beep"></audio> */}
      </div>
    </div>
  );
}

export default App;
