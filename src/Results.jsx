import { getDateTime } from "./utils"

export const TestResults = ({batTestResults, drawTestResults, codeArray}) => {
   const timestamp = getDateTime()
    return (
        <div>
        {batTestResults.map((resultObj, index) => (
          <p key={index}>Battery Test: {resultObj.timestamp} <br></br>{resultObj.volts} volts, {resultObj.amps} cca </p>
        ))}
        {codeArray.map((item, index) => (
          <p key={index}>Code: {item}<br></br>{timestamp}</p>
        ))}
          {drawTestResults.map((resultObj, index) => (
          <p key={index}><em>Voltage Drop Fuse Test</em> <br></br> Fuse: {resultObj.fuseLocation}<br></br>{resultObj.amps} Amp draw<br></br> {resultObj.fuseVoltage} volts, <br></br>{resultObj.timestamp} </p>
        ))}
         
        
      </div>
    )
}