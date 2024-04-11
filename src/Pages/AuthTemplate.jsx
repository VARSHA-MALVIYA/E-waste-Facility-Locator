import { Form, Link } from "react-router-dom";


const AuthTemplate = ({dets}) => {
    const {title,associatedUrl,img,Form,type}  = dets ;
  return (
    <div className="w-screen h-screen py-3 ">

        <div className="flex w-11/12 h-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg ">

            <div className="hidden h-full bg-cover lg:block lg:w-1/2" style={{backgroundImage:`url(${img || ""})`}}>
            </div>

            <div className="w-full h-full p-8 lg:w-1/2">

                <h2 className="text-2xl font-semibold text-center text-gray-700">E-Waste Facility Locator</h2>
                <p className="text-xl text-center text-gray-600">{title || ""}</p>

                
                
                {
                    type=="login" &&
                    <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b lg:w-1/4"></span>
                    <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
                    <span className="w-1/5 border-b lg:w-1/4"></span>
                    </div>
                }

                {
                    <Form/> || ""
                }

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b md:w-1/4"></span>
                    <Link to={associatedUrl || ''}  className="text-xs text-gray-500 uppercase">
                        {type=="login" ? 'or sign up' : 'or login'}
                    </Link>
                    <span className="w-1/5 border-b md:w-1/4"></span>
                </div>

            </div>

        </div>

    </div>
  )
}

export default AuthTemplate