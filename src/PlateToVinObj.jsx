import { PLATE_TO_VIN_API_KEY } from "./config";

export const PlateToVinConverter = ({state, setState, plate, setPlate, setVehicle}) => {
    
    const makeApiCall = () => {
        console.log(`state: ${state}, plate: ${[plate]}`)
        if (state !== '' && plate !== '') {
            const url = new URL("https://platetovin.com/api/convert")
        
            const headers = {
                "Authorization": PLATE_TO_VIN_API_KEY,
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
    
            let body = {
                "state": state,
                "plate": plate
            }
    
            fetch(url, {
                method: "POST",
                headers,
                body: JSON.stringify(body),
            }).then(response => response.json())
            .then((data) => {
                console.log(data)
                setVehicle(data)
            })
            .catch((error) => console.error(`Error: ${error}`))
        } else {
            if (!state) {
                console.error(`Invalid state`)
            }
            if (!plate) {
                console.error(`Invalid plate`)
            }
        }
       
    }

    return (
        <div>
            <label htmlFor="stateInput">State</label>
            <input 
                type="text"
                id="stateInput"
                placeholder="AL"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
            <label htmlFor="plateInput">Plate</label>
            <input 
                type="text"
                id="plateInput"
                placeholder="943PBE"
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
            />
            <button onClick={makeApiCall}>Get Vehicle Data</button>

        </div>
    )
}






