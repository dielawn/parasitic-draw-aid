import React from 'react'
import { useState } from 'react'
export const DocumentCodes = ({setCodeArray}) => {
    const [code, setCode] = useState('p0420 - Catalyst efficiency bellow threshold')
    const handleCode = () => {
        setCodeArray((prevCodes) => [...prevCodes, [ code ]])
        setCode('')
      }

    return (
        <div  className='alignRight'>
            <h2>Document Codes</h2>
            <label htmlFor="codesInput">Codes: </label>
            <input
                id="codesInput"
                placeholder="Codes"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                type="text">
            </input><br></br>
            <button type="button" onClick={handleCode}>Add Code</button>
        </div>
    )
}