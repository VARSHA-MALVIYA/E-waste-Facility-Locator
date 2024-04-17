import { useState } from "react";
import { signup } from "../services/Operations/auth.op";
import {useNavigate} from 'react-router-dom'
import Loader from "./Loader";

const SignupForm = () => {
  
  const [formData,setFormData] = useState({ Email:"", Password:"",Name:"",Username:"" });
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigator = useNavigate()
    
  function changeHandler(e){
      const {name,value} = e.target ;
      setFormData({
          ...formData,
          [name]: value
      });
  }

  function submitHandler(){
    signup(formData,navigator,setLoading,setError)
  }
  return (
    <div>
        {loading&&<Loader/>}
        
        <div className="mt-2">
            <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
            <input className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" 
              type="email"
              value={formData.Email}
              name='Email'
              onChange={changeHandler}
             />
        </div>
        
        <div className="mt-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">Password</label>
            <input className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" 
              type="password"
              value={formData.Password}
              name='Password'
              onChange={changeHandler}
             />
        </div>
        
        <div className="mt-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">Username</label>
            <input className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" 
              type="text"
              value={formData.Username}
              name='Username'
              onChange={changeHandler}
             />
        </div>
        
        <div className="mt-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
            <input className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" 
              type="text"
              value={formData.Name}
              name='Name'
              onChange={changeHandler}
             />
        </div>
        
        {
          error && <p>{error}</p>
        }
        
        <div className="mt-8">
            <button 
            onClick={submitHandler}
            className="bg-[#6092ff] text-white font-bold py-2 px-4 w-full rounded hover:bg-[#4042E2]">Signup</button>
        </div>
        
    </div>
  )
}

export default SignupForm