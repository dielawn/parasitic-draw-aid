import { useState } from 'react'
import { BatteryTest } from './BatteryTest'
import { getDateTime } from './utils'
import { CalcCurrent } from './CalcCurrent'
import { Timer } from './Timmer'
import './App.css'

function App() {
 


  return (
    <div>
   <form action="none">
   <BatteryTest />
   <Timer />
   <CalcCurrent />

   </form>
     
    

    </div>
  )
}

export default App
