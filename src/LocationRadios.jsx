import React, { useState } from "react";

export const LocationRadios = ({setBulbLocation, bulbLocation}) => {
    const [key, setKey] = useState('')

    const handleLocation = (isFront, isAlsoRear) => {
        const locations = ['LF', 'RF', 'LR', 'RR']
        const front = ['LF', 'RF'] 
        const rear = ['LR', 'RR'] 
        const selectedLocations = isAlsoRear ? locations : isFront ? front : rear

      setBulbLocation(selectedLocations)
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
      {bulbLocation.map((location) => (
        <label htmlFor={location} key={location}>
          {location}
          <input
            type="checkbox"
            id={location}
            checked={key}
            onChange={() => setKey((prevKey) =>!prevKey)}
          />
        </label>
      ))}
    </div>
  )
}



