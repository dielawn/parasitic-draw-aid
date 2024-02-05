import { getDateTime } from "./utils";
import { useState } from "react";
import React from 'react'

export const AmpClampTest = ({setAmpsLog}) => {
    const [systemAmps, setSystemAmps] = useState('420')
    const handleResult = () => {
        const timestamp = getDateTime()
        setAmpsLog(prevResults => [...prevResults, {systemAmps: systemAmps, timestamp: timestamp}])
        setSystemAmps('')
    }
    return (
        <div  className='alignRight'>
        <h2>Amp reading</h2>
        <label htmlFor="ampClampInput">System: </label>
        <input 
            type="text"
            id="ampClampInput"
            placeholder="mA"
            value={systemAmps}
            onChange={(e) => setSystemAmps(e.target.value)}   
        ></input><br></br>
        <button type="button" onClick={handleResult}>Log amp reading</button>
        </div>
    )
}