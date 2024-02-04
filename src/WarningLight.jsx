import React, {useState} from "react"
import { Note } from "./Note"

export const WarningLights = () => {
   
    const [warninglights, setWarningLights] = useState([])
  
    const handleLightSelect = (newLight) => {          
       if (warninglights.includes(newLight)) {
            setWarningLights((prevLights) => prevLights.filter((selected) => selected !== newLight))
       } else {
            setWarningLights((prevLights) => [...prevLights, newLight])
       }
    }

   const warningOptions = ['cel', 'abs', 'airbag', 'trac', 'tpms', 'other']

   const MakeCheckboxes = () => (
    <>
      {warningOptions.map((option) => {
        const optionId = `${option}Checkbox`
        const formattedOption = option.toUpperCase()
                
        return (
          <div key={optionId}>
            <label htmlFor={optionId}>{formattedOption}</label>
            <input
              type="checkbox"
              name='warningLightCheckbox'
              id={optionId}
              checked={warninglights.includes(option)}
              onChange={() => handleLightSelect(option)}
            />
          </div>
        )
      })}
    </>
  )


    return (
        <div>
            <h3>Warning Lights</h3>
            <MakeCheckboxes />
          
           
           <Note />
        </div>
    )

}