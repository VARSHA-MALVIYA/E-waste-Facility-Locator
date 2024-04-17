import { useSelector } from "react-redux"


const Profile = () => {
    const {user} = useSelector(store => store.Auth)

  return (
    <div className="w-full h-full pt-[15vh]">
        
        <div className="flex justify-end relative w-[80%] h-[50vh] border border-black mx-auto ">

            <div
                class="max-w-[20vw] absolute top-[-7vh] left-[-5vw]  sm:max-w-sm md:max-w-sm lg:max-w-[30vw] xl:max-w-sm sm:mx-auto md:mx-auto lg: xl:mx-auto bg-white shadow-xl rounded-lg text-gray-900">

                <div class="rounded-t-lg h-32 overflow-hidden">
                    <img class="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
                </div>

                <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img class="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
                </div>

                <div class="text-center mt-2">
                    <h2 class="font-semibold">{user.Name}</h2>
                    <p class="text-gray-500">{user.Username}</p>
                </div>

                <div class="p-4 border-t mx-8 mt-2">
                    <p class="w-1/2 text-center select-none block mx-auto rounded-sm bg-gray-200 hover:shadow-lg font-semibold text-black px-6 py-2">{user.Role}</p>
                </div>

            </div>

            <div className="w-[50%] mr-5 border border-black">

            </div>

        </div>
        
    </div>
  )
}

export default Profile