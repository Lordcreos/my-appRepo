import React from 'react'
import {BsCheckLg } from "react-icons/bs";


function EmailConfirmation() {
  return (
<div className="flex h-screen place-content-center">
    <div className='py-10 my-auto sm:w-3/5  px-10 sm:bg-white sm:shadow-2xl sm:rounded-xl'>

    <section className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-32 h-32 rounded-full bg-[#E2DCFA] bg-opacity-20">
        <BsCheckLg  className="text-6xl text-[#6C6AFE]"/>
        </div>
        <div className="px-6 text-center">
          <section className="py-6">
          <div className="text-primary text-xl font-bold" > Email verified successfully</div>
          </section>
          <section className="text-center in-lineblock">
          <div className="text-gray-500 text-tiny" > Thanks to confirm your Email address. You can continue to phone number verification.</div>
          </section>
        </div>
      </section>
      <footer className="flex flex-col pt-6 my-3 px-1 mx-3 gap-y-4 ">
            <button className='w-full px-3 py-2 text-white rounded-sm bg-primary'> Continue </button>  
        </footer>

         </div>
         </div>
  )
}

export default EmailConfirmation



{/*  */}