import TimerConf from './components/TimerConf';
import TimerControls from './components/TimerControls';
import Display from './components/Display';
import formatTime from './utils/formatTime';
import fillTimer from './utils/animatedBar';
import beepSound from './assets/beep.mp3';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [sessionTime, setSessionTime] = useState(25 * 60);
  const [timeOn, setTimeOn] = useState(false);
  const [play, setPlay] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [audioOn, setAudioOn] = useState(false);
  const audioRef = useRef(null);

  const confBtn = (seconds, type) => {
    if (timeOn) {
      return;
    }
    {
      if (type === 'break') {
        if (
          (breakLength <= 1 && seconds < 0) ||
          (breakLength >= 60 && seconds > 0)
        ) {
          return;
        }
        setBreakLength((prevBreak) => prevBreak + seconds);
      } else if (type === 'session') {
        if (
          (sessionLength <= 1 && seconds < 0) ||
          (sessionLength >= 60 && seconds > 0)
        ) {
          return;
        }
        setSessionLength((prevSession) => prevSession + seconds);
        if (!timeOn) {
          setSessionTime((sessionLength + seconds) * 60);
        }
      }
    }
  };

  const reset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setSessionTime(25 * 60);
    setTimeOn(false);
    setPlay(false);
    setOnBreak(false);
    setAudioOn(false);
    audioRef.current.currentTime = 0;
    audioRef.current.pause();
  };

  const countDown = () => {
    setTimeOn(!timeOn);
    setPlay(!play);
  };

  useEffect(() => {
    let timeoutId;

    if (timeOn && sessionTime >= 0) {
      timeoutId = setTimeout(() => {
        setSessionTime((prevTime) => {
          if (prevTime <= 0 && !onBreak) {
            setOnBreak(true);
            return breakLength * 60;
          } else if (prevTime <= 0 && onBreak) {
            setOnBreak(false);
            return sessionLength * 60;
          }
          setAudioOn(false);
          return prevTime - 1;
        });
        if (sessionTime === 0) {
          setAudioOn(true);
        }
        fillTimer(sessionLength, sessionTime);
      }, 1000);
      if (sessionTime === 0) {
        setAudioOn(true);
      }
    }
    return () => {
      clearInterval(timeoutId);
    };
  }, [timeOn, sessionTime]);

  useEffect(() => {
    if (audioOn) {
      audioRef.current.play();
    }
  }, [audioOn]);

  const circleStrokeSession =
    sessionTime <= 10 && sessionTime % 2 === 0 ? '#F40000' : '#96d9ff';

  const circleStrokeBreak =
    sessionTime <= 10 && sessionTime % 2 === 0 ? '#F40000' : '#D6D84F';

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
            <circle
              cx="110"
              cy="110"
              r="110"
              id="circle-svg"
              stroke={!onBreak ? circleStrokeSession : circleStrokeBreak}
              fill="transparent"
            ></circle>
          </svg>
          <Display onBreak={onBreak} sessionTime={formatTime(sessionTime)} />
          <TimerControls countDown={countDown} play={play} reset={reset} />
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
      </div>
      <audio id="beep" preload="auto" ref={audioRef} src={beepSound} />
    </div>
  );
}

export default App;
