import { useState } from "react"
export const CountdownTimer = ({setTimeLog}) => {
  const [countdownTime, setCoutdownTime] = useState('')
  const [message, setMessage] = useState("Enter Time & Click Start Timer")

  const countdownDate = new Date(countdownTime).getTime()
  const currentDate = new Date().getTime()
  const distance = countdownDate - currentDate

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  const updateCountdown = () => {
    
    const coundownInteral = setInterval(() => {
        if (distance < 0) {
            clearInterval(coundownInteral)
            setMessage('Timer complete! Modules asleep.')
            setTimeLog(prevResults => [...prevResults, {days: days, hours: hours, minutes: minutes, seconds: seconds}])
        } else {
            setMessage('Timer in progress...')
        }
    }, 1000) 
  }

  const startTimer = () => {
    if (isNaN(new Date(countdownTime).getTime())) {
        setMessage('Invalid date format')
        setTimeLog(prevResults => [...prevResults, {days: days, hours: hours, minutes: minutes, seconds: seconds}])
        return
    }
    setMessage('Timer in progress...')
    updateCountdown()
    }

    return (
      <div  className='alignRight'>
        <h2>Sleep Timer</h2>
        <label htmlFor="timeInput">Time until sleep: </label>
        <input
          type="text"
          id="timeInput"
          placeholder="YYYY-MM-DDTHH:mm:ss"
          value={countdownTime}
          onChange={(e) => setCoutdownTime(e.target.value)}
        /><br></br>
        <button type="button" onClick={startTimer}>Start Timer</button>
        <p>{message}</p>
      </div>
    )
}

// 2024-01-25T05:12:00
