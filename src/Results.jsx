import { getDateTime } from "./utils"

export const TestResults = ({batTestResults, drawResults, codeArray}) => {
   const timestamp = getDateTime()
    return (
        <div>
        {batTestResults.map((resultObj, index) => (
          <p key={index}>Battery Test: {resultObj.timestamp} <br></br>{resultObj.volts} volts, {resultObj.amps} cca </p>
        ))}
        {codeArray.map((item, index) => (
          <p key={index}>Code: {item}<br></br>{timestamp}</p>
        ))}
          {drawResults.map((resultObj, index) => (
            <p key={index}>Fuse# {resultObj.fuseLocation}<br></br>mV: {resultObj.mV}<br></br>{resultObj.mADraw} mA <br></br>{timestamp}</p>
        ))}
         
        
      </div>
    )
}