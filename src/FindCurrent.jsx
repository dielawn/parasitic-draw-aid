import { useEffect } from 'react'
import { getDateTime } from './utils'
import { fuseVoltageDropObj } from './voltageDrop'

const timestamp = getDateTime()


export const MVToAmps = ({mV, fuseType, mADraw, setMV, setFuseType, setMADraw, setFuseLocation, fuseLocation, setDrawResults }) => {

    const formatMV = (e) => {
        const formattedNum = Number(e.target.value)
        setMV(formattedNum)     
    }
    
    const handleFuseTypeChange = (e) => {
        setFuseType(e.target.value)
    }

    const findAmperage = () => {
        const stringMV = mV.toFixed(1).toString()
        const draw = fuseVoltageDropObj[stringMV][fuseType]
        setMADraw(draw)
    }

    const handleResult = () => {
        setDrawResults(prevResults => [...prevResults, {fuseLocation: fuseLocation, mV: mV, mADraw: mADraw, timestamp}])
        setFuseLocation('')
    }

    useEffect(() => {
        findAmperage()
    , [mV, fuseType]})
  
    return (
        <>
        <h3>Current matrix</h3>
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
        <button type='button' onClick={handleResult}>Log Result</button>
        <p>Fuse# {fuseLocation}<br></br>mV: {mV}<br></br>{mADraw} mA <br></br>{timestamp}</p>
        </>
    )
} 