import { useState } from "react";

const SignupForm = () => {
  
  const [formData,setFormData] = useState({ email:"", password:"" });
    
  function changeHandler(e){
      const {name,value} = e.target ;
      setFormData({
          ...formData,
          [name]: value
      });
  }

  function submitHandler(){
    console.log(formData)
      
  }
  return (
    <div>
        <div className="mt-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
            <input className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" 
              type="email"
              value={formData.email}
              name='email'
              onChange={changeHandler}
             />
        </div>
        <div className="mt-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">Password</label>
            <input className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" 
              type="password"
              value={formData.password}
              name='password'
              onChange={changeHandler}
             />
        </div>
        <div className="mt-8">
            <button 
            onClick={submitHandler}
            className="bg-[#6092ff] text-white font-bold py-2 px-4 w-full rounded hover:bg-[#4042E2]">Signup</button>
        </div>
    </div>
  )
}

export default SignupForm