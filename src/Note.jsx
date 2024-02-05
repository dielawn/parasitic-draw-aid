import React, { useEffect } from "react";

export const Note = ({noteList, setNoteList, setIsEdit, isEdit, editIndex, setEditIndex, note, setNote}) => {
    
    const handleNoteChange = (e) => {
        setNote(e.target.value)
    }   

    const handleNoteListChange = () => {
        if (isEdit) {
            // If in edit mode, update the existing note
            const updatedNoteList = [...noteList]
            updatedNoteList[editIndex] = note
            setNoteList(updatedNoteList)
        } else {
            // If not in edit mode, add a new note
            setNoteList((prevNotes) => [...prevNotes, note])
        }

        // Reset the input and edit mode
        setNote("")
        setIsEdit(false)
        setEditIndex(noteList.length)
    }

    useEffect(() => {
        const inputEl = document.getElementById('noteInput')
        if(isEdit) {            
            if (inputEl) {
                inputEl.focus()
            }            
        } else {
            setTimeout(() => {              
                if (inputEl) {
                   inputEl.focus()
                }
             }, 0)
          }
       }, [isEdit])

    return (
        <div>
            <label htmlFor="noteInput">Notes: </label>
            <input
                type="text"
                id="noteInput"
                placeholder="Notes"
                value={note}
                onChange={handleNoteChange}
            />
            <button onClick={handleNoteListChange}>
                {isEdit ? "Update Note" : "Add Note"}
            </button>
            
        </div>
    )
}
