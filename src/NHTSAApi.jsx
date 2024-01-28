import React, { useEffect, useState,  } from "react";


export const DecodeVinExtended = ({vin}) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = new URL(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/${vin}?format=json`)

                const response = await fetch(url)

                if(response.ok) {
                    const jsonData = await response.json()
                    setData(jsonData)
                } else {
                    console.error(`Failed: ${response.status}`)
                }
            } catch (error) {
                console.error(`Error: ${error}`)
            }
        }
        fetchData()
    }, [vin])
    return (
    <div>
        { data &&  (
     <div>
         <h2>Decoded VIN Data</h2>
     <pre>{JSON.stringify(data, null, 2)}</pre>
     </div>
      )}
    </div>
    )
}