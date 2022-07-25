import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { FaWifi } from "react-icons/fa";


function Header() {
  return (
    <div className="text-primary text-2xl font-bold align-middle bg-white flex  place-content-between h-16 p-4"> 
            <div className=' align-middle flex  my-auto '><IoIosArrowBack className='m-auto mr-4'/> Internet </div>
              
                <div className=' align-middle flex  my-auto h-9 w-9 place-content-center relative bg-primary rounded-full '> 
              <FaWifi className='text-white align-middle my-auto '/>
              <div className='text-alternative rounded-full   text-[48px] absolute bottom-0 right-0 -mb-3.5 '> .</div>
              </div>
            </div>
  )
}

export default Header