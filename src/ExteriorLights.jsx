import React, {useState} from "react";
import { AddNote } from "./AddNote";

export const ExteriorLightCheck = ({ exteriorLights, setExteriorLights, }) => {
 
    const handleBulbNum = (optionId, partNum) => {
        setExteriorLights((prevState) => ({
            ...prevState,
            [optionId]: {
                ...prevState[optionId],
                bulb_num: partNum,                
            }
        }))
    }
    // toggles isWorking or isRepaired
    const toggleState = (optionId, property) => {
        setExteriorLights((prevState) => ({
            ...prevState,
            [optionId]: {
                ...prevState[optionId],
                [property]: !prevState[optionId][property]
            }
        }))
    }

    const handleSubmit = (value) => {
        const resultsString = `${value.isRepaired ? 
            ('Exterior lights pass visual inspection') : 
            (`${value.name} Fail ${value.isRepaired ? `Replaced ${value.part}` : `Unable to repair: ${value.notes}`}`)} `

            const updatedNotes = [...exteriorLights.notes, resultsString]
            
            //push notes to exteriorLights.notes
            setExteriorLights((prevState) => ({
                ...prevState,
               [notes]: updatedNotes
            }))          
           //push bulb part numbers to exteriorList.parts
           if (!key.isRepaired) {
            const updatedParts = [...exteriorLights.parts, bulb]
            setExteriorLights((prevState) => ({
                ...prevState,
                parts: updatedParts
            }))
           }  
        }
        return (
            <div className="row">
               {Object.entries(exteriorLights).map(([key, value]) => {
                console.log(key)
                    if (value.id === undefined) {
                        return null
                    }
                    return (
                        <div key={value.id}>
                              <fieldset>
                    <legend>{value.name}</legend>
           
                <label htmlFor='passRadio' >Pass
                    <input 
                        type="radio"
                        id='passRadio'
                        checked={value.isWorking}
                        onChange={() => value.isWorking}
                    />
                </label>
                <label htmlFor='failRadio' >Fail
                    <input 
                        type="radio"
                        id='failRadio'
                        checked={!value.isWorking}
                        onChange={() => toggleState(key, value.isWorking)}
                    />
                </label>
                {!key.isWorking && (
                     <div className="lightFormDiv">
                       
                            <legend>Repair Status</legend>
                            {/* <LocationRadios setBulbLocation={setBulbLocation} bulbLocation={bulbLocation}/> */}                                             
                            
                        <label htmlFor="repairedRadio">Replaced or Repaired</label>
                            <input 
                                type="radio" 
                                id="repairedRadio"
                                checked={value.isRepaired}
                                onChange={() => toggleState(key, value.isRepaired)}
                            />
                        <label htmlFor="notRepairedRadio">Unable to Repair</label>
                        <input 
                            type="radio"
                            id="notRepairedRadio"
                            checked={!value.isRepaired}
                            onChange={() => toggleState(key, value.isRepaired)} />
                      
                        {value.isRepaired ? (
                        <> 
                            <label htmlFor="bulbNumberInput">Bulb or Part # 
                            <input 
                                type="text"
                                id="bulbNumberInput"
                                placeholder="part #"
                                value={value.part}
                                onChange={(e) => {handleBulbNum(key, e.target.value)}} />
                                </label>
                        </>) : (
                        <> 
                            <AddNote setNoteObj={setExteriorLights.notes} />
                        </>)}
                        <button type="button" onClick={() => handleSubmit(value)}>Submit</button>
                    </div>
                )}
                </fieldset>
                        </div>
                    )
                })}         
            </div>
        )
    }

    
