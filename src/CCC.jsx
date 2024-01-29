import React, { useEffect, useState, Component } from "react";

export const VehicleConcern = ({setCCC, setChecklist, handleTaskList, ccc, isEdit, setIsEdit }) => {
    const [concern, setConcern] = useState('')
    const [cause, setCause]  = useState('')
    const [correction, setCorrection] = useState('')
    const [editIndex, setEditIndex] = useState(0)
  
      

    const handleCCCSubmit = () => {
        //if this is an edit don't add another element just amend
        if (isEdit) {
            const updatedCCC = [...ccc]
            updatedCCC[editIndex] = {concern, cause, correction}
            setCCC(updatedCCC)
            setIsEdit(false)
            setChecklist((prevItem) => [...prevItem, concern])
        } else {
            setCCC((prevCCC) => [...prevCCC, {concern, cause, correction}])
        }
        handleTaskList()
    }

    const handleEditCCC = (index) => {
        setIsEdit(true)
        setEditIndex(index)
        setConcern(ccc[index].concern)
        setCause(ccc[index].cause)
        setCorrection(ccc[index].correction)
        
        
    }
    
    return (
       <div className="cccOuterDiv">
            {isEdit ? (<div><div className="concernDiv">
                <label htmlFor="concernInput">Concern:</label><br></br>
                <textarea 
                    name="concernInput"
                    id="concernInput" 
                    placeholder="Vehicle concern"
                    onChange={(e) => setConcern(e.target.value)}
                    value={concern}
                    cols="30" 
                    rows="10">
                </textarea><br></br></div>
            

            <div className="causeDiv">
                <label htmlFor="causeInput">Cause:</label><br></br>
                <textarea 
                    name="causeInput" 
                    id="causeInput" 
                    placeholder="Cause of concern"
                    onChange={(e) => setCause(e.target.value)}
                    value={(cause)}
                    cols="30" 
                    rows="10">
                </textarea><br></br>
            </div>

            <div className="correctionDiv">
                <label htmlFor="correctionInput">Correction:</label><br></br>
                <textarea 
                    name="correctionInput" 
                    id="correctionInput" 
                    placeholder="Correction of concern"
                    onChange={(e) => setCorrection(e.target.value)}
                    value={(correction)}
                    cols="30" 
                    rows="10">
                </textarea><br></br>
            </div>
                <button onClick={handleCCCSubmit}>Submit CCC</button>
            </div>
            ) : (
                <div>
                    <button onClick={() => {
                        setConcern('')
                        setCause('')
                        setCorrection('')
                        setIsEdit(true)
                        handleCCCSubmit()                        
                        }} className="new-button">New CCC</button>
                    {ccc.map((cccObj, index) => (
                    <div className="cccDiv" key={index}>             
                        <button onClick={() => handleEditCCC(index)} className="edit-button">
                          Edit CCC {index + 1} 
                        </button>            
                        <h3>CCC {index + 1}</h3>
                        <p>Concern: {cccObj.concern}</p>
                        <p>Cause: {cccObj.cause}</p>
                        <p>Correction: {cccObj.correction}</p>
                    </div>
                ))}               
                </div>
            )}
            <div>               
        </div> 
    </div>
    )
}