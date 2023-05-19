import TimerConf from './components/TimerConf';
import TimerControls from './components/TimerControls';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const [breakLength, setbreakLength] = useState('5:00');
  const [sessionLength, setSessionLength] = useState('25:00');
  const [sessionTime, setSessionTime] = useState('25:00');
  const [play, setPlay] = useState(true);

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
        />
        <div className="display-wrapper">
          <div className="dot"></div>
          <svg>
            <circle cx="110" cy="110" r="110" id="circle-svg"></circle>
          </svg>
          <Display sessionTime={sessionTime} />
          <TimerControls play={play} />
        </div>
        <TimerConf
          id={'session-label'}
          idDecrement={'session-decrement'}
          idIncrement={'session-increment'}
          idLength={'session-length'}
          configType={'Session Length'}
          timeLength={sessionLength}
        />
        {/* <audio id="beep"></audio> */}
      </div>
    </div>
  );
}

export default App;
