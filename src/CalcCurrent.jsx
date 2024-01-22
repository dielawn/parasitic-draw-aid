import { getDateTime } from './utils'
import './App.css'

export const CalcCurrent = ({fuseVoltage, resistance, fuseLocation, setFuseVoltage, setFuseLocation, setResistance, setDrawTestResults}) => {

  const calcAmps = () => {
    return fuseVoltage / resistance
  }
  const uneditedAmps = calcAmps()
  const amps = uneditedAmps.toFixed(3)
 
  const handleResult = () => {
    if (calcAmps() > 0) {
        const timestamp = getDateTime()
        setDrawTestResults(prevResults => [...prevResults, {fuseLocation: fuseLocation, amps: amps, fuseVoltage: fuseVoltage, timestamp }])
    }
  }
  
  let textColor = 'white'

  if (calcAmps() >= .05) {
    textColor = 'red'
  }

  return (
    <div  className='alignRight'>
        <h2>Current from Voltage</h2>
        <label htmlFor='fuseInput'>Fuse number</label>
        <input 
            id='fuseInput'
            placeholder='Fuse'
            value={fuseLocation}
            onChange={(e) => setFuseLocation(e.target.value)}
            type="text">
        </input><br></br>
        <label htmlFor='voltageInput'>Voltage across fuse: </label>
        <input 
            id='voltageInput'
            placeholder="Volts"
            value={fuseVoltage}
            onChange={(e) => setFuseVoltage(e.target.value)}>
        </input><br></br>
        <label htmlFor="resistanceInput">Resistance of circuit: </label>
        <input 
            id='resistanceInput'
            placeholder="Resistance"
            value={resistance}
            onChange={(e) => setResistance(e.target.value)}>
        </input>    
        <p className={textColor}>{calcAmps()} Amp draw</p>
        <button type="button" onClick={handleResult}>Add Test Result</button>
    </div>
  )
}

