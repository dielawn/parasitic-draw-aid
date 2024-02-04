import React, {useState} from "react";
import { WarningLights } from "./WarningLight";
import { ExteriorLigtCheck } from "./ExteriorLights";

import { BatteryTest } from "./BatteryTest";


export const DVI = ({setBattTestResults, setCodeArray}) => {
    const [isWarningVis, setIsWarningVis] = useState(true)
    const [isBattVis, setIsBattVis] = useState(false)
    const [isExtLightVis, setIsExtLightVis] = useState(false)
   
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
   <Btn topic='warning' btnTxt='Warning Lights' isVisable={isWarningVis}/>
   <Btn topic='battery' btnTxt='Battery' isVisable={isBattVis}/>
   <Btn topic='lights' btnTxt='Exterior Lights' isVisable={isExtLightVis}/>
     
  </div >

  <div className="topicDiv">
   <Topic isVisable={isBattVis} component={ <BatteryTest setBattTestResults={setBattTestResults} /> } />
   <Topic isVisable={isWarningVis} component={ <WarningLights />} />
   <Topic isVisable={isExtLightVis} component={<ExteriorLigtCheck />} />     
  </div>
      
   </div>
   )
}