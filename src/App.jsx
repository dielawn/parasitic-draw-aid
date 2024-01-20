import { useState } from 'react'
import { BatteryTest } from './BatteryTest'
import { getDateTime } from './utils'
import { CalcCurrent } from './CalcCurrent'
import { Timer } from './Timer'
import { TestResults } from './Results'

import './App.css'

function App() {
  const [batTestResults, setBattTestResults] = useState([])
  const [batVolts, setBattVoltage] = useState('')
  const [batAmps, setBatAmps] = useState('')

  const [drawTestResults, setDrawTestResults] = useState([])
  const [fuseVoltage, setFuseVoltage] = useState(0)
  const [resistance, setResistance] = useState(0.3)
  const [fuseLocation, setFuseLocation] = useState('')

  return (
    <div>
   <form action="none">
   <BatteryTest 
      batVolts={batVolts} 
      batAmps={batAmps} 
      setBattTestResults={setBattTestResults}
      setBattVoltage={setBattVoltage}
      setBatAmps={setBatAmps}
    />
   <Timer />
   <CalcCurrent 
    fuseVoltage={fuseVoltage}
    resistance={resistance}
    fuseLocation={fuseLocation}
    setDrawTestResults={setDrawTestResults}
    setFuseLocation={setFuseLocation}
    setFuseVoltage={setFuseVoltage}
    setResistance={setResistance}
    />
  <TestResults 
    batTestResults={batTestResults} 
    drawTestResults={drawTestResults}
     />
   </form>
     
    

    </div>
  )
}

export default App
