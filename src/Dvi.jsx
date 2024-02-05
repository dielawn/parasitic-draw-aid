import React, {useState} from "react";
import { WarningLights } from "./WarningLight";
import { ExteriorLightCheck } from "./ExteriorLights";

import { BatteryTest } from "./BatteryTest";


export const DVI = ({setBattTestResults, batTestResults }) => {
   //show or hide topic
    const [isWarningVis, setIsWarningVis] = useState(true)
    const [isBattVis, setIsBattVis] = useState(false)
    const [isExtLightVis, setIsExtLightVis] = useState(false)

    //topic status
    const [isWarningComplete, setIsWarningComplete] = useState(false)
    const [isBattComplete, setIsBattComplete] = useState(false)
    const [isExtLightComplete, setIsExtLightComplete] = useState(false)

    //inspection data
    const [warninglights, setWarningLights] = useState([])
    const [noteList, setNoteList] = useState([])
   //  const [batTestResults, setBattTestResults] = useState([]) 

    //note component
    const [note, setNote] = useState("")    
    const [isEdit, setIsEdit] = useState(false)
    const [editIndex, setEditIndex] = useState(noteList.length)
    const [isComplete, setIsComplete] = useState(false)
   
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
  

   //
   const toggleVisibility = (topic) => {
      switch (topic) {
         case 'warning':
            setIsWarningVis(!isWarningVis)
            break;
         case 'battery':
            setIsBattVis(!isBattVis)
            break;
         case 'lights':
            setIsExtLightVis(!isExtLightVis)
            break;
         default:
            break;
      }
   }

   const toggleStatus = (topic) => {
      switch (topic) {
         case 'warning':
            setIsWarningComplete(!isWarningComplete)
            break;
         case 'battery':
            setIsBattComplete(!isBattComplete)
            break;
         case 'lights':
            setIsExtLightComplete(!isExtLightComplete)
            break;
         default:
            break; 
      }
      toggleVisibility(topic)
   }

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
   

   const Btn = ({topic, btnTxt, isVisable}) => {
      return (     
         <button className="inspBtn" onClick={() => toggleVisibility(topic)}>
         {btnTxt}
         <span className="material-symbols-outlined">
            {isVisable ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
         </span>
         </button>        
      )
   }

   const Topic = ({isVisable, component}) => {
      return (
      <div className={`inspTopic ${isVisable ? '' : 'hide'}`}>
         {component}
      </div>
      )
   }

   return (
   <div>

  <div className="topicBtnDiv">
   <Btn topic='warning' btnTxt='Warning Lights' isVisable={isWarningVis} />
   <Btn topic='battery' btnTxt='Battery' isVisable={isBattVis} />
   <Btn topic='lights' btnTxt='Exterior Lights' isVisable={isExtLightVis} />     
  </div >

  <div className="topicDiv">
   <Topic isVisable={isBattVis} component={ <BatteryTest setBattTestResults={setBattTestResults} /> } />
   <Topic isVisable={isWarningVis} component={ <WarningLights 
                                                   warninglights={warninglights} 
                                                   setWarningLights={setWarningLights} 
                                                   noteList={noteList}
                                                   setNoteList={setNoteList}
                                                   isEdit={isEdit}
                                                   setIsEdit={setIsEdit}
                                                   editIndex={editIndex}
                                                   setEditIndex={setEditIndex}
                                                   note={note}
                                                   setNote={setNote}
                                                /> } />
   <Topic isVisable={isExtLightVis} component={ <ExteriorLightCheck /> } />     
  </div>
      <div className="statusDiv">
         <div>
            <StatusCheck topic='warning' isComplete={isWarningComplete} topicTxt='Warning Lights' />
            <StatusCheck topic='battery' isComplete={isBattComplete} topicTxt='Battery Test' />
            <StatusCheck topic='lights' isComplete={isExtLightComplete} topicTxt='Exterior Lights' />
         </div>
         <div>
            
         {warninglights.map((warning) => (
               <p key={warning}>{warning}</p>
            ))}
         {noteList.map((notes, index) => (
        <div key={index}>
            <p>{notes}</p>
            <button onClick={() => handleEditNote(index)}>
               <span  className="material-symbols-outlined">edit</span>  
            </button>
            <button onClick={() => deleteNote(index)} >
               <span  className="material-symbols-outlined">delete</span>   
            </button>
        </div>
    ))}
         </div>
         <div>
            
         {batTestResults.map((result) => (
            <p>{result}</p>
         ))}
      </div>

      <div>
         
      </div>

      </div>
     
   </div>
   )
}