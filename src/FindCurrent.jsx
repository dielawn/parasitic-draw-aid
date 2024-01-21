import { useEffect } from 'react'
import { getDateTime } from './utils'
import { fuseVoltageDropObj } from './voltageDrop'




export const MVToAmps = ({mV, fuseType, mADraw, setMV, setFuseType, setMADraw, setFuseLocation, fuseLocation, setDrawResults }) => {

    const formatMV = (e) => {
        if (e.target.value !== '') {
            const formattedNum = Number(e.target.value)
            setMV(formattedNum) 
        }            
    }
    
    const handleFuseTypeChange = (e) => {
        setFuseType(e.target.value)
    }

    const findAmperage = () => {
        const stringMV = mV.toFixed(1).toString()
        // Check if the property exists before accessing it
        if (fuseVoltageDropObj[stringMV] && fuseVoltageDropObj[stringMV][fuseType]) {
            const draw = fuseVoltageDropObj[stringMV][fuseType]
            setMADraw(draw)
        } else {
            console.log('Error: Property not found in fuseVoltageDropObj')
        }
    }
    

    const handleResult = () => {
        const timestamp = getDateTime()
        setDrawResults(prevResults => [...prevResults, {fuseLocation: fuseLocation, mV: mV, mADraw: mADraw, fuseType: splitLetNum(fuseType), timestamp: timestamp}])
        setFuseLocation('')
    }

    const splitLetNum = (inputString) => {
       const [letters, nums] = inputString.split(/([a-zA-Z]+)([0-9]+)/).slice(1)
       return `${letters} ${nums}`
    }

    useEffect(() => {
        if (mV !== undefined && fuseType !== undefined) {
            findAmperage();
        }
    }) 
    return (
        <div>
        <h2>Voltage Drop: mV to mA</h2>
        <label htmlFor='mVInput'>mV: </label>
        <input 
            id='mVInput'
            type="number" 
            placeholder='mV'
            value={mV}
            onChange={(e) => formatMV(e)}>
        </input><br></br>
        <select 
            name="fuseType" 
            id="fuseType" 
            onChange={(e) => {handleFuseTypeChange(e)}}
        >
            <option value="mini5">mini 5 (biege)</option>
            <option value="mini7point5">mini 7.5 (brown)</option>
            <option value="mini10">mini 10 (red)</option>
            <option value="standard5">standard 5 (biege)</option>
            <option value="standard10">standard 10 (red)</option>
            <option value="standard15">standard 15 (blue)</option>
            <option value="standard20">standard 20 (yellow)</option>
            <option value="standard25">standard 25 (clear)</option>
            <option value="standard30">standard 30 (green)</option>
        </select><br></br>
        <label htmlFor='fuseInput'>Fuse location</label>
        <input 
            id='fuseInput'
            placeholder='Fuse'
            value={fuseLocation}
            onChange={(e) => setFuseLocation((e.target.value.toString()))}
            type="text">
        </input><br></br>
        <button type='button' onClick={handleResult}>Add Result</button>
        <h3>{mADraw} mA draw</h3>
        </div>
    )
} 