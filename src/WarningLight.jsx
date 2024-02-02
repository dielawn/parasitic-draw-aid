import React, {useState} from "react"

export const WarningLights = () => {
    const [warnings, setWarnings] = useState('')

    return (
        <div>
            <label htmlFor="warningsInput">Warning Lights</label>
            <input 
                type="text"
                id="warningsInput"
                placeholder="Warning lights"
                value={warnings}
                onChange={(e) => setWarnings(e.target.value)} />
        </div>
    )

}