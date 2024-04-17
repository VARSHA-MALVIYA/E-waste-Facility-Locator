import { Link } from "react-router-dom"


const AccessError = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: "url('https://source.unsplash.com/random/1920x1080?nature')"}}>

        <div class="max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
            <div class="text-5xl font-bold text-indigo-600 mb-4">ERROR</div>
            <h1 class="text-3xl font-bold text-gray-800 mb-6">You are not allowed here.</h1>
            <p class="text-lg text-gray-600 mb-8">You are not authorized for this operation. In case of any problem, connect to Admin</p>
            <Link to={'/'}
               class="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300"  >
                Go Back Home
            </Link>
        </div>

    </div>
  )
}

export default AccessError