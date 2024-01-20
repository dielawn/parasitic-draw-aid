import { useState } from 'react'

import { getDateTime } from './utils'

import './App.css'

export const CalcCurrent = () => {
  const [voltage, setVoltage] = useState(0)
  const [resistance, setResistance] = useState(0.3)

  const [fuse, setFuse] = useState('')
  const [results, setTestResult] = useState([])
  const calcAmps = () => {
    return voltage / resistance
  }
  const uneditedAmps = calcAmps()
  const amps = uneditedAmps.toFixed(3)
 
  const handleResult = () => {
  if (calcAmps() > 0) {
    const timestamp = getDateTime()
    setTestResult(prevResults => [...prevResults, {fuse: fuse, amps: amps, volts: voltage, timestamp }])
  }

  }
  
  let textColor = 'white'


  if (calcAmps() >= .05) {
    textColor = 'red'
  }


  return (
    <div>
   
 
    <h2>Current from Voltage</h2>
    <label htmlFor='fuseInput'>Fuse number</label>
    <input 
      id='fuseInput'
      placeholder='Fuse'
      value={fuse}
      onChange={(e) => setFuse(e.target.value)}
      type="text">
    </input><br></br>
   <label htmlFor='voltageInput'>Voltage across fuse: </label>
      <input 
        id='voltageInput'
        placeholder="Volts"
        value={voltage}
        onChange={(e) => setVoltage(e.target.value)}
      ></input><br></br>
      <label htmlFor="resistanceInput">Resistance of circuit: </label>
       <input 
        id='resistanceInput'
        placeholder="Resistance"
        value={resistance}
        onChange={(e) => setResistance(e.target.value)}
      ></input>
  
      <p className={textColor}>{calcAmps()} Amp draw</p>
      <button type="button" onClick={handleResult}>Add Test Result</button>
      <ul>
        {results.map((resultObj, index) => (
          <li key={index}> Fuse: {resultObj.fuse}<br></br>{resultObj.amps} Amp draw<br></br> {resultObj.volts} volts, <br></br> {resultObj.timestamp}</li>
        ))}
      </ul>
    

    </div>
  )
}

