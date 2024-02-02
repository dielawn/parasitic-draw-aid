import React, {useState} from "react";

export const Note = () => {
    const [note, setNote] = useState('')

    return (
        <div>
            <label htmlFor="noteInput">Notes: </label>
            <input 
                type="text" 
                id="noteInput"
                placeholder="Notes"
                value={note}
                onChange={setNote((e) => e.target.value)}
            />
            {note && (<p>{note}</p>)}
        </div>
    )
}