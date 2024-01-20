import React, { useState } from "react"
import { getDateTime } from "./utils"

export const BatteryTest = () => {
  const [results, setTestResult] = useState([])
  const [batVolts, setbatVolts] = useState('')
  const [batAmps, setBatAmps] = useState('')
  

   const handleResult = () => {
    if (batVolts !== '') {
      const timestamp = getDateTime()
      setTestResult(prevResults => [...prevResults, { volts: batVolts, amps: batAmps, timestamp }])
      setbatVolts('')
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
        onChange={(e) => setbatVolts(e.target.value)}
      />
      <label htmlFor="battAmps">CCA: </label>
      <input
        type="text"
        id="battAmps"
        placeholder="Amps"
        value={batAmps}
        onChange={(e) => { setBatAmps(e.target.value)}}>
        </input>
      <button type="button" onClick={handleResult}>Add Test Result</button>
      <ul>
        {results.map((resultObj, index) => (
          <li key={index}>{resultObj.volts} volts, {resultObj.amps} cca {resultObj.timestamp}</li>
        ))}
      </ul>
    </>
  )
}
