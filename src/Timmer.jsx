import { useEffect, useState } from "react";

export const Timer = () => {
  let [time, setTime] = useState('')
  const [message, setMessage] = useState("Enter Time & Click Start Timer")

  const countDown = () => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervalId);
          setMessage("Modules are asleep")
          return 0
        } else {
            setMessage(`Time remaining: ${prevTime}`)
          return prevTime - 1
        }
      })
    }, 1000)
  }

  useEffect(() => {
    let isMounted = true

    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (isMounted) {
          if (prevTime <= 0) {
            clearInterval(intervalId);
            setMessage("Enter Time & Click Start Timer")
            return ''
          } else {
            setMessage(`Time remaining: ${prevTime}`)
            return prevTime - 1
          }
        } else {
          clearInterval(intervalId);
          return prevTime
        }
      });
    }, 1000)

    return () => {
      isMounted = false
      clearInterval(intervalId)
    }
  }, [])

  return (
    <>
      <h2>Sleep Timer</h2>
      <label htmlFor="timeInput">Time until sleep: </label>
      <input
        type="text"
        id="timeInput"
        placeholder="Time in minutes"
        value={time}
        onChange={(e) => setTime(parseInt(e.target.value) * 60)}
      />
      <button type="button" onClick={countDown}>
        Start Timer
      </button>
      <p>
        {message} 
      </p>
    </>
  );
};
