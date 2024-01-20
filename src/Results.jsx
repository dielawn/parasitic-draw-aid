import { useState } from "react";

export const TestResults = ({batTestResults, drawTestResults}) => {
   console.log(batTestResults)

    return (
        <div>
        {batTestResults.map((resultObj, index) => (
          <p key={index}>Battery Test: {resultObj.timestamp} <br></br>{resultObj.volts} volts, {resultObj.amps} cca </p>
        ))}
          {drawTestResults.map((resultObj, index) => (
          <p key={index}>Fuse mV Test: <br></br> Fuse: {resultObj.fuseLocation}<br></br>{resultObj.amps} Amp draw<br></br> {resultObj.fuseVoltage} volts, <br></br>{resultObj.timestamp} </p>
        ))}
        
      </div>
    )
}