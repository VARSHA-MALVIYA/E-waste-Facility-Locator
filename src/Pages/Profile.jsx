import { useSelector } from "react-redux"
import userImg from '../assets/user.png'

const Profile = () => {
    const {user} = useSelector(store => store.Auth)
    console.log(user);
  return (
    <div className="w-full h-full ">
        
        {/* <div className="flex justify-end relative w-[80%] h-[50vh] border border-black mx-auto ">

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

        </div> */}

        <section class=" w-full  ">
            
            <div class="lg:w-full md:w-[90%] xs:w-[96%] flex gap-4 p-5">
                
                <div
                    class="lg:w-full md:w-[80%] sm:w-[88%] xs:w-full shadow-2xl p-4 rounded-xl h-fit self-center ">
                
                    <div class="">
                        
                        <form>
                            
                            <div
                                class="w-full px-5 flex justify-between rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')]  bg-cover bg-center bg-no-repeat items-center">
                                    
                                {/* <div className="h-[141px] bg-white w-[25vw] object-cover  ">
                                    
                                </div> */}

                                <div className="w-[30vw] flex flex-col justify-center items-center h-[141px] bg-white border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                                    <p className="text-2xl font-bold text-green-700"> Green Points </p>
                                    <p className="text-xl font-bold"> {user?.GreenPoints} </p>
                                </div>
        
                                <img src={userImg} alt="userImg"
                                    className="h-[141px] w-[141px] object-cover rounded-full "
                                />
                                    
                            </div>
                            
                            <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                
                                <div class="w-full  mb-4 mt-6">
                                    <label for="" class="mb-2 ">First Name</label>
                                    <input type="text"
                                            class="mt-2 p-4 w-full border-2 rounded-lg "
                                            value={user?.Name}
                                            disabled
                                            placeholder="First Name" />
                                </div>
                                <div class="w-full  mb-4 lg:mt-6">
                                    <label for="" class=" ">Username</label>
                                    <input type="text"
                                            class="mt-2 p-4 w-full border-2 rounded-lg "
                                            value={user?.Username || "NA"}
                                            disabled
                                            placeholder="User Name" />
                                </div>
                            </div>

                            <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                <div class="w-full">
                                    <label for="" class=" ">Email</label>
                                    <input type="text"
                                            class="mt-2 p-4 w-full border-2 rounded-lg "
                                            value={user?.Email}
                                            disabled
                                            placeholder="Email" />
                                </div>
                                <div class="w-full">
                                    <h3 class=" mb-2">Role</h3>
                                    <input type="text" disabled value={user?.Role}
                                            class="text-grey p-4 w-full border-2 rounded-lg " />
                                </div>
                            </div>
                            
                        </form>
                        
                    </div>
                </div>
                
            </div>
            
        </section>
        
    </div>
  )
}

export default Profile