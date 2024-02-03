import React, {useState} from "react"

export const WarningLights = () => {
   
    const [warninglights, setWarningLights] = useState([])
    const [selectedOption, setSelectedOption] = useState('')

    const handleLightSelect = (newLight) => {
        setWarningLights((prevLights) => [...prevLights, newLight])
    }
   const warningOptions = ['cel', 'abs', 'airbag', 'trac', 'tpms', 'other']

   const MakeRadios = () => {
    <>
    {warningOptions.map((option) => {
        const optionId = `${option}Radio`
        const formattedOption = option.toUpperCase()

       return ( 
                <div key={optionId}>
                    <label htmlFor={optionId}>{formattedOption}</label>
                    <input 
                        type="radio" 
                        name='warningLightRadio' 
                        id={optionId}
                        checked={selectedOption === option}
                        onChange={() => setSelectedOption(option)}
                    />
                </div>
            )
        })}
        </>
   }



    return (
        <div>
            <h3>Warning Lights</h3>
            <MakeRadios />
         
            {/* <label htmlFor="noteInput">Notes: </label>
            <input 
                type="text"
                id="noteInput"
                placeholder="Notes"
                value={warninglights[selectedOption].note}
                onChange={handleNoteChange}   
            />
             <button>Add Warning Light</button>
            <GetNotes /> */}
           
        </div>
    )

}