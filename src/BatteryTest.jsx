import React, { useState } from "react"
import { getDateTime } from "./utils"

export const BatteryTest = ({batVolts, batAmps, setBatAmps, setBattVoltage, setBattTestResults}) => {

   const handleResult = () => {
    if (batVolts !== '') {
      const timestamp = getDateTime()
      setBattTestResults(prevResults => [...prevResults, { volts: batVolts, amps: batAmps, timestamp }])
      setBattVoltage('')
      setBatAmps('')
    }
  }
  

  return (
    <>
      <h2>Battery Test Results</h2>
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
        onChange={(e) => { setBatAmps(e.target.value)}}>
        </input><br></br>
      <button type="button" onClick={handleResult}>Add Test Result</button>

    </>
  )
}
