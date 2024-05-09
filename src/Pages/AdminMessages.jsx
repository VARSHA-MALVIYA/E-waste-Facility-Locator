import { useEffect, useRef, useState } from "react"
import { getAllMessages } from "../services/Operations/admin.op"
import { formatDate } from "../data/utils"
import Modal from "../Components/Modal"


const AdminMessages = () => {

    const [allMessages, setAllMessages] = useState([])
    const [loading, setLoading] = useState(false)
    const [showModal,setShowModal] = useState(false)
    
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        message:""
    })


    const tableRow = useRef(null)


    function showMoreHandler(msg) {
        setFormData({
            firstName:msg.firstName,
            lastName:msg.lastName,
            message:msg.message,
            email:msg.email
        })
        setShowModal(true)
    }

    const closeModal = ()=>setShowModal(false)

    

    useEffect(() => {
        getAllMessages(setAllMessages, setLoading)
    }, [])

    return (
        <div>

            <table class="w-full text-sm text-left rtl:text-right text-gray-500">

                <thead class="text-xs  uppercase text-white bg-gray-900 ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Message
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allMessages?.map((msg, i) => (
                            <tr key={i} class="bg-white border-b  hover:bg-gray-100 " ref={tableRow} >
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {msg?.firstName + msg?.lastName}
                                </th>
                                <td class="px-6 py-4">
                                    {msg?.email}
                                </td>
                                <td class="px-6 py-4">
                                    {formatDate(msg?.createdAt)}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <button onClick={()=>showMoreHandler(msg)} class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">See Message</button>
                                </td>
                                
                            </tr>
                        ))
                    }
                </tbody>

            </table>


            {
                showModal &&
                <Modal isOpen={showModal} onClose={closeModal} >
                    <form className="md:col-span-8 px-10">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-first-name">
                                    First Name
                                </label>
                                <input
                                    name='firstName'  value={formData.firstName}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name" type="text" placeholder="Jane" required={true} />

                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-last-name">
                                    Last Name
                                </label>
                                <input
                                    name='lastName'  value={formData.lastName}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-last-name" type="text" placeholder="Doe" required={true} />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password">
                                    Email Address
                                </label>
                                <input
                                    name='email'  value={formData.email}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-email" type="email" placeholder="example@email.com" required={true} />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password">
                                    Your Message
                                </label>
                                <textarea rows="10" placeholder='Write Your Message Here' required={true}
                                    name='message' value={formData.message}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                            </div>
                            

                        </div>

                    </form>
                </Modal>
            }

        </div>
    )
}

export default AdminMessages