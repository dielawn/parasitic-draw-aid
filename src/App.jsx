import { useState } from 'react'
import { BatteryTest } from './BatteryTest'
import { getDateTime } from './utils'
import { CalcCurrent } from './CalcCurrent'
import { Timer } from './Timer'
import { TestResults } from './Results'
import { DocumentCodes } from './Codes'
import Tesseract from 'tesseract.js'

import './App.css'
import ImageToTextConverter from './Tesseract'

function App() {
  const [batTestResults, setBattTestResults] = useState([])
  const [batVolts, setBattVoltage] = useState('')
  const [batAmps, setBatAmps] = useState('')

  const [drawTestResults, setDrawTestResults] = useState([])
  const [fuseVoltage, setFuseVoltage] = useState(0)
  const [resistance, setResistance] = useState(0.3)
  const [fuseLocation, setFuseLocation] = useState('')

  const [code, setCode] = useState('')
  const [codeArray, setCodeArray] = useState([])


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
    <DocumentCodes 
      code={code}
      setCode={setCode}
      setCodeArray={setCodeArray}
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
    codeArray={codeArray}
     />
    
   </form>
     
    

    </div>
  )
}

export default App
