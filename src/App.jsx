import React, { useState } from 'react'
import './App.css'
import { PlateToVinConverter } from './PlateToVinObj'
import { CustomerInfo } from './CustomerInfo'
import { VehicleConcern } from './CCC'
import { DrawTestApp } from './DrawApp'
import { DocumentCodes } from './Codes'
import { DVI } from './Dvi'
 
function App() {
  const [customer, setCustomer] = useState('')
  const [vehicle, setVehicle] = useState(null)
  const [vehicleData, setVehicleData] = useState([])
  const [isConcern, setIsConcern] = useState(false)
  const [isInspection, setIsInspection] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const [isCode, setIsCode] = useState(false)
  const [codeArray, setCodeArray] = useState([])
  const [isTask, setIsTask] = useState(false)
  const [checklist, setChecklist] = useState([])
  const [ccc, setCCC] = useState([],)
  const [isEdit, setIsEdit] = useState(true)
  const [battTestResults, setBattTestResults] = useState([])  

  const [warningData, setWarningData] = useState([])
  const [batteryData, setBatteryData] = useState([])
  const [extLightData, setExtLightData] = useState([])
  const [inspectionData, setInspectionData] = useState([])

const handleInspectionData = (newData) => {
  setInspectionData((prevData) => [...prevData, newData])
 for (let i = 0; i < inspectionData.length; i++) {
  console.log(inspectionData)
 }
}

  const addTask = (task) => {
    setChecklist((prevTasks) => [...prevTasks, task])
  }

  const handleTaskList = () => {
    console.log(checklist.length)
    checklist.map((item) => {
      console.log(item)
    })
  }


window.addEventListener('load', () => {
 
})
  return (
    <div className='flexColumn'>     
    <div className='menuDiv flexColumn'>
      <CustomerInfo customer={customer} setCustomer={setCustomer}/>
      
      {vehicle ? (
        <div>
            <h3>Vehicle Info</h3>       
                  <div>
                    <p>{vehicle.vin.year} {vehicle.vin.make} {vehicle.vin.model}</p>                    
                    <p>{vehicle.vin.vin}</p>
                    <p>{vehicle.vin.engine} {vehicle.vin.transmission}</p>
                    <p>{vehicle.vin.driveType} {vehicle.vin.fuel} {vehicle.vin.style}</p>                    
                </div>        
        </div>
      ) : (
        <PlateToVinConverter setVehicle={setVehicle} />   
      )}
      
        <h2>Tests & Inspections</h2>
        <button onClick={() => {
          setIsConcern(!isConcern)
          if(isConcern && ccc.length >= 1) {
            console.log('yes')
            setIsEdit(false)
          } 
          
          }
          }>{isConcern ? 'Hide' : 'Show'} CCC</button>
        <button onClick={() => setIsInspection(!isInspection)}>{isInspection ? 'Hide' : 'Add'} DVI</button>
        <button onClick={() => setIsCode(!isCode)}>{isCode ? 'Hide' : 'Document'} Code</button>
        <button onClick={() => setIsDraw(!isDraw)}>{isDraw ? 'Hide' : 'Add'} Draw Test</button>
        
      </div>  
      <div>
        {isConcern && (
          <div>
            <VehicleConcern 
              setChecklist={setChecklist} 
              setCCC={setCCC} 
              ccc={ccc} 
              isEdit={isEdit} 
              setIsEdit={setIsEdit}
              handleTaskList={handleTaskList}
            />
         
          </div>
        )}
      </div>
      <div>
        {isInspection && (
          <div>
            <h2>DVI</h2>
            <DVI 
              setBattTestResults={setBattTestResults} 
              setCodeArray={setCodeArray}
              battTestResults={battTestResults}
              

              />
          </div>
        )}
      </div>
      <div>
        {isDraw && (
          <div>
            <DrawTestApp 
              vehicle={vehicle} 
              codeArray={codeArray} 
              setCodeArray={setCodeArray} 
              customer={customer} 
              battTestResults={batTestResults} 
              setBattTestResults={setBattTestResults}/>
          </div>
        )}
      </div>

      <div>
        {isCode && (
         <DocumentCodes  setCodeArray={setCodeArray} />
        )}
      </div>
      <div>
        {isTask ? 
        <div>
          <h3>Tasks:</h3><br></br>
          {checklist.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div> : ''}
      </div>
   </div>
  )
}

export default App
