import { useEffect, useState, useRef } from "react";
import { getDateTime } from "./utils"

export const Timer = ({setTimeLog}) => {
  const [time, setTime] = useState('')
  const [message, setMessage] = useState("Enter Time & Click Start Timer")
  const isMounted = useRef(true)
  
  

  const handleTimeLog = (txt) => {
    const timestamp = getDateTime()
    const duration = time
    setTimeout(() => {
      setTimeLog(prevResults => [...prevResults, {duration: duration, txt: txt, timestamp: timestamp}])
    }, 1000)
  }

  const countDown = () => {
    handleTimeLog('Sleep Countdown Started ')
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervalId);
          setMessage("Modules are asleep")
          handleTimeLog('Sleep Countdown Complete ')
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
      })
    }, 1000)

    return () => {
      isMounted = false
      clearInterval(intervalId)
    }
  }, [setTimeLog])

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
      /><br></br>
      <button type="button" onClick={countDown}>Start Timer</button>
      <p>
        {message} 
      </p>
    </>
  )
}
