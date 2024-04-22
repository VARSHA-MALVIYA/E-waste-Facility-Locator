import { useSelector } from "react-redux"


const Profile = () => {
    const {user} = useSelector(store => store.Auth)

  return (
    <div className="w-full h-full pt-[15vh]">
        
        <div className="flex justify-end relative w-[80%] h-[50vh] border border-black mx-auto ">

            <div
                class="max-w-[20vw] absolute top-[-3vh] left-[-5vw]  sm:max-w-sm md:max-w-sm lg:max-w-[30vw] xl:max-w-sm sm:mx-auto md:mx-auto lg: xl:mx-auto bg-white border border-gray-600 rounded-lg text-gray-900">

                <div class="rounded-t-lg h-28 overflow-hidden">
                    <img class="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
                </div>

                <div class="mx-auto w-24 h-24 relative flex justify-center items-center -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img class="object-cover object-center h-32" src='https://readymadeui.com/profile.webp' className="object-contain" alt='Woman looking front' />
                </div>

                <div class="text-center mt-2">
                    <h2 class="font-semibold">{user.Name}</h2>
                    <p class="text-gray-500">{user.Username}</p>
                </div>

                <div class="p-4 border-t mx-8 mt-2 flex justify-center">
                    {
                        user.Role === "Normal" && <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-4 py-2 rounded-full ">User</span> ||
                        user.Role === "Operator" && <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-4 py-2 rounded-full ">Operator</span> ||
                        user.Role === "Admin" && <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-4 py-2 rounded-full ">Admin</span>
                    }
                    
                </div>

            </div>

            <div className="w-[50%] mr-5 border border-black">

            </div>

        </div>
        
    </div>
  )
}

export default Profile