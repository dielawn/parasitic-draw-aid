import { useEffect, useState } from "react";
import { getDateTime } from "./utils"

export const CountdownTimer = ({setTimeLog}) => {
  const [countdownTime, setCoutdownTime] = useState('')
  const [message, setMessage] = useState("Enter Time & Click Start Timer")

  const timer = () => {
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
        setMessage('Timer complete! Modules asleep.')
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
}
