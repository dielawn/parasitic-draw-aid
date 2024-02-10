import React, {useState} from "react";
import { WarningLights } from "./WarningLight";
import { ExteriorLightCheck } from "./ExteriorLights";
import { BatteryTest } from "./BatteryTest";
import { AddNote } from "./AddNote";



export const DVI = ({setBattTestResults, battTestResults}) => {

   const [warninglights, setWarningLights] = useState({
      cel:{
         name: 'Check Engine Light',
         isIlluminated: false,
         id: 'cel',
      },
      abs:{
         name: 'ABS',
         isIlluminated: false,
         id: 'abs'
      },
      airbag: {
         name: 'Airbag',
         isIlluminated: false,
         id: 'airbag',
      },
      trac: {
         name: 'Traction Control',
         isIlluminated: false,
         id: 'trac'
      },
      tpms: {
         name: 'Tire Pressure Monitoring System',
         isIlluminated: false,
         id: 'tpms'
      },
      maint: {
         name: 'Maintenance Lights',
         isIlluminated: false,
         id: 'maint'
      },
      other: {
         name: 'Notes',
         isIlluminated: false,
         id: 'other'
      },
      notes: [],
      isFormVisible: true,
      isFormComplete: false
    })
   
   const [batteryTest, setBatteryTest] = useState({
      volts: '12.2',
      cca: '800',
      notes: [],
      isPass: true,
      isFormVisible: false,
      isFormComplete: false,
   })
   
    const [isExtLightVis, setIsExtLightVis] = useState(false)

    //topic status
    const [isExtLightComplete, setIsExtLightComplete] = useState(false)

    //inspection data
    const [exteriorLights, setExteriorLights] = useState({
      headlights:{
         lf:{isWorking: true},
         rf:{isWorking: true},
      },
      taillights:{
         lr:{isWorking: true},
         rr:{isWorking: true},
      },
      brakelights:{
         lr:{isWorking: true},
         rr:{isWorking: true},
      },
      backuplights:{
         lr:{isWorking: true},
         rr:{isWorking: true},
      },
      turn_lights:{
         lf:{isWorking: true},
         rf:{isWorking: true},
         lr:{isWorking: true},
         rr:{isWorking: true},
      },
      isFormVisible: false,
      isFormComplete: false,
    })

    

   
    const [isComplete, setIsComplete] = useState(false)
   
    //return a string of any illuminated lights or notes.
    const WarningLightData = () => (
      <div className="dataDiv">
         <h3>Warning Lights</h3>
         {Object.values(warninglights).map((option) => {
            //check if illuminated
            if (option.isIlluminated) {
               return <p key={option.id}>{option.name}</p>
            }
            return null
         })}
         {Object.values(warninglights.notes).map((notes, index) => (
            <p key={index}> {notes.note}</p>
         ))}
      </div>
    )

    const BatteryTestData = ({ batteryTest }) => {
      // if (!batteryTest) return null
      return (
      <div className="dataDiv">
          <h3>Battery Test</h3>
        {/* Rendering notes */}
        {batteryTest.notes.map((note, index) => (            
          <p key={index}>{note.note}</p>       
        ))}
      </div>
     ) };

    //note functions edit & delete
   const handleEditNote = (index) => {
      setIsEdit(true)
      setEditIndex(index)
      setNote(noteList[index]) // Set the note to be edited
   }   
   const deleteNote = (index) => {
     const updatedNoteList = [...noteList]
     updatedNoteList.splice(index, 1) // Remove one element at the specified index
     setNoteList(updatedNoteList)
   }

   const handleCompleteBtn = () => {
      setIsComplete(!isComplete)                
   }
  

   //show hide topics at menu btns
   const toggleVisibility = (topic) => {     
      switch (topic) {
         case 'warning':
            setWarningLights((prevState) => ({
               ...prevState,
               isFormVisible: !prevState.isFormVisible,
             }))            
            break;
         case 'battery':
            setBatteryTest((prevState) => ({
               ...prevState,
               isFormVisible: !prevState.isFormVisible,
             }))               
            break;
         case 'lights':
            setIsExtLightVis(!isExtLightVis)           
            break;
         default:
            break;
      }
   }
   //sets complete status of each topic
   const toggleStatus = (topic) => {
      let topicVis = null
      switch (topic) {
         case 'warning':
            setWarningLights((prevState) => ({
               ...prevState,
               isFormComplete: !prevState.isFormComplete,
             }))    
            topicVis = warninglights.isFormVisible
            break;
         case 'battery':
            setBatteryTest((prevState) => ({
               ...prevState,
               isFormComplete: !prevState.isFormComplete,
             }))    
            topicVis = batteryTest.isFormVisible
            break;
         case 'lights':
            setIsExtLightComplete(!isExtLightComplete)
            topicVis = isExtLightVis
            break;
         default:
            break; 
      }
      // if the topic is visible hide it
      if (topicVis !== false) {
         toggleVisibility(topic)
      }
      
   }

   //status checkbox btn
   const StatusCheck = ({topic, topicTxt, isComplete}) =>  {
      return (
      <button key={topic} className="completeBtn" onClick={() => toggleStatus(topic)}>
         {topicTxt} 
         <span className={`material-symbols-outlined ${isComplete ? 'complete' : 'incomplete'}`}>
            {isComplete ? 'check_box' : 'check_box_outline_blank'}
         </span>
      </button>  
      )
   }
   

   const Btn = ({topic, btnTxt, isVisible}) => {
      return (     
         <button className="inspBtn" onClick={() => toggleVisibility(topic)}>
         {btnTxt}
         <span className="material-symbols-outlined">
            {isVisible ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
         </span>
         </button>        
      )
   }

   const Topic = ({isVisible, component}) => {
      return (
      <div className={`inspTopic ${isVisible ? '' : 'hide'}`}>
         {component}
      </div>
      )
   }

   return (
   <div>

  <div className="topicBtnDiv">
   <Btn topic='warning' btnTxt='Warning Lights' isVisible={warninglights.isFormVisible} />
   <Btn topic='battery' btnTxt='Battery' isVisible={batteryTest.isFormVisible} />
   <Btn topic='lights' btnTxt='Exterior Lights' isVisible={isExtLightVis} />     
  </div >

  <div className="topicDiv">
   {/* battery */}
   <Topic isVisible={batteryTest.isFormVisible} component={ <BatteryTest setBatteryTest={setBatteryTest}/> } />
   {/* warning lights */}
   <Topic 
      isVisible={warninglights.isFormVisible} 
      component={ 
         <WarningLights 
            warninglights={warninglights} 
            setWarningLights={setWarningLights} 
            
         />
      } 
   />
   {/* exterior lights */}
   <Topic isVisible={isExtLightVis} component={ <ExteriorLightCheck /> } />     
  </div>
      <div className="statusDiv">
         <div>
            <StatusCheck topic='warning' isComplete={warninglights.isFormComplete} topicTxt='Warning Lights' />
            <StatusCheck topic='battery' isComplete={batteryTest.isFormComplete} topicTxt='Battery Test' />
            <StatusCheck topic='lights' isComplete={isExtLightComplete} topicTxt='Exterior Lights' />
         </div>
         <div className="resultsDiv">
           {warninglights.isFormComplete && <WarningLightData />}
        
            {batteryTest.isFormComplete && <BatteryTestData batteryTest={batteryTest}/>}        
         </div>

      <div>
         
      </div>

      </div>
     
   </div>
   )
}