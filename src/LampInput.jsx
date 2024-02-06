import React, { useState, useEffect } from "react"
import { Note } from "./Note"
import { LocationRadios } from "./LocationRadios";

export const Lamp = ({ labelTxt, }) => {
    const [isPass, setIsPass] = useState(true)
    const [isRepaired, setIsRepaired] = useState(true)
    const [bulb, setBulb] = useState('')
    const [note, setNote] = useState('')
    const [partsList, setPartsList] = useState([])
    const [noteList, setNoteList] = useState([])
    const [bulbLocation, setBulbLocation] = useState('')
   
     

    const handlePartsList = (newPart) => {
        setPartsList((prevParts) => [...prevParts, {bulb: newPart, location: bulbLocation}])
    }
    const handleNotesList = (newNote) => {
        setNoteList((prevNotes) => [...prevNotes, {note: newNote, location: bulbLocation}])
    }
   

    const handleSubmit = () => {
        if (bulb !== '') {
            handlePartsList(bulb)
        }
        if (note !== '') {
            handleNotesList(note)
        }
console.log(partsList, noteList)
    }


    return (
        <div className="row">
            <fieldset>
                <legend>{labelTxt}</legend>
        
            <label htmlFor='passRadio' >Pass
                <input 
                    type="radio"
                    id='passRadio'
                    checked={isPass}
                    onChange={() => setIsPass(true)}
                />
            </label>
            <label htmlFor='failRadio' >Fail
                <input 
                    type="radio"
                    id='failRadio'
                    checked={!isPass}
                    onChange={() => setIsPass(false)}
                />
            </label>
            {!isPass && (
                 <>
                    <fieldset>
                        <legend>Repair Status</legend>
                        <LocationRadios setBulbLocation={setBulbLocation} />

                    
                        
                    <label htmlFor="repairedRadio">Replaced or Repaired</label>
                        <input 
                            type="radio" 
                            id="repairedRadio"
                            checked={isRepaired}
                            onChange={() => setIsRepaired(true)}
                        />
                    <label htmlFor="notRepairedRadio">Unable to Repair</label>
                    <input 
                        type="radio"
                        id="notRepairedRadio"
                        checked={!isRepaired}
                        onChange={() => setIsRepaired(false)} />
                    </fieldset>
                    {isRepaired ? (
                    <> 
                        <label htmlFor="bulbNumberInput">Bulb or Part # 
                        <input 
                            type="text"
                            id="bulbNumberInput"
                            placeholder="part #"
                            value={bulb}
                            onChange={(e) => {setBulb(e.target.value)}} />
                            </label>
                    </>) : (
                    <> 
                        <label htmlFor="reasonInput">Reason: </label>
                        <input 
                            type="text"
                            id="reasonInput"
                            placeholder="Notes"
                            value={note}
                            onChange={(e) => setNote(e.target.value)} />
                    </>)}
                    <button type="button" onClick={handleSubmit}>Submit</button>
                </>
            )}
            </fieldset>
        </div>
    )
}