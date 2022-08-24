import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";

function EmailVerification() {
  return (
    <div className="flex h-screen place-content-center">
    <div className='p-4 my-auto sm:w-3/4 sm:bg-white sm:shadow-2xl sm:rounded-xl'>
        <section className="flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center ">
        <IoMailUnreadOutline className=" text-primary text-6xl"/>
        </div> 
        <div className="px-6 text-center">
          <section className="py-6">
            <div className="text-primary font-bold text-xl" > Please verify your Email Address</div>
          </section>
          <section className="text-center in-lineblock">
          <div className='flex justify-center'>
            <div className=" text-tiny  text-gray-500 " > We sent an email to </div> <span className='text-tiny text-primary font-semibold pl-2'> j******e@gmail.com.</span>
          </div>
          <div className="text-gray-500 text-tiny" > Please confirm “Verify Email” to continue this process.</div>
          </section>
        </div>
      </section>

      <footer className="flex flex-col px-3 my-6 pt-4 ">
        <div className='flex justify-center'>
            <div className=" text-tiny  text-gray-500 " >Did you not receive it?  </div> <span className='text-tiny text-primary underline pl-2'> Resend Email</span>
        </div>
        <div className='flex justify-center'>
            <div className=" text-tiny  text-gray-500 " >Is this not the correct address? </div> <span className='text-tiny text-primary underline pl-2'> Update my Email </span>
        </div>
      </footer>

         </div>
         </div>
          
  )
}

export default EmailVerification