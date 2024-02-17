import React, {useState} from "react";

import { AddNote } from "./AddNote";

export const WarningLights = ({ warninglights, setWarningLights }) => {

  const handleLightSelect = (optionId, ) => {
  
   
    setWarningLights((prevState) => ({
      ...prevState,
      [optionId]: {
        ...prevState[optionId],
        isIlluminated: !prevState[optionId].isIlluminated,
      },
    }))
   
  }

  

  return (
    <div>
      <h3>Warning Lights</h3>
      {Object.values(warninglights).map((option) => {
        // don't render isFormVisible or isFormComplete
        if (option.id == undefined) {
          return null 
        }
          return (
            <div key={option.id}>
              <label htmlFor={option.id}>{option.name}</label>
              <input
                type="checkbox"
                name="warningLightCheckbox"
                id={option.id}
                checked={option.isIlluminated}
                onChange={() => handleLightSelect(option.id, option)}
              />
             
            </div>            
          )     
      })}
      <> 
        {warninglights.other.isIlluminated && <AddNote setNoteObj={setWarningLights} />} 
        {warninglights.notes.length >= 1 && <p></p>}
      </>
    </div>
  )
}