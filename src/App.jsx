import { useState } from 'react'
import { BatteryTest } from './BatteryTest'
import { getDateTime } from './utils'
import { CalcCurrent } from './CalcCurrent'
import { Timer } from './Timer'
import { TestResults } from './Results'
import { DocumentCodes } from './Codes'
import { MVToAmps } from './FindCurrent'
import { AmpClampTest } from './AmpClamp'
import { FollowProcedure } from './Procedure'
import { AmpTable } from './AmpTable'
import { ConversionTable } from './ConversionMAtoA'
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

  const [systemAmps, setSystemAmps] = useState('')
  const [ampsLog, setAmpsLog] = useState([])

const [currentStep, setCurrentStep] = useState(['step'])

  const followSteps = () => {
    const steps = document.querySelectorAll('.step')
    steps.className.add('hide')
 
  }
followSteps()
  return (
    <div className='flex'>
       <div className='stepsDiv'>
            <ol className="alignLeft"> 
                <div className='step'><li>Charge battery, test battery & charging system</li>
                <ul> <li>Visual inspection for lights, devices, or obvious draws </li>     </ul>
                <BatteryTest
                  batVolts={batVolts} 
                  batAmps={batAmps} 
                  setBattTestResults={setBattTestResults}
                  setBattVoltage={setBattVoltage}
                  setBatAmps={setBatAmps}
                /></div>
                <div className='step'><li>Scan & document codes</li>
                <DocumentCodes 
                  code={code}
                  setCode={setCode}
                  setCodeArray={setCodeArray}
                /></div>
                
                <div className='step'><li>Prepare vehicle for sleep</li>
                <ul>
                    <li>Pop hood for access to battery junction box, bypass/disable hood ajar switch</li>
                    <li>Open and latch doors for access to interior fuse panel</li>
                </ul></div>
               
                <div className='step'><li>Wait for modules to fall asleep, overnight is best</li>
                <Timer    
                  setTimeLog={setTimeLog}
                /></div>
               <div className='step'> <li>Test</li>
                <ul>
                    <li>Amp clamp at battery <em>LOG RESULT</em></li>
                    <AmpClampTest 
                      systemAmps={systemAmps}
                      setSystemAmps={setSystemAmps}
                      setAmpsLog={setAmpsLog}
                    />
                </ul></div>
                <div className='step'><li>Thermal camera scan fuse boxes & vehicle electronics <em>Note results</em></li></div>
                    <div className='step'><li>Measure voltage drop across fuses convert to mA and compare to amp clamp result</li>
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
                    /></div>
                    
                   <div className='step'> <li>Last pull remaining fuses 1 at a time while monitoring amperage</li></div>
                <div className='step'><li>Isolate: </li>
                <ul>
                    <li>Refrence a wiring diagram and unplug each circuit load one at a time while monitoring amperage</li>
                </ul></div>
            </ol>
           
            <ConversionTable />
        </div>

     
   <TestResults 
    batTestResults={batTestResults} 
    codeArray={codeArray}
    drawResults={drawResults}
    timeLog={timeLog}
    ampsLog={ampsLog}
     />

    </div>
  )
}

export default App
