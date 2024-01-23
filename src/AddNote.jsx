import { getDateTime } from "./utils";

export const AddNote = ({note, setNote, setNoteObj}) => {
   
    const handleNOtes = () => {
        const timestamp = getDateTime()
        setNoteObj(prevNotes => [...prevNotes, {note: note, timestamp: timestamp}])
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
        <button type="button" onClick={handleNOtes}>Add Note</button>
       </div>
    )
}