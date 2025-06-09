import {IoIosClose} from "react-icons/io";
import {useContext} from "react";
import {ModalContext} from "@/app/context/ModalContext";
import { MdOutlineRocketLaunch } from "react-icons/md";

export default function ProjectsListModal(){

    const {modalToggle, setModalToggle} = useContext(ModalContext)

    return (
        <div>
            {/*heading*/}
            <div className="flex justify-between items-center mx-6 my-5">
                <h3 className='text-main font-black text-3xl flex gap-3 items-center'>
                    <MdOutlineRocketLaunch />
                    <div className="">Projects</div>
                </h3>
                <button onClick={() => setModalToggle(!modalToggle)} className='text-xl text-main'>
                    <IoIosClose size={40} className='' />
                </button>
            </div>

            {/*content */}


        </div>

    )
}