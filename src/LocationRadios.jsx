import React, { useState } from "react";

export const LocationRadios = ({setBulbLocation, bulbLocation}) => {
    const [locations, setLocations] = useState(['LF', 'RF', 'LR', 'RR'])
    const [possibleLocations, setPossibleLocations] = useState([])
    


    const handleLocation = (isFront, isAlsoRear) => {
        
        const selectedLocations = isAlsoRear ? locations : isFront ? locations.slice(0, 2) : locations.slice(2, 4)

        setPossibleLocations(selectedLocations)
    }
 
    const switchType = (type) => {
        switch (type) {
            case 'headlight':
               handleLocation(true, false)            
               break;
            case 'taillight':
                handleLocation(false, false)         
               break;
            case 'brakelight':
               handleLocation(false, false)          
               break;
            case 'turnsignal':
               handleLocation(true, true)          
               break;
            case 'backuplight':
               handleLocation(false, false)          
               break;
            default:
               break;
         }
    }

  return (
    <div>
      {possibleLocations.map((location) => (
        <label htmlFor={location} key={location}>
          {location}
          <input
            type="checkbox"
            id={location}
            checked={key}
            onChange={() => setPossibleLocations((prevKey) =>!prevKey)}
          />
        </label>
      ))}
    </div>
  )
}



