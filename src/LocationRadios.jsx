import React, { useState } from "react";

export const LocationRadios = ({setBulbLocation}) => {
  const [locations, setLocations] = useState({
    LF: false,
    RF: false,
    LR: false,
    RR: false,
  })

  const handleLocation = (location) => {
    setLocations({
      ...locations,
      [location]: !locations[location],
    })
    Object.keys(locations).map((location) => {
        console.log(location)
    })
   console.log(locations.LF)
  }

  return (
    <div>
      {Object.keys(locations).map((location) => (
        <label htmlFor={location} key={location}>
          {location}
          <input
            type="checkbox"
            id={location}
            checked={locations[location]}
            onChange={() => handleLocation(location)}
          />
        </label>
      ))}
    </div>
  )
}



