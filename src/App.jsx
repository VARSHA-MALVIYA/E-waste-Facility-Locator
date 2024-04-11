import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AuthTemplate from './Pages/AuthTemplate'
import { LoginDets, SignupDets } from './data/data'
import Error from './Pages/Error'
import {useSelector} from 'react-redux'

const App = () => {
  return (
    <div className=' bg-slate-200'>
      <Routes>
        <Route path='/' element={<div>home</div>} />
      
        <Route path='/login' element={<AuthTemplate dets={LoginDets} />} />
        <Route path='/signup' element={<AuthTemplate dets={SignupDets}/>} />


        <Route path='/error' element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App