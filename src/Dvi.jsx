import React, {useState} from "react";
import { WarningLights } from "./WarningLight";
import { ExteriorLightCheck } from "./ExteriorLights";
import { BatteryTest } from "./BatteryTest";

export const DVI = () => {
   //inspection data
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
      notes: [],
      isPass: true,
      isFormVisible: false,
      isFormComplete: false,
   })
   
   const [exteriorLights, setExteriorLights] = useState({
      head_lights: {
         bulb_num: '',
         name: 'Head Lights',
         isPass: true,
         isPassLF: true,
         isPassRF: true,
         isRepaired: false,
         id: 'head_lights',
         isComplete: false,

      },     
      tail_lights:{
         bulb_num: '',
         name: 'Tail Lights',
         isPass: true,
         isPassLR: true,
         isPassRR: true,
         isRepaired: false,
         id: 'tail_lights',
         isComplete: false,
      },      
      tag_lights:{
         bulb_num: '',
         name: 'License Place Lights',
         isPass: true,
         isPassLR: true,
         isPassRR: true,
         isRepaired: false,
         id: 'tag_lights',        
         isComplete: false, 
      },     
      brake_lights:{
         bulb_num: '',
         name: 'Brake Lights',
         isPass: true,
         isPassLR: true,
         isPassRR: true,
         isPassC: true,
         isRepaired: false,
         id: 'brake_lights',   
         isComplete: false, 
      },     
      reverse_lights:{
         bulb_num: '',
         name: 'Reverse Lights',
         isPass: true,
         isPassRR: true,
         isPassLR: true,
         isRepaired: false,
         id: 'reverse_lights',
         isComplete: false,   
      },     
      turn_lights:{
         bulb_num: '',
         name: 'Turn Lights',
         isPass: true,
         isPassLF: true,
         isPassRF: true,
         isPassRR: true,
         isPassLR: true,
         isRepaired: false,
         id: 'turn_lights',
         isComplete: false,   
      },     
      notes: [],
      parts: [],
      isFormVisible: false,
      isFormComplete: false,
   })
   const [brakeInfo, setBrakeInfo] = useState({
      isFluidOk: true,
      frontRemaining: '',
      isFrontUneven: false,
      rearRemaining: '',
      isRearUneven: false,
      isRearDrum: false,
      notes: [],
      isFormVisible: false,
      isFormComplete: false,      
  },)

       
    //return a html elements for any illuminated lights or notes.
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

    //return battery test results or notes
    const BatteryTestData = () => {
      // if (!batteryTest) return null
      return (
      <div className="dataDiv">
          <h3>Battery Test</h3>
        {/* Rendering notes */}
        {batteryTest.notes.map((note, index) => (            
          <p key={index}>{note}</p>       
        ))}
      </div>
     ) }

     const ExteriorLightData = () => {
      return(
         <div className="dataDiv">
            <h3>Exterior Lights</h3>
            {exteriorLights.notes.map((note, index) => (
               <p key={index}>{note}</p>
            ))}
         </div>
      )
     }

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
            setExteriorLights((prevState) => ({
               ...prevState,
               isFormVisible: !prevState.isFormVisible,
             }))                   
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
            setExteriorLights((prevState) => ({
               ...prevState,
               isFormComplete: !prevState.isFormComplete,
             }))    
            topicVis = exteriorLights.isFormVisible
            break;
         default:
            break; 
      }
      // if the topic is visible hide it
      if (topicVis !== false) {
         toggleVisibility(topic)
      }
      
   }

   const checkIsFormComplete = () => {
      const allComplete = Object.values(exteriorLights).every(value => {
         console.log(value.isComplete === true)
         
      })
     console.log(allComplete, exteriorLights.notes.length)
      if (exteriorLights.notes.length <= 1) {
         for (const note of exteriorLights.notes) {
            console.log(note)
         }
         
      }
   }

   //status checkbox btn
   const StatusCheck = ({topic, topicTxt, isComplete}) =>  {
      return (
      <button key={topic} className="completeBtn" onClick={() => {
         toggleStatus(topic)
         checkIsFormComplete()
         }}>
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
   <Btn topic='lights' btnTxt='Exterior Lights' isVisible={exteriorLights.isFormVisible} />     
  </div >

  <div className="topicDiv">
   {/* battery */}
   <Topic 
      isVisible={batteryTest.isFormVisible} 
      component={ 
         <BatteryTest setBatteryTest={setBatteryTest} batteryTest={batteryTest}/> 
      } 
   />
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
   <Topic 
      isVisible={exteriorLights.isFormVisible} 
      component={ 
         <ExteriorLightCheck  
            exteriorLights={exteriorLights} 
            setExteriorLights={setExteriorLights}
         />
      } 
   />     
  </div>
      <div className="statusDiv">
         <div>
            <StatusCheck topic='warning' isComplete={warninglights.isFormComplete} topicTxt='Warning Lights' />
            <StatusCheck topic='battery' isComplete={batteryTest.isFormComplete} topicTxt='Battery Test' />
            <StatusCheck topic='lights' isComplete={exteriorLights.isFormComplete} topicTxt='Exterior Lights' />
         </div>
         <div className="resultsDiv">
           {warninglights.isFormComplete && <WarningLightData />}
        
            {batteryTest.isFormComplete && <BatteryTestData />}        
            
            {exteriorLights.isFormComplete && <ExteriorLightData />}
         </div>
         
      <div>
         
      </div>

      </div>
     
   </div>
   )
}