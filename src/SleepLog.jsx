import { useState } from "react"
import { getDateTime } from "./utils"
import React from 'react'
export const LogSLeep = ({setTimeLog}) => {
    const [sleepTime, setSleepTime] = useState('')

    const handleSleepLog = () => {
        const timestamp = getDateTime()
        console.log(timestamp)
        setTimeLog(prevResult => [...prevResult, {sleepTime: sleepTime, timestamp: timestamp}])
    }

    return (
       <div>
      
        <label htmlFor="endInput">Modules to sleep time: </label><br></br>
        <input 
            type="text"
            id="endInput"
            placeholder="hours until sleep"
            value={sleepTime}
            onChange={(e) => setSleepTime(e.target.value)}
        /><br></br>
        <button type="button" onClick={handleSleepLog}>Log sleep time</button>
       </div>
    )
}