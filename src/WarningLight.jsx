import React, {useState, useEffect, useRef} from "react"
import { Note } from "./Note"


export const WarningLights = ({warninglights, setWarningLights}) => {
  

  const handleLightSelect = (optionId) => {
    setWarningLights((prevState) => ({
      ...prevState,
      [optionId]: {
        ...prevState[optionId],
        isIlluminted: !prevState[optionId].isIlluminted
      },
    }))
  }


    return (
        <div>
            <h3>Warning Lights</h3>
            {Object.values(warninglights).map((option) => {
        const optionId = `${option.id}Checkbox`
                      
        return (
          <div key={optionId}>
            <label htmlFor={optionId}>{option.name}</label>
            <input
              type="checkbox"
              name='warningLightCheckbox'
              id={optionId}
              checked={option.isIlluminted}
              onChange={() => handleLightSelect(option.id)}
            />
          </div>
        )
      })}
        </div>
    )

}