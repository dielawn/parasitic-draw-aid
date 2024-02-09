import React, {useState} from "react";

const VehicleProfile = () => {
    
    const [inspectionInfo, setInspectionInfo] = useState({
        vehicle: {
            warninglights: {
                cel: {
                    isAcceptable: false,
                    note: null,
                },
                abs: {
                    isAcceptable: false,
                    note: null,
                },
                airbag: {
                    isAcceptable: false,
                    note: null,
                },
                trac: {
                    isAcceptable: false,
                    note: null,
                },
                battery: {
                    isAcceptable: false,
                    note: null,
                },
                tpms: {
                    isAcceptable: false,
                    note: null,
                },
                other: {
                    isAcceptable: false,
                    note: null,
                },
            },
            hvac: {
                isAcceptable: true,
                note: null
            },
            headlamp: {
                lf: {
                    isWorking: true, 
                    isRepaired: null,
                    note: null,
                },
                rf:  {
                    isWorking: true, 
                    isRepaired: null,
                    note: null,
                },
            },
            turnlamp: {
                lf: {
                    isWorking: true, 
                    isRepaired: null,
                    note: null,
                },
                rf: {
                    isWorking: true, 
                    isRepaired: null,
                    note: null,
                },
                rr: {
                    isWorking: true, 
                    isRepaired: null,
                    note: null,
                },
                lr: {
                    isWorking: true, 
                    isRepaired: null,
                    note: null,
                }
            },
            taillamp: {
                lr: {
                    isWorking: true,
                    isRepaired: null,
                    note: null,
                },
                rr: {
                    isWorking: true,
                    isRepaired: null,
                    note: null,
                },

            },
            brakelamp: {
                lr: {
                    isWorking: true,
                    isRepaired: null,
                    note: null,
                },
                rr: {
                    isWorking: true,
                    isRepaired: null,
                    note: null,
                },
            },
            reverselamp: {
                lr: {
                    isWorking: true,
                    isRepaired: null,
                    note: null,
                },
                rr: {
                    isWorking: true,
                    isRepaired: null,
                    note: null,
                },
            },
            licenseLamp: {
                lr: {
                    isWorking: true,
                    isRepaired: null,
                    note: null,
                },
                rr: {
                    isWorking: true,
                    isRepaired: null,
                    note: null,
                },
            },
            wiper: {
                lf: {
                    isWorking: true,
                    note: null,
                },
                rf: {
                    isWorking: true,
                    note: null,
                },
                rear: {
                    isWorking: true,
                    note: null,
                },
                note: null,
            },
            belts: {
                ac: {
                    isAcceptable: true,
                    note: null
                },
                alt: {
                    isAcceptable: true,
                    note: null
                },
                ps: {
                    isAcceptable: true,
                    note: null
                },
                note: null,
            },
            air_filters: {
                engine: {
                    isAcceptable: true,
                    note: null,
                },
                cabin: {
                    isAcceptable: true,
                    note: null,
                }
            },
            battery: {
                volts: null,
                cca: null,
                note: null,
            },
            brake_system: {
                fluid: {
                    isAcceptable: true,
                    note: null,
                },
                front:{
                    isAcceptable: true,
                    remaining: null,
                    note: null,
                },
                rear:{
                    isAcceptable: true,
                    remaining: null,
                    note: null,
                },
            },
            tires: {
                lf: {
                    isAcceptable: true,
                    tread_remaining: null,
                },
                rf: {
                    isAcceptable: true,
                    tread_remaining: null,
                },
                rr: {
                    isAcceptable: true,
                    tread_remaining: null,
                },
                lr: {
                    isAcceptable: true,
                    tread_remaining: null,
                },
                size: {
                    width: null,
                    height: null,
                    wheel: null,
                    load: null,
                    isVerified: false,
                    note: null,
                },
                inflation: {
                    front: null,
                    rear: null,
                    note: null,
                } 
            },
            engine: {
                ignition: {
                    isAcceptable: true,
                    note: null,
                },
                fuel: {
                    isAcceptable: true,
                    note: null,
                },
                air_intake: {
                    isAcceptable: true,
                    note: null,
                },
                mechanical: {
                    isAcceptable: true,
                    timing: null,
                    note: null,
                },
                exhaust: {
                    isAcceptable: true,
                    note: null,
                },
                oil: {
                    isAcceptable: true,
                    level: null,
                    condition: null,
                    note: null,
                },
                anti_freeze: {
                    isAcceptable: true,
                    level: null,
                    condition: null,
                    note: null,
                },                
            },
            transmission: {
                isAcceptable: true,
                fluid_level: null,
                fluid_condition: null,
                note: null,
            },
            axles: {
                lf: {
                    isAcceptable: true,
                    note: null,
                },
                rf: {
                    isAcceptable: true,
                    note: null,
                },
                rr: {
                    isAcceptable: true,
                    note: null,
                },
                lr: {
                    isAcceptable: true,
                    note: null,
                },
            },
            differentials: {
                front: {
                    isAcceptable: true,
                    note: null,
                },
                rear: {
                    isAcceptable: true,
                    note: null,
                },
            },
            transfer_case: {
                isAcceptable: true,
                note: null,
            },
            fluids: {
                isAcceptable: true,
                note: null,
            },   
            accessories: {
                isAcceptable: true,
                note: null,
            },           
        }
    })

    const updateInfo = (newState) => {
       setInspectionInfo((prevState) => ({...prevState, ...newState}))
    }
}