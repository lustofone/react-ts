import { useState, useEffect, useRef } from 'react';

function Timer() {
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [formattedTime, setFormattedTime] = useState(formatTime(timerSeconds));
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setFormattedTime(formatTime(timerSeconds));
  }, [timerSeconds]);

  useEffect(() => {
    if (isTimerRunning && timerSeconds > 0) {
      timerRef.current = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isTimerRunning, timerSeconds]);

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  function handleStartTimerClick() {
    if (inputSeconds === timerSeconds || timerSeconds === 0) {
      setTimerSeconds(inputSeconds);
    }
    setIsTimerRunning(true);
  }

  function handleStopTimerClick() {
    setIsTimerRunning(false);
  }

  function handleResetClick() {
    setIsTimerRunning(false);
    setTimerSeconds(0);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setInputSeconds(value);
    }
  }

  return (
    <>
      <div style={{ color: 'black', marginTop: '20px' }}>
        <label htmlFor="secondsInput">Seconds:</label>
        <input
          type="number"
          id="secondsInput"
          value={inputSeconds}
          onChange={handleInputChange}
          disabled={isTimerRunning}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
      </div>
      <div style={{ color: 'black', marginBottom: '20px' }}>
        Timer: {formattedTime}
      </div>
      <div>
        <button onClick={handleStartTimerClick}>Start Timer</button>
        <button onClick={handleStopTimerClick}>Stop Timer</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </>
  );
}

export default Timer;
