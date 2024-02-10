import { getDateTime } from "./utils"
import { useState } from 'react'
import React from "react"
import { AddNote } from "./AddNote"

export const BatteryTest = ({setBatteryTest}) => {
  const [batVolts, setBattVoltage] = useState('')
  const [batAmps, setBatAmps] = useState('')
  const [isPass, setIsPass] = useState(false)

   const handleResult = (event) => {
    event.preventDefault()
    if (batVolts !== '') {
      const timestamp = getDateTime()
      setBatteryTest((prevState) => ({
        notes: [
          ...prevState.notes,
          {note:`${ batVolts} V ${batAmps} CCA Test: ${isPass ? 'Pass' : 'Fail'}`, timestamp: timestamp},
        ],
      }))
      //clear inputs
      // setBattVoltage('')
      // setBatAmps('')
    }
  }

  return (
    <div className='alignRight'>
      <h2>Battery Test</h2>
      <AddNote setNoteObj={setBatteryTest} />
      <label htmlFor="battVolts">Voltage: </label>
      <input
        type="text"
        id="battVolts"
        placeholder="Voltage"
        value={batVolts}
        onChange={(e) => setBattVoltage(e.target.value)}
      /><br></br>
      <label htmlFor="battAmps">CCA: </label>
      <input
        type="text"
        id="battAmps"
        placeholder="Amps"
        value={batAmps}
        onChange={(e) =>  setBatAmps(e.target.value)}>
        </input><br></br>
        <label htmlFor="passRadio">Pass</label>
        <input 
          type="radio"
          id="passRadio"
          checked={isPass}
          onChange={() => setIsPass(true)}
        />
         <label htmlFor="failRadio">Fail</label>
        <input 
          type="radio"
          id="failRadio"
          checked={!isPass}
          onChange={() => setIsPass(false)}
        /><br></br>
        <button type="submit" onClick={(event) =>handleResult(event)}>Add Test Result</button>
      
        
      
       
      
    </div>
  )
}
