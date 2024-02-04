import React, { useState } from "react";

export const Note = () => {
    const [note, setNote] = useState("")
    const [noteList, setNoteList] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [editIndex, setEditIndex] = useState(noteList.length)

    const handleNoteChange = (e) => {
        setNote(e.target.value)
    }

    const handleEditNote = (index) => {
        setIsEdit(true)
        setEditIndex(index)
        setNote(noteList[index]) // Set the note to be edited
    }

    const deleteNote = (index) => {
       const updatedNoteList = [...noteList]
       updatedNoteList.splice(index, 1)
       setNoteList(updatedNoteList)
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

            {noteList.map((notes, index) => (
                <div key={index}>
                    <p>{notes}</p>
                    <button onClick={() => handleEditNote(index)} className="edit-button">
                        Edit
                    </button>
                    <button onClick={() => deleteNote(index)} >
                        <span className="material-symbols-outlined">delete</span>
                    </button>
                </div>
            ))}
        </div>
    )
}
