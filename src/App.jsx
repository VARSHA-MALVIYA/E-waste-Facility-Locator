import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AuthTemplate from './Pages/AuthTemplate'
import { LoginDets, SignupDets } from './data/data'
import Error from './Pages/Error'
import {useSelector} from 'react-redux'
import Navbar from './Components/Navbar'
import GadgetCard from './Components/GadgetCard'
import Gadgets from './Components/Gadgets'
import HowWeWork from './Components/HowWeWork'
import Map from './Components/Map'
import CenterDetailCard from './Components/CenterDetailCard'
import DeviceNotFoundForm from './Components/DeviceNotFoundForm'
import DeviceNotFound from './Pages/DeviceNotFound'
import Stepper from './Components/Stepper'
import Dispose from './Pages/Dispose'
import DeviceInfoTable from './Components/DeviceInfoTable'

const App = () => {
  return (
    <div className=' bg-slate-200'>
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<HowWeWork/>} />
      
        <Route path='/login' element={<AuthTemplate dets={LoginDets} />} />
        <Route path='/signup' element={<AuthTemplate dets={SignupDets}/>} />
        <Route path='/dispose' element={<Dispose/>} />

        <Route path='/gadget' element={<Gadgets/>} />
        <Route path='/map' element={<Map/>} />
        <Route path='/card' element={<CenterDetailCard/>} />
        <Route path='/not' element={<DeviceNotFound/>} />
        <Route path='/stepper' element={<Stepper/>} />
        <Route path='/info' element={<DeviceInfoTable/>} />

        {/* <Route path='/dashboard' element={</>} /> */}
        
        

        <Route path='/error' element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App