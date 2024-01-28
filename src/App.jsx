import { useState } from 'react'
import { BatteryTest } from './BatteryTest'
import { TestResults } from './Results'
import { DocumentCodes } from './Codes'
import { MVToAmps } from './FindCurrent'
import { AmpClampTest } from './AmpClamp'
import { AddNote } from './AddNote'
import './App.css'
import { Links } from './Links'
import { LogSLeep } from './SleepLog'
import { GeneratePDF } from './GeneratePDF'
import {PDFDownloadLink} from '@react-pdf/renderer'
import { PlateToVinConverter } from './PlateToVinObj'
import { VinData } from './VinData'
import React from 'react'
import { CarMDRequestDecode } from './CarMD'
import { DecodeVinExtended } from './NHTSAApi'

function App() {
  const [vehicle, setVehicle] = useState(null)
  const [vehicleData, setVehicleData] = useState(null)
  const [batTestResults, setBattTestResults] = useState([])   
  const [noteObj, setNoteObj] = useState([])
  const [drawResults, setDrawResults] = useState([]) 
  const [codeArray, setCodeArray] = useState([])
  const [timeLog, setTimeLog] = useState([])
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
if (vehicle) {
  console.log(vehicle.vin.vin)
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

              <div className='step'>
                <PlateToVinConverter setVehicle={setVehicle} />
                {vehicle && (
                  <div>
                    <h2>Vehicle Data</h2>
                    <pre>{JSON.stringify(vehicle, null, 2)}</pre>
                    <VinData 
                      vehicle={vehicle}
                      setVehicleData={setVehicleData}
                    />
                     {/* <div>
                      <CarMDRequestDecode vin={vehicle.vin.vin} setVehicleData={setVehicleData}/>
                      </div> */}
                      
                      <DecodeVinExtended vin={vehicle.vin.vin} />
                  </div>
                  
                )}
            </div>

           

              <div className='step' >
                <p>1. Charge battery, test battery & charging system</p>
                <ul> 
                  <li>Visual inspection for lights, devices, or obvious draws </li>
                </ul>
                <BatteryTest setBattTestResults={setBattTestResults} />
              </div>
              <div className='step'><p>2. Scan & document codes</p>
                <DocumentCodes setCodeArray={setCodeArray} />
              </div>                
              <div className='step'>
                <p>3. Prepare vehicle for sleep</p>
                <ul>
                    <li>Pop hood for access to battery junction box, bypass/disable hood ajar switch</li>
                    <li>Open and latch doors for access to interior fuse panel</li>
                </ul>
                <AddNote setNoteObj={setNoteObj}/>
              </div>               
              <div className='step'>
                <p>4. Wait for modules to fall asleep, overnight is best</p>
                <LogSLeep setTimeLog={setTimeLog} />
              </div>
              <div className='step'> 
                <p>5. Test</p>
                <ul>
                    <li>Amp clamp at battery <em>Log result</em></li>
                </ul>
                  <AmpClampTest setAmpsLog={setAmpsLog} />
              </div>
              <div className='step'>
                <p>6. Thermal camera scan fuse boxes & vehicle electronics <em>Note results</em></p>
                <AddNote setNoteObj={setNoteObj} />
              </div>
              <div className='step'>
                <p>7. Measure voltage drop across fuses convert to mA and compare to amp clamp result</p>
                  <MVToAmps setDrawResults={setDrawResults} />
              </div>
              <div className='step'> 
                <p>8. Last pull remaining fuses 1 at a time while monitoring amperage</p>
                <AddNote setNoteObj={setNoteObj} />
              </div>
              <div className='step'>
                <p>9. Isolate: </p>
                <ul>
                    <li>Refrence a wiring diagram and unplug each circuit load one at a time while monitoring amperage</li>
                </ul>
                <AddNote setNoteObj={setNoteObj}/>
              </div>
            </div>
            
            {/* <Links /> */}
        </div>
   
     
   <div>
    
   <TestResults 
    batTestResults={batTestResults} 
    codeArray={codeArray}
    drawResults={drawResults}
    timeLog={timeLog}
    ampsLog={ampsLog}
    noteObj={noteObj}
    vehicle={vehicle}
     />
   <div>
    <PDFDownloadLink className='pdfLink' document={
      <GeneratePDF 
        batTestResults={batTestResults} 
        codeArray={codeArray}
        drawResults={drawResults}
        timeLog={timeLog}
        ampsLog={ampsLog}
        noteObj={noteObj}
        vehicle={vehicle}
      />} fileName="draw-report.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'

        }
      </PDFDownloadLink>
    {/* <button onClick={handleGeneratePDF}>Generate PDF</button>
    {showPDF && 
      <GeneratePDF 
        batTestResults={batTestResults} 
        codeArray={codeArray}
        drawResults={drawResults}
        timeLog={timeLog}
        ampsLog={ampsLog}
        noteObj={noteObj}
      />} */}
   </div>

   </div>

    </div>
  )
}

export default App
