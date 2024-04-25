import profileIcon from '../assets/profileIcon.png'
import { NavLink,Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from "react-redux";
import { navs } from '../data/data';

const Navbar = () => {
    
    const {token,user} = useSelector(store => store.Auth)
    const navigator = useNavigate()
    const location = useLocation();
    const {pathname} = location
    
    const redirectHandler = ()=>{
        if(user.Role == "Normal") navigator("/dashboard")
        
        else if(user.Role == "Operator") navigator("/editorDashboard")
        
        else navigator("/adminDashboard")
    }

    if(!(navs.includes(pathname))) 
    {
        // admin && operator nav
        return (
            <nav class="bg-white border-b border-gray-200 fixed top-0 left-0 z-30 w-full">
                
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-start">
                        <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                            <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            </svg>
                            <svg id="toggleSidebarMobileClose" class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <a href="#" class="text-xl font-bold flex items-center lg:ml-2.5">
                            <img src="https://demo.themesberg.com/windster/images/logo.svg" class="h-6 mr-2" alt="Windster Logo" />
                            <span class="self-center whitespace-nowrap">E-Waste Project</span>
                        </a>
                        
                        </div>
                        <div class="flex items-center">
                        <button id="toggleSidebarMobileSearch" type="button" class="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg">
                            <span class="sr-only">Search</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <div class="hidden lg:flex items-center">
                            <span class="text-base font-normal text-gray-500 mr-5">❤️</span>
                            
                        </div>
                        <a href="#" class="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                            Visit Website
                        </a>
                        </div>
                    </div>
                </div>
                
            </nav>
        )
    }
    else{
        // user nav
        return (
            <nav class="bg-transparent fixed top-0 left-0 w-full border-gray-200 bg-white z-[999] ">

                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://ewasteproject.com/wp-content/uploads/ewp-logo-white-dashed.png" class="h-8 filter invert " alt="Flowbite Logo" />
                    </Link>

                    <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                        {
                            token ? 
                            
                            // profile logo
                            <button onClick={redirectHandler}  class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <img class="w-8 h-8 rounded-full" src={profileIcon} alt="user photo"/>
                            </button>
                            
                            :
                            
                            // login/signup button
                            <div className='flex gap-3'>
                                <Link to={'/signup'}  class="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
                                    Signup
                                </Link>
                                <Link to={'/login'}  class="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                                    Login
                                    <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </div>
                        }
                        
                    </div>

                    {/* nav items {centered} */}
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                        <li>
                            <NavLink to="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dispose" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dispose</NavLink>
                        </li>
                        <li>
                            <NavLink to="/store" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Store</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
                        </li>
                        </ul>
                    </div>

                </div>

            </nav>
        )
    }
    
    
}

export default Navbar