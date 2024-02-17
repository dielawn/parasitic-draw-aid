import React, {useState} from "react";
import { AddNote } from "./AddNote";

export const ExteriorLightCheck = ({ exteriorLights, setExteriorLights, }) => {
 
    
    const handleBulbNum = (lightId, partNum) => {
        setExteriorLights((prevState) => ({
            ...prevState,
            [lightId]: {
                ...prevState[lightId],
                bulb_num: partNum,                
            }
        }))
    }
    // toggles isPass or isRepaired isComplete
    const togglePassFail = (lightId, property) => {
        setExteriorLights((prevState) => ({
            ...prevState,
            [lightId]: {
                ...prevState[lightId],
                [property]: !prevState[lightId][property] //can be used with isPass or isRepaired isComplete
            }
        }))
    }

    const handleNotes = () => {       
       for (const note of exteriorLights.notes) {        
        if (note.note !== undefined) {
            return note.note
        }
       }
    }

  const checkIsFormComplete = (resultsString, isRepaired, bulb) => {
    const allComplete = Object.values(exteriorLights).every(value => value.isComplete === true)
    if (allComplete) {
        setExteriorLights(prevState => ({
            ...prevState,
            isFormComplete: true,
        }))
    } else {
        setExteriorLights(prevState => ({
            ...prevState,
            isFormComplete: false,
        }))
    }
    handleSubmit(resultsString, isRepaired, bulb)
  }

    const handleSubmit = (resultsString, isRepaired, bulb) => {      
       
        //push notes to .notes
        setExteriorLights((prevState) => ({
            ...prevState,
                notes: [...exteriorLights.notes, resultsString]
            }))          
        //push bulb part numbers to .parts
        if (isRepaired) {
        setExteriorLights((prevState) => ({
            ...prevState,
                parts: [...exteriorLights.parts, bulb]
            }))
        }  
        
           console.log(resultsString)     
           
    }
        
        return (
            Object.entries(exteriorLights)
                .filter(([key, _]) => !['notes', 'parts', 'isFormVisible', 'isFormComplete'].includes(key))
                .map(([category, details]) => {
                const {
                    bulb_num, 
                    name, 
                    isPass, 
                    isPassLF = null, 
                    isPassRF = null, 
                    isPassRR = null, 
                    isPassLR = null, 
                    isRepaired, 
                    id,
                    isComplete, 
                } = details
               
                //return the locations only if they exist in the object and fails inspection
                const locations = ['LF', 'RF', 'RR', 'LR'].filter(location => {
                    const isPassKey = `isPass${location}`;
                    return details.hasOwnProperty(isPassKey) && details[isPassKey] === false;
                }).join(' ')

                
                const locationString =locations ? `${locations} ❌` : ''
                const statusString = `${isRepaired ? `Replaced  ${bulb_num} ✅ ` : 'Unable to repair '}${handleNotes() ? ` Note: ${handleNotes()}` : ''}`  
                const resultsString = `${name} ${isPass ? '✅' : `${locationString} ${statusString} `} `
               


                return (
                        <div className="eachLightDiv" key={id}>
                                   
                            <fieldset>
                            <legend>{name}</legend>

                            <label htmlFor='passRadio' >✅
                            <input 
                                type="radio"
                                id='passRadio'
                                checked={isPass}
                                onChange={() => togglePassFail(id, 'isPass')}
                            />
                            </label>
                            <label htmlFor='failRadio' >❌
                            <input 
                                type="radio"
                                id='failRadio'
                                checked={!isPass}
                                onChange={() => togglePassFail(id, 'isPass')}
                            />
                            </label>
                            {!isPass && !isComplete && (
                            <div className="lightFormDiv" key={`${id}-Form`}>

                                   
                                    <fieldset>
                                        <legend>Check Failed locations</legend>
                                        {isPassLF !== null && 
                                        <label htmlFor="lfCB" key={`${id}-isPassLF`}>
                                            <input 
                                                type="checkbox"
                                                id="lfCB"       
                                                checked={!isPassLF} 
                                                onChange={() => togglePassFail(id, 'isPassLF')}
                                            />LF
                                        </label> }     
                                    {isPassRF !== null && 
                                        <label htmlFor="rfCB" key={`${id}-isPassRF`}>
                                            <input 
                                                type="checkbox"
                                                id="rfCB"       
                                                checked={!isPassRF} 
                                                onChange={() => togglePassFail(id, 'isPassRF')}
                                            />RF
                                        </label> }  
                                    {isPassRR !== null && 
                                        <label htmlFor="rrCB" key={`${id}-isPassRR`}>
                                            <input 
                                                type="checkbox"
                                                id="rrCB"       
                                                checked={!isPassRR} 
                                                onChange={() => togglePassFail(id, 'isPassRR')}
                                            />RR
                                        </label> }           
                                    {isPassLR !== null && 
                                        <label htmlFor="lrCB" key={`${id}-isPassLR`}>
                                            <input 
                                                type="checkbox"
                                                id="lrCB"       
                                                checked={!isPassLR} 
                                                onChange={() => togglePassFail(id, 'isPassLR')}
                                            />LR
                                        </label> }                                         
                                    </fieldset>
                                    
                                <label htmlFor="repairedRadio">Repaired</label>
                                    <input 
                                        type="radio" 
                                        id="repairedRadio"
                                        checked={isRepaired}
                                        onChange={() => togglePassFail(id, 'isRepaired')}
                                    />
                                <label htmlFor="notRepairedRadio">Unable to Repair</label>
                                <input 
                                    type="radio"
                                    id="notRepairedRadio"
                                    checked={!isRepaired}
                                    onChange={() => togglePassFail(id, 'isRepaired')} />

                               
                                <div key={`${id}-!repaired`}> 
                                    <label htmlFor="bulbNumberInput">Bulb or Part # 
                                    <input 
                                        type="text"
                                        id="bulbNumberInput"
                                        placeholder="part #"
                                        value={bulb_num}
                                        onChange={(e) => {handleBulbNum(id, e.target.value)}} />
                                        </label>
                                </div>
                                <div key={`${id}-repaired`}> 
                                    <AddNote setNoteObj={setExteriorLights} />
                                </div>
                                {/* <button type="button" onClick={() => handleSubmit(resultsString, isRepaired, id.bulb_num)}>Submit</button> */}
                            </div>
                            )}<br></br>
                            
                            <label htmlFor="completeCB">Complete</label>
                            <input 
                                id="completeCB"
                                type="checkbox"
                                checked={isComplete}
                                onChange={() => {
                                    togglePassFail(id, 'isComplete')
                                    checkIsFormComplete(resultsString, isRepaired, id.bulb_num)
                                }}
                                />
                            </fieldset>
                           
                        </div>
                    )
                          
            })
          );
        };



                                        
              
                                        

                                    //     <fieldset>
                                    //     <legend>{name}</legend>
                                    //     <label htmlFor="passCB">
                                    //         <input 
                                    //             id="passCB"
                                    //             type="checkbox"
                                    //             checked={isPass}
                                    //             onChange={() => togglePassFail(id, 'isPass')}
                                    //         />✅
                                    //     </label>
                                    //     <label htmlFor="failCB">
                                    //         <input 
                                    //             id="failCB"
                                    //             type="checkbox"
                                    //             checked={!isPass}
                                    //             onChange={() => togglePassFail(id, 'isPass')}
                                    //         />❌
                                    //     </label>
                                    //     {
                                    //         lightDetails.isPass 
                                    //             ? (<div></div>) 
                                    //             : (<div></div>)
                                    //     }
                                    // </fieldset>
 
 //fieldset   
// legend {exteriorLights.name}
// checkboxes locations =lf,rf,rr,lr  (locations.location) onChange toggleState(locations.id, isWorking) checked isWorking
// isWorking ? '' : 'isRepaired true false radios onchange toggleState locations.id, isRepaired checked isRepaired'
//isRepaired? 'bulb_num' : 'note'
//button

{/* <form>
                            {Object.entries(exteriorLights).filter(([key, value]) => !['notes', 'parts', 'isFormVisible', 'isFormComplete'].includes(key)).map(([lightId, lightDetails]) => {
                                console.log(lightId, lightDetails)
                                Object.entries(lightDetails).filter(([detail, names]) => ['name', ].includes(detail)).map((lightName) => {
                                    console.log(lightName)
                                })
                                return (
                                <div key={lightId}>
                                    <fieldset>
                                        <legend>{lightDetails.name}</legend>
                                        <label htmlFor="passCB">
                                            <input 
                                                id="passCB"
                                                type="checkbox"
                                                checked={lightDetails.isPass}
                                                onChange={() => togglePassFail(lightId, 'isPass')}
                                            />✅
                                        </label>
                                        <label htmlFor="failCB">
                                            <input 
                                                id="failCB"
                                                type="checkbox"
                                                checked={!lightDetails.isPass}
                                                onChange={() => togglePassFail(lightId, 'isPass')}
                                            />❌
                                        </label>
                                        {
                                            lightDetails.isPass 
                                                ? (<div></div>) 
                                                : (<div></div>)
                                        }
                                    </fieldset>
                                </div>
                            )})}
                        </form> */}