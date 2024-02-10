import React, { useState, useEffect } from "react"

import { AddNote } from "./AddNote";

export const Lamp = ({ exteriorLights, setExteriorLights, }) => {
     
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

    const handleSubmit = (key) => {
        const resultsString = `${key.isRepaired ? 
            ('Exterior lights pass visual inspection') : 
            (`${bulbLocation} Fail ${key.isRepaired ? `Replaced ${bulb}` : `Unable to repair: ${note}`}`)} `

            //push notes to exteriorLights.notes
            setExteriorLights((prevState) => ({
                ...prevState,
               [notes]: [...prevState.notes, resultsString]
            }))          
           //push bulb part numbers to exteriorList.parts
           setExteriorLights((prevState) => ({
            ...prevState,
           [parts]: [...prevState.parts, bulb]
        }))  

    }

    return (
        <div className="row">
            {Object.keys(exteriorLights).map((key) => {

                if (key.id == undefined) {
                    return null
                }
                return (
                    <div>
                          <fieldset>
                <legend>{key.name}</legend>
       
            <label htmlFor='passRadio' >Pass
                <input 
                    type="radio"
                    id='passRadio'
                    checked={key.isWorking}
                    onChange={() => key.isWorking}
                />
            </label>
            <label htmlFor='failRadio' >Fail
                <input 
                    type="radio"
                    id='failRadio'
                    checked={!key.isWorking}
                    onChange={() => toggleState(key, key.isWorking)}
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
                            checked={key.isRepaired}
                            onChange={() => toggleState(key, key.isRepaired)}
                        />
                    <label htmlFor="notRepairedRadio">Unable to Repair</label>
                    <input 
                        type="radio"
                        id="notRepairedRadio"
                        checked={!key.isRepaired}
                        onChange={() => toggleState(key, key.isRepaired)} />
                  
                    {isRepaired ? (
                    <> 
                        <label htmlFor="bulbNumberInput">Bulb or Part # 
                        <input 
                            type="text"
                            id="bulbNumberInput"
                            placeholder="part #"
                            value={bulb}
                            onChange={(e) => {handleBulbNum(key, e.target.value)}} />
                            </label>
                    </>) : (
                    <> 
                        <AddNote setNoteObj={exteriorLights.notes} />
                    </>)}
                    <button type="button" onClick={() => handleSubmit(key)}>Submit</button>
                </div>
            )}
            </fieldset>
                    </div>
                )
            })}         
        </div>
    )
}