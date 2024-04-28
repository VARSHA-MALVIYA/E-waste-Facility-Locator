import {useState} from 'react'
import { signup,login } from '../services/Operations/auth.op'
import Loader from '../Components/Loader'
import Modal from '../Components/Modal'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'

const OperatorAuthPage = () => {
    
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({Email:"", Password:"",Name:"",Username:"",Role:"Operator"})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigator = useNavigate()
    const dispatch = useDispatch();
    
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)
    
    const closeModal = ()=> setShowModal(false)

    function changeHandler(e){
        const {name,value} = e.target ;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    
    function loginHandler(e) {
        e.preventDefault()
        console.log("loginDets -> ",formData)
        dispatch(login(formData,navigator,setLoading,setError))
    }

    function signupHandler(e) {
        e.preventDefault()
        console.log(formData)
        signup(formData,navigator,setLoading,setError,setShowModal)
    }
    
  return (
    <div className='flex overflow-x-hidden relative items-center mt-[13vh] justify-center w-screen h-[87vh] bg-gray-100'>

        {loading && <Loader/>}
        
        <div className='w-6/12 bg-white h-[80%]'>

            <div class="bg-[#0891B2] shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-2 md:p-5">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="#FFF">
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                        </svg>
            </div>

            <div className='flex w-full p-3'>
                <button onClick={()=>{setIsLogin(true); setFormData({ Email:"", Password:"",Name:"",Username:"",Role:"Operator" })}}  className={`w-1/2 p-2 text-center hover:bg-gray-100 hover:cursor-pointer ${isLogin && 'bg-[#0890b21d]'} `} >LOGIN</button>
                <button onClick={()=>{setIsLogin(false); setFormData({ Email:"", Password:"",Name:"",Username:"",Role:"Operator" })}} className={`w-1/2 p-2 text-center hover:bg-gray-100 hover:cursor-pointer ${!isLogin && 'bg-[#0890b21d]'} `}>SIGNUP</button>
            </div>

            <h1 className='text-xl font-bold text-center'>Operator</h1>
                    
            {
                isLogin ? 
                
                <form class="p-12 md:p-10 ">
                
                    <div class="flex items-center text-lg mb-6 md:mb-4">
                        <svg class="absolute ml-3" width="24" viewBox="0 0 24 24">
                            <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
                        </svg>
                        <input type="text" name='Email' class="bg-gray-200 rounded pl-12 py-2 md:py-2 focus:outline-none w-full" placeholder="Username" onChange={changeHandler} />
                    </div>
                    
                    <div class="flex items-center text-lg mb-6 md:mb-4">
                        <svg class="absolute ml-3" viewBox="0 0 24 24" width="24">
                            <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/>
                        </svg>
                        <input type="password" name='Password'  class="bg-gray-200 rounded pl-12 py-2 md:py-2 focus:outline-none w-full" placeholder="Password" onChange={changeHandler} />
                    </div>
                    
                    <button onClick={loginHandler}  class="bg-gradient-to-b from-[#0891B2] to-[#0891B2] font-medium p-2 md:p-2 text-white uppercase w-full rounded">Login</button>
            
                </form>
                
                :
                
                <form class="p-12 md:p-10 ">
                
                    <div class="flex items-center text-lg mb-6 md:mb-4">
                        <svg class="absolute ml-3" width="24" viewBox="0 0 24 24">
                            <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
                        </svg>
                        <input type="email" name='Email'  class="bg-gray-200 rounded pl-12 py-2 md:py-2 focus:outline-none w-full" placeholder="Email" onChange={changeHandler} />
                    </div>
                    
                    <div class="flex items-center text-lg mb-6 md:mb-4">
                        <svg class="absolute ml-3" width="24" viewBox="0 0 24 24">
                            <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
                        </svg>
                        <input type="text" name='Name'  class="bg-gray-200 rounded pl-12 py-2 md:py-2 focus:outline-none w-full" placeholder="Name" onChange={changeHandler} />
                    </div>
                    
                    <div class="flex items-center text-lg mb-6 md:mb-4">
                        <svg class="absolute ml-3" viewBox="0 0 24 24" width="24">
                            <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/>
                        </svg>
                        <input type="password" name='Password'  class="bg-gray-200 rounded pl-12 py-2 md:py-2 focus:outline-none w-full" placeholder="Password" onChange={changeHandler} />
                    </div>
                
                    <button onClick={signupHandler}  class="bg-gradient-to-b from-[#0891B2] to-[#0891B2] font-medium p-2 md:p-2 text-white uppercase w-full rounded">Signup</button>
            
                </form>
            }

            {
                showModal && 
                <Modal isOpen={showModal} closeModal={closeModal}>
                    <p>Success</p>
                </Modal>
            }

        </div>
        
    </div>
  )
}

export default OperatorAuthPage