import { useEffect } from "react";
import { PLATE_TO_VIN_API_KEY } from "./config";
import React from 'react'

export const VinData = ({vehicle, vehicleData, setVehicleData}) => {
    useEffect(() => {
        console.log(vehicle.vin.vin)
        if (vehicle && vehicle.vin && vehicle.vin.vin) {
            const url = new URL("https://platetovin.com/api/vin-lookup");
            
            const headers = {
                "Authorization": PLATE_TO_VIN_API_KEY,
                "Content-Type": "application/json",
                "Accept": "application/json",
            };
            
            let body = {
                "vin": vehicle.vin.vin
            };
            
            fetch(url, {
                method: "POST",
                headers,
                body: JSON.stringify(body),
            }).then(response => response.json())
            .then((data) => {
                console.log(data)
                setVehicleData(data)
            })
        }
    }, [vehicle])
return (
    <div>
    
    {vehicleData && (
      <div>
        <VinData vehicle={vehicle} setVehicleData={setVehicleData} vehicleData={vehicleData} />
        <div>
          <h2>Advanced Data</h2>
          <pre>{JSON.stringify(vehicleData, null, 2)}</pre>
        </div>
      </div>
    )}
  </div>
)
}