import { getDateTime } from "./utils"

export const TestResults = ({batTestResults, drawResults, codeArray, timeLog ,ampsLog, noteObj}) => {
   
    return (
        <div className="resultsDiv">
        {batTestResults.map((resultObj, index) => (
          <p key={index}>Battery Test: {resultObj.volts} volts, {resultObj.amps} cca <br></br>{resultObj.timestamp} </p>
        ))}
        {codeArray.map((item, index) => (
          <p key={index}>Code: {item}</p>
        ))}
        {drawResults.map((resultObj, index) => (
            <p key={index}>Fuse# {resultObj.fuseLocation}<br></br>Type: {resultObj.fuseType}<br></br> {resultObj.mV} mV<br></br>{resultObj.mADraw} mA <br></br>{resultObj.timestamp}</p>
        ))}
        {timeLog.map((resultObj, index) => (
            <p key={index}>{((resultObj.duration) / 60)  } Min {resultObj.txt}<br></br>{resultObj.timestamp}</p>
        ))}
        {ampsLog.map((resultObj, index) => (
            <p key={index}>{resultObj.systemAmps} mA current at battery <br></br> {resultObj.timestamp}</p>
        ))}
        {noteObj.map((resultObj, index) => (
            <p key={index}>{resultObj.note}<br></br>{resultObj.timestamp}</p>
        ))}
      </div>
    )
}