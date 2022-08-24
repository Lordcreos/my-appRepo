import React from 'react'
import { BsTelephone} from "react-icons/bs";

function PhoneVerification() {
  return (
    <div className="flex h-screen place-content-center">
    <div className='p-4 my-auto sm:w-3/4 sm:bg-white sm:shadow-2xl sm:rounded-xl'>
        <section className="flex flex-col items-center justify-center pt-10">
        <div className="flex items-center justify-center ">
        < BsTelephone className=" text-primary text-6xl"/>
        </div> 
        <div className="px-6 text-center">
          <section className="py-6">
            <div className="text-primary font-bold text-xl" > Please verify your phone number</div>
          </section>
          <section className="text-center in-lineblock">
          <div className='flex justify-center'>
            <div className=" text-tiny  text-gray-500 " > We have sent you a message to  </div> <span className='text-tiny text-primary font-semibold pl-2'> (+1)954******7.</span>
          </div>
          <div className="text-gray-500 text-tiny" >Please confirm you have recieved the message </div>
          </section>
        </div>
      </section>

      <footer className="flex flex-col px-3 my-6 pt-4 ">
        <div className='flex justify-center'>
            <div className=" text-tiny  text-gray-500 " >Did you not receive it?  </div> <span className='text-tiny text-primary underline pl-2'> Resend Message</span>
        </div>
        <div className='flex justify-center'>
            <div className=" text-tiny  text-gray-500 " >Is this not the correct phone?</div> <span className='text-tiny text-primary underline pl-2'> Update my Phone </span>
        </div>
      </footer>

         </div>
         </div>
          
  )
}

export default PhoneVerification