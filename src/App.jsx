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
import DashboardTemplate from './Pages/DashboardTemplate'
import Profile from './Pages/Profile'
import AppointmentTable from './Pages/AppointmentTable'
import Appointments from './Pages/Appointments'
import ProcessAppointment from './Pages/ProcessAppointment'
import Ewaste_Add from './Pages/Ewaste_Add'
import AddEducationalPopup from './Pages/AddEducationalPopup'
import Requests from './Pages/Requests'

const App = () => {
  return (
    
    <div className=' bg-slate-200'>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<HowWeWork/>} />
        <Route path='/login' element={<AuthTemplate dets={LoginDets} />} />
        <Route path='/signup' element={<AuthTemplate dets={SignupDets}/>} />
        <Route path='/dispose' element={<Dispose/>} />
        
        <Route path='/dashboard' element={<DashboardTemplate/>} >
          <Route path='/dashboard/' element={<Profile/>} />
          <Route path='/dashboard/appointments' element={<Appointments/>} />
        </Route>

        
        <Route path='/editorDashboard' element={<DashboardTemplate/>} >
          <Route path='/editorDashboard/' element={<Profile/>} />
          <Route path='/editorDashboard/process_appointment' element={<ProcessAppointment/>} />
          <Route path='/editorDashboard/ewaste_add' element={<Ewaste_Add/>} />
          <Route path='/editorDashboard/educationalPopup_add' element={<AddEducationalPopup/>} />
        </Route>
        
        <Route path='/adminDashboard' element={<DashboardTemplate/>} >
          <Route path='/adminDashboard/' element={<Profile/>} />
          <Route path='/adminDashboard/requests' element={<Requests/>} />
        </Route>
        


        <Route path='/gadget' element={<Gadgets/>} />
        <Route path='/not' element={<DeviceNotFound/>} />
          
          
        <Route path='/error' element={<Error/>} />
        <Route path='/accessError' element={<Error/>} />
      </Routes>
    </div>
    
  )
}

export default App