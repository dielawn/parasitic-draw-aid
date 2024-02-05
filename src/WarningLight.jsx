import React, {useState, useEffect, useRef} from "react"
import { Note } from "./Note"


export const WarningLights = ({warninglights, setWarningLights, noteList, setNoteList, isEdit, setIsEdit, editIndex, setEditIndex, note, setNote}) => {
   
    // const [warninglights, setWarningLights] = useState([])
    const [isComplete, setIsComplete] = useState(false)
  const inputRef = useRef(null)
    const handleLightSelect = (newLight) => {          
       if (warninglights.includes(newLight)) {
            setWarningLights((prevLights) => prevLights.filter((selected) => selected !== newLight))
       } else {
            setWarningLights((prevLights) => [...prevLights, newLight])
       }
    }

   const warningOptions = ['cel', 'abs', 'airbag', 'trac', 'tpms', 'maint', 'other']

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
useEffect(() => {
    if (isEdit) {
        inputRef.current.focus()
    }
}, [isEdit])

    return (
        <div>
            <h3>Warning Lights</h3>
            <MakeCheckboxes />           
            <Note noteList={noteList} setNoteList={setNoteList} isEdit={isEdit} setIsEdit={setIsEdit} editIndex={editIndex} setEditIndex={setEditIndex} note={note} setNote={setNote}/>            
        </div>
    )

}