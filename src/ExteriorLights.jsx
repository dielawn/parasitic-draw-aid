import React, {useState} from "react";
import { Note } from "./Note";
import { Lamp } from "./LampInput";

export const ExteriorLigtCheck = () => {
    const [exteriorLights, setExteriorLights] = useState({
        headlamp: true,
        taillamp: true,
        brakelamp: true,
        turnlamp: true,
        backuplamp: true,
    })
    
    const [isFail, setIsFail] = useState(true)
    const [failLog, setFailLog] = useState([])
    const [isRepaired, setIsRepaired] = useState(true)
    const [location, setLocation] = useState('')
    
    const handleLights = (e) => {
        const {name, checked} = e.target
        setExteriorLights((prevState) => ({...prevState, [name]: checked}))
    }

    const handleFail = () => {
        exteriorLights.foreach((lamp) => {
            if (lamp === false) {
                setIsFail(true)
                setFailLog((prevFail) => [...prevFail, [lamp]])
            }
        })
     
    }

    return (
        <div>
            <h2>Exterior Light Check</h2>
            <form>
                <fieldset>
                    <legend>Exterior Lights</legend>
                    <Lamp labelTxt={`Headlights low/high beam`} />
                    <Lamp labelTxt={`Taillights`} />
                    <Lamp labelTxt={`Brakelights`} />
                    <Lamp labelTxt={'Turnlights'} />
                    <Lamp labelTxt={`Backuplights`} />
                  
                </fieldset>
                {/* <fieldset>
                {isFail && (
                        <div>
                            <label htmlFor="locationInput">Bulb location</label>
                            <input 
                                type="text" 
                                id="locationInput"
                                value={location}
                                placeholder="Location"
                                onChange={setLocation}
                            />
                            <label htmlFor="repairStatus"></label>
                        </div>
                    )}
                    {failLog && (
                        failLog.map((bulb) => {
                            <p>Failed {bulb}</p>
                        })
                    )}
                </fieldset> */}

            </form>
            
        </div>
    )

}