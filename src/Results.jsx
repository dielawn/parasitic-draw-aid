export const TestResults = ({batTestResults, drawResults, codeArray, timeLog ,ampsLog, noteObj}) => {
   
    return (
        <div className="resultsDiv">
          <h3>Battery Test Results:</h3>
        {batTestResults.map((resultObj, index) => (
          <p key={index}>Battery Test: {resultObj.volts} volts, {resultObj.amps} cca <br></br>{resultObj.timestamp} </p>
        ))}
        <h3>Codes:</h3>
        {codeArray.map((item, index) => (
          <p key={index}>Code: {item}</p>
        ))}
        <h3>Voltage Drop Test:</h3>
        {drawResults.map((resultObj, index) => (
            <p key={index}>Fuse# {resultObj.fuseLocation}<br></br>Type: {resultObj.fuseType}<br></br> {resultObj.mV} mV<br></br>{resultObj.mADraw} mA <br></br>{resultObj.timestamp}</p>
        ))}
        <h3>Sleep log:</h3>
        {timeLog.map((resultObj, index) => (
            <p key={index}>{resultObj.sleepTime} hours until sleep.<br></br>Started: {resultObj.timestamp}</p>
        ))}
        <h3>System Current:</h3>
        {ampsLog.map((resultObj, index) => (
            <p key={index}>{resultObj.systemAmps} mA current at battery <br></br> {resultObj.timestamp}</p>
        ))}
        <h3>Notes:</h3>
        {noteObj.map((resultObj, index) => (
            <p key={index}>{resultObj.note}<br></br>{resultObj.timestamp}</p>
        ))}
      </div>
    )
}