
import { useState } from "react";
import React from 'react'

export const AddNote = ({ setNoteObj}) => {
    const [note, setNote] = useState('Note worthy notes')
    
    const handleNotes = () => {
        
        setNoteObj((prevState) => ({
            ...prevState,
            notes: [...prevState.notes,  note]
          }))          
        setNote('')
    }
   

    return (
       <div>
         <label htmlFor="noteInput">Notes:</label><br></br>
        <textarea 
            name="noteInput" 
            id="noteInput" 
            placeholder="Notes" 
            cols="30" 
            rows="10"
            onChange={(e) => setNote(e.target.value)}
            value={note}
            >            
        </textarea><br></br>
        <button type="button" onClick={handleNotes}>Add Note</button>
       </div>
    )
}