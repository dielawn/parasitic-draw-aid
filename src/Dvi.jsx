import React, {useState} from "react";
import { WarningLights } from "./WarningLight";
import { ExteriorLigtCheck } from "./ExteriorLights";
import { DocumentCodes } from "./Codes";
import { BatteryTest } from "./BatteryTest";


export const DVI = ({setBattTestResults, setCodeArray}) => {
    const [isBattery, setIsBattery] = useState(true)
    const [isCEL, setIsCel] = useState(false)
    const [isWarningLight, setIsWarninglight] = useState(false)


   return (
   <div>
    <h2>In Vehicle</h2>
     
      <h3>Warning Lights</h3>
      <WarningLights />
      {isCEL && ( <DocumentCodes  setCodeArray={setCodeArray} />)}
      {isBattery && (<BatteryTest setBattTestResults={setBattTestResults} /> )}
      <ExteriorLigtCheck />
   </div>
   )
}