import {ModalContext} from '@/app/context/ModalContext'
// import {ThemeContext} from '@/app/context/ThemeContext'
import { IoIosClose } from "react-icons/io";
import { PiHandshakeLight } from "react-icons/pi";
import {useContext, useReducer} from "react";
import {contactFormAction} from "@/app/actions/formActions";

type formDataProps = {
    firstname: string,
    lastname: string,
    email: string,
    company: string,
    title: string,
    message: string
}

const initValue: formDataProps = {
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    title: "",
    message: ""
}

function formReducer(formData: formDataProps, action: any){
    switch(action.type){
        case 'FIRST_NAME':
            return {...formData, firstname: action.payload.target.value}
        case 'LAST_NAME': return {...formData, lastname: action.payload.target.value}
        case 'EMAIL': return {...formData, email: action.payload.target.value}
        case 'COMPANY': return {...formData, company: action.payload.target.value}
        case 'TITLE': return {...formData, title: action.payload.target.value}
        case 'MESSAGE': return {...formData, message: action.payload.target.value}
        case 'RESET_FORM': return initValue
        default: return formData;

    }
}

export default function ContactForm (){

    // const theme = useContext(ThemeContext)
    const {modalToggle, setModalToggle} = useContext(ModalContext)
    const [formData, dispatch] = useReducer(formReducer, initValue)

    function handleFirstnameChange(e: any){
        dispatch({
            type: 'FIRST_NAME',
            payload: e
        })
    }

    function handleLastnameChange(e: any){
        dispatch({
            type: 'LAST_NAME',
            payload: e
        })
    }

    function handleEmailChange(e: any){
        dispatch({
            type: 'EMAIL',
            payload: e
        })
    }

    function handleCompanyChange(e: any){
        dispatch({
            type: 'COMPANY',
            payload: e
        })
    }

    function handleTitleChange(e: any){
        dispatch({
            type: 'TITLE',
            payload: e
        })
    }

    function handleMessageChange(e: any){
        dispatch({
            type: 'MESSAGE',
            payload: e
        })
    }

    function handleResetForm(){
        dispatch({
            type: "RESET_FORM"
        })
    }

    return (
        <>
            {/*heading*/}
            <div className="flex justify-between items-center mx-6 my-5">
                <h3 className='text-main font-black text-3xl flex gap-3 items-center'>
                    <PiHandshakeLight />
                    <div className="lg:hidden">Contact</div>
                    <div className="lg:block hidden">Let's work together</div>
                </h3>
                <button onClick={() => setModalToggle(!modalToggle)} className='text-xl text-main'>
                    <IoIosClose size={40} className='' />
                </button>
            </div>

            {/*contact form */}

            <form action={contactFormAction} onSubmit={handleResetForm} className='w-full flex justify-center flex-col items-center px-6'>
                <div className="inputitem flex flex-col gap-5 w-full py-6">
                    <div className="flex flex-col items-start w-full">
                        <input
                            name='firstname'
                            type="text"
                            placeholder='First Name'
                            value={formData.firstname}
                            onChange={handleFirstnameChange}
                            className='w-full outline-0 h-12 border-b border-main/10 bg-light-primary focus:border-main_hover focus:text-main'/>

                    </div>
                    <div className="flex flex-col items-start w-full">
                        <input
                            name='lastname'
                            type="text"
                            placeholder='Last Name'
                            value={formData.lastname}
                            onChange={handleLastnameChange}
                            className='w-full outline-0 h-12 border-b border-main/10 focus:border-main_hover bg-light-primary focus:text-main'/>
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <input
                            name='email'
                            type="email"
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleEmailChange}
                            className='w-full outline-0 h-12 border-b border-main/10 focus:border-main_hover bg-light-primary focus:text-main'/>
                    </div>
                    <div className="company flex justify-between gap-3">
                        <div className="flex flex-col items-start w-full">
                            <label htmlFor="company" className='font-semibold'>Company</label>
                            <input
                                name='company'
                                type="text"
                                placeholder='ABC Inc.,'
                                value={formData.company}
                                onChange={handleCompanyChange}
                                className='w-full outline-0 h-12 border-b border-main/10 focus:border-main_hover bg-light-primary focus:text-main'/>
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <label htmlFor="title" className='font-semibold'>Title</label>
                            <input
                                name='title'
                                type="text"
                                placeholder='Founder, CTO, Director etc.,'
                                value={formData.title}
                                onChange={handleTitleChange}
                                className='w-full outline-0 h-12 border-b border-main/10 focus:border-main_hover bg-light-primary focus:text-main'/>
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <textarea
                            name='message'
                            placeholder='Send me a message!'
                            value={formData.message}
                            onChange={handleMessageChange}
                            className='w-full outline-0 border-b h-28 py-3 px-1 border-main/10 focus:border-main_hover bg-light-primary focus:text-main'/>
                    </div>
                </div>
                <button className='bg-main hover:bg-main_hover duration-500 py-3 px-10 my-5 font-semibold text-light-primary rounded-md'>Send</button>
            </form>
        </>
    )
}