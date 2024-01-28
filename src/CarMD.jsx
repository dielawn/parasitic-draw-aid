import { CAR_MD_AUTH_KEY, CAR_MD_PARTNER_TOKEN } from "./config";
import React, { useEffect, useState } from "react";

export const CarMDRequestDecode = ({vin, setVehicleData}) => {
    const [dataObj, setDataObj] = useState(null)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = new URL(`http://api.carmd.com/v3.0/decode?vin=${vin}`)

                const headers = {
                    "content-type":"application/json",
                    "authorization": CAR_MD_AUTH_KEY,
                    "partner-token": CAR_MD_PARTNER_TOKEN
                  }     

                  const response = await fetch(url, {
                    method: "GET",
                    headers,
                })

                if (response.ok) {
                    const data = await response.json()
                    console.log(data)
                    setVehicleData(data)
                    setDataObj(data)
                } else {
                    console.error(`Response stats: ${response.status}`)
                }
            } catch (error) {
                console.error(`Error: ${error}`)
            }
        }
        fetchData()
    }, [vin, setVehicleData])

    return (
        <div>
            <h2>Vehicle Data</h2>
            <pre>{JSON.stringify(dataObj, null, 2)}</pre>
        </div>
    )
}
      
   

// const endpoints = {
//     decodeVin: `/decode?vin=${vin}`, 
//     decodeMore: `/decode_more?vin=${vin}`, 
//     obdPortLoc: `/port?vin=${vin}`,
//     getMaint: `/maint?vin=${vin}&mileage=${mileage}`,
//     getMaintList: `/maintlist?vin=${vin}`,
//     getCodeDef: `/code?vin=${vin}&codes=${codesArray}`,
//     getRepair: `/repair?vin=${vin}&mileage=${mileage}&dtc=${dtc}`,
//     getRepairList: `/repairlist?vin=${vin}`,
//     getRepairInfo: `/repairinfo?repair_code=${repairListCode}`,
//     getDiagnostics: `/diag?vin=${vin}&mileage=${mileage}&dtc=${dtc}`,
//     getUpcomingRepairs: `/upcoming?vin=${vin}&mileage=${mileage}`,
//     getTSB: `/tsb?vin=${vin}`,
//     getSafetyRecall: `/recall?vin=${vin}`,
//     getWarranty: `/warranty?vin=${vin}`,
//     getVehicleImage: `/image?vin=${vin}`,
//     getHistoryReport: `/vhr?vin=${vin}`,
    
// }
