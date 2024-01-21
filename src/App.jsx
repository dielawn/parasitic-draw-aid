import { useState } from 'react'
import { BatteryTest } from './BatteryTest'
import { getDateTime } from './utils'
import { CalcCurrent } from './CalcCurrent'
import { Timer } from './Timer'
import { TestResults } from './Results'
import { DocumentCodes } from './Codes'
import { MVToAmps } from './FindCurrent'

import './App.css'


function App() {
  const [batTestResults, setBattTestResults] = useState([])
  const [batVolts, setBattVoltage] = useState('')
  const [batAmps, setBatAmps] = useState('')


  const [fuseLocation, setFuseLocation] = useState('')
  const [fuseType, setFuseType] = useState('mini5')
  const [mV, setMV] = useState(0.1) 
  const [mADraw, setMADraw] = useState('')
  const [drawResults, setDrawResults] = useState([])

  const [code, setCode] = useState('')
  const [codeArray, setCodeArray] = useState([])

  const [timeLog, setTimeLog] = useState([])

  return (
    <div className='flex'>
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
   <Timer
    
    setTimeLog={setTimeLog}
  />
   <MVToAmps 
      mV={mV}
      fuseType={fuseType}
      mADraw={mADraw}  
      setMV={setMV}
      setFuseType={setFuseType}
      setMADraw={setMADraw}
      fuseLocation={fuseLocation}
      setFuseLocation={setFuseLocation}
      setDrawResults={setDrawResults}
    />

  
    
   </form>
     
   <TestResults 
    batTestResults={batTestResults} 
    codeArray={codeArray}
    drawResults={drawResults}
    timeLog={timeLog}
     />

    </div>
  )
}

export default App
