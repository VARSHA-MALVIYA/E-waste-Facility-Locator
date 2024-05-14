import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthTemplate from './Pages/AuthTemplate'
import { LoginDets, SignupDets } from './data/data'
import Error from './Pages/Error'
import { useSelector } from 'react-redux'
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
import FinalizeAppointment from './Pages/FinalizeAppointment'
import Home from './Pages/Home'
import ContactUsPage from './Pages/ContactUs'
import Store from './Pages/Store'
import Test from './Pages/Test'
import MyOrders from './Pages/MyOrders'
import AccessError from './Pages/AccessError'
import Operator from './Authorization/Operator.authorization'
import Admin from './Authorization/Admin.authorization'
import AboutUs from './Pages/AboutUs'
import Layout from './Components/Layout'
import EducationalPopup from './Pages/EducationalPopup'
import E_Waste from './Pages/E_Waste'
import AdminAuthPage from './Pages/AdminAuthPage'
import OperatorAuthPage from './Pages/OperatorAuthPage'
import IsLoggedIn from './Authorization/LoggedIn.authorization'
import OperatorNotApproved from './Pages/OperatorNotApproved'
import OperatorRequestAdmin from './Pages/OperatorRequestAdmin'
import AdminMessages from './Pages/AdminMessages'
import User from './Authorization/User.authorization'
import popImg from './assets/email-received-icon.png'
import { getAllEducationalPopup } from './services/Operations/educationalPopup.op'

const App = () => {

  const [popOpen, setPopOpen] = useState(false)
  const [loading,setLoading] = useState(false);
  const [allEducationalPopup, setAllEducationalPopup] = useState([])
  const [currentPopupIndex, setCurrentPopupIndex] = useState(0);

  useEffect(()=>{
    getAllEducationalPopup(setAllEducationalPopup,setLoading);

    const interval = setInterval(() => {
      setCurrentPopupIndex(prevIndex =>
        prevIndex === allEducationalPopup.length - 1 ? 0 : prevIndex + 1
      )
    }, 30000); 

  },[])


  return (

    <div className=' relative w-screen bg-slate-200'>

      <Layout>

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/login' element={<AuthTemplate dets={LoginDets} />} />
          <Route path='/signup' element={<AuthTemplate dets={SignupDets} />} />
          <Route path='/admin' element={<AdminAuthPage />} />
          <Route path='/operator' element={<OperatorAuthPage />} />
          <Route path='/about' element={<AboutUs />} />



          <Route path='/dispose' element={
            <User>
              <Dispose />
            </User>
          } />

          <Route path='/contact' element={
            <User>
              <ContactUsPage />
            </User>
          } />

          <Route path='/store' element={
            <User>
              <Store />
            </User>
          } />

          <Route path='/dashboard' element={<User> <DashboardTemplate /> </User>} >
            <Route path='/dashboard/' element={<Profile />} />
            <Route path='/dashboard/appointments' element={<Appointments />} />
            <Route path='/dashboard/my_orders' element={<MyOrders />} />
          </Route>


          <Route path='/editorDashboard' element={<Operator> <DashboardTemplate /> </Operator>} >
            <Route path='/editorDashboard/' element={<Profile />} />
            <Route path='/editorDashboard/process_appointment' element={<ProcessAppointment />} />
            <Route path='/editorDashboard/ewaste_add' element={<Ewaste_Add />} />
            <Route path='/editorDashboard/ewaste' element={<E_Waste />} />
            <Route path='/editorDashboard/educationalPopup_add' element={<AddEducationalPopup />} />
            <Route path='/editorDashboard/educationalPopup' element={<EducationalPopup />} />
            <Route path='/editorDashboard/not_approved' element={<OperatorNotApproved />} />
            <Route path='/editorDashboard/requestAdmin' element={<OperatorRequestAdmin />} />
          </Route>

          <Route path='/adminDashboard' element={<Admin> <DashboardTemplate /> </Admin>} >
            <Route path='/adminDashboard/' element={<Profile />} />
            <Route path='/adminDashboard/requests' element={<Requests />} />
            <Route path='/adminDashboard/process_appointment' element={<ProcessAppointment />} />
            <Route path='/adminDashboard/ewaste_add' element={<Ewaste_Add />} />
            <Route path='/adminDashboard/ewaste' element={<E_Waste />} />
            <Route path='/adminDashboard/educationalPopup_add' element={<AddEducationalPopup />} />
            <Route path='/adminDashboard/educationalPopup' element={<EducationalPopup />} />
            <Route path='/adminDashboard/messages' element={<AdminMessages />} />
          </Route>


          <Route path='/error' element={<Error />} />
          <Route path='/accessError' element={<AccessError />} />
          <Route path='*' element={<Error />} />

          <Route path='/test' element={<Test />} />

        </Routes>

      </Layout>

      <div class= {` ${ popOpen ? 'block' : 'hidden' } border-0 transition-all delay-200 bg-white h-[25vh] w-[23vw] fixed bottom-[15vh] right-3 border-t-4 border-green-500 rounded z-[999] shadow-md text-sm`} >
        <div class="bg-white p-3 border border-t-0 rounded-t-none rounded-b flex flex-col space-y-2">
          <h4 className='text-lg font-semibold '>{allEducationalPopup[currentPopupIndex]?.title}</h4>
          <p> {allEducationalPopup[currentPopupIndex]?.description} </p>
        </div>
      </div>

      <div onClick={()=>setPopOpen(prev => !prev)}  class="bg-green-600 fixed z-[999] right-0 bottom-0 rounded-full w-16 h-16 m-4 flex items-center justify-center cursor-pointer shadow-xl">
        
        {
          popOpen ? 
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          :
          <img src={popImg} className='h-8 w-8 invert' alt="" />
        }

      </div>

    </div>

  )
}

export default App