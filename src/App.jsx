import { useState } from 'react'
import { BatteryTest } from './BatteryTest'
import { Timer } from './Timer'
import { TestResults } from './Results'
import { DocumentCodes } from './Codes'
import { MVToAmps } from './FindCurrent'
import { AmpClampTest } from './AmpClamp'
import { AddNote } from './AddNote'
import './App.css'
import { Links } from './Links'


function App() {
  const [batTestResults, setBattTestResults] = useState([])
  const [batVolts, setBattVoltage] = useState('')
  const [batAmps, setBatAmps] = useState('')

  const [note, setNote] = useState('')
  const [noteObj, setNoteObj] = useState([])

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

  const [currentStep, setCurrentStep] = useState(0)

  const followSteps = () => {
    const steps = document.querySelectorAll('.step')
    for(let i = 0; i < steps.length; i++) {
      steps[i].classList.add('hide')
      if(currentStep == i) {
        steps[i].classList.toggle('hide')
      }
    }
 
  }
  const handleStepChange = (index) => {
    setCurrentStep(index)
    if (index >= 8) {
      setCurrentStep(0)
    } else if (index <= 0) {
      setCurrentStep(8)
    }
    followSteps()
  }

followSteps()
  return (
    <div className='flex'>
      <div className='buttonDiv flex'>
        <button type='button' onClick={ () => handleStepChange(currentStep - 1)}>Back</button> 
        <button type='button' onClick={ () => handleStepChange(currentStep + 1)}>Next</button>
      </div>
       <div className='stepsDiv'>
            <div className="alignLeft"> 
              <div className='step' >
                <p>1. Charge battery, test battery & charging system</p>
                <ul> 
                  <li>Visual inspection for lights, devices, or obvious draws </li>
                </ul>
                <BatteryTest
                  batVolts={batVolts} 
                  batAmps={batAmps} 
                  setBattTestResults={setBattTestResults}
                  setBattVoltage={setBattVoltage}
                  setBatAmps={setBatAmps}
                />
              </div>
              <div className='step'><p>2. Scan & document codes</p>
                <DocumentCodes 
                  code={code}
                  setCode={setCode}
                  setCodeArray={setCodeArray}
                />
              </div>                
              <div className='step'>
                <p>3. Prepare vehicle for sleep</p>
                <ul>
                    <li>Pop hood for access to battery junction box, bypass/disable hood ajar switch</li>
                    <li>Open and latch doors for access to interior fuse panel</li>
                </ul>
                <AddNote 
                  note={note}
                  setNote={setNote}
                  setNoteObj={setNoteObj}/>
              </div>               
              <div className='step'>
                <p>4. Wait for modules to fall asleep, overnight is best</p>
                <Timer    
                  setTimeLog={setTimeLog}
                />
              </div>
              <div className='step'> 
                <p>5. Test</p>
                <ul>
                    <li>Amp clamp at battery <em>Log result</em></li>
                </ul>
                  <AmpClampTest 
                      systemAmps={systemAmps}
                      setSystemAmps={setSystemAmps}
                      setAmpsLog={setAmpsLog}
                  />
              </div>
              <div className='step'>
                <p>6. Thermal camera scan fuse boxes & vehicle electronics <em>Note results</em></p>
                <AddNote 
                  note={note}
                  setNote={setNote}
                  setNoteObj={setNoteObj}
                />
              </div>
              <div className='step'>
                <p>7. Measure voltage drop across fuses convert to mA and compare to amp clamp result</p>
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
              </div>
              <div className='step'> 
                <p>8. Last pull remaining fuses 1 at a time while monitoring amperage</p>
                <AddNote 
                  note={note}
                  setNote={setNote}
                  setNoteObj={setNoteObj}
                />
              </div>
              <div className='step'>
                <p>9. Isolate: </p>
                <ul>
                    <li>Refrence a wiring diagram and unplug each circuit load one at a time while monitoring amperage</li>
                </ul>
                <AddNote 
                  note={note}
                  setNote={setNote}
                  setNoteObj={setNoteObj}/>
              </div>
            </div>
           
            {/* <Links /> */}
        </div>

     
   <TestResults 
    batTestResults={batTestResults} 
    codeArray={codeArray}
    drawResults={drawResults}
    timeLog={timeLog}
    ampsLog={ampsLog}
    noteObj={noteObj}
     />

    </div>
  )
}

export default App
