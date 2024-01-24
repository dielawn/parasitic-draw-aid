import { useEffect, useState } from "react";
import { getDateTime } from "./utils"

export const Timer = ({setTimeLog}) => {
  const [time, setTime] = useState('')
  const [message, setMessage] = useState("Enter Time & Click Start Timer")


  const countDownTimer = (txt, countdownTime) => {
    const countdownDate = new Date(countdownTime).getTime()
    const coundownInteral = setInterval(updateCountdown, 1000)

    const updateCountdown = () => {
      const currentDate = new Date().getTime()
      const distance = countdownDate - currentDate

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(coundownInteral)

      }
    }

    return (
      <div  className='alignRight'>
        <h2>Sleep Timer</h2>
        <label htmlFor="timeInput">Time until sleep: </label>
        <input
          type="text"
          id="timeInput"
          placeholder="Time in Minutes"
          value={handleTime(time)}
          onChange={(e) => setTime(parseInt(e.target.value))}
          onBlur={(e) => setTime(minutesToSeconds(e.target.value))}
        /><br></br>
        <button type="button" onClick={countDown}>Start Timer</button>
        <p>{message}</p>
      </div>
    )
  }

  const handleTimeLog = (txt) => {    
    setTimeout(() => {
      const timestamp = getDateTime()
      setTimeLog(prevResults => [...prevResults, {duration: time, txt: txt, timestamp: timestamp}])
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

  const minutesToSeconds = (minutes) => {
    return Number(minutes * 60)
  }

  const handleTime = (minutes) => {
    if(minutes <= 1) {
      return Number(minutes * 60)
    }
    return Number(minutes / 60)
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
    <div  className='alignRight'>
      <h2>Sleep Timer</h2>
      <label htmlFor="timeInput">Time until sleep: </label>
      <input
        type="text"
        id="timeInput"
        placeholder="Time in Minutes"
        value={handleTime(time)}
        onChange={(e) => setTime(parseInt(e.target.value))}
        onBlur={(e) => setTime(minutesToSeconds(e.target.value))}
      /><br></br>
      <button type="button" onClick={countDown}>Start Timer</button>
      <p>
        {message} 
      </p>
    </div>
  )
}
