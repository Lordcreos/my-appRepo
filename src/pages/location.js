import React from 'react'

import {  IoLocationOutline } from "react-icons/io5";

function location() {
  return (
    
    <div className="flex sm:h-screen sm:place-content-center">
    <div className='p-4 my-auto sm:w-3/4 sm:bg-white sm:shadow-2xl sm:rounded-xl'>
    <section className="flex flex-col items-center justify-center sm">
      <div className="flex items-center justify-center w-32 h-32 bg-purple-300 rounded-full bg-opacity-20">
        <IoLocationOutline className='w-20 h-20 text-purple-500'  />
      </div>

        <div className='py-6 m-2 text-lg font-bold text-primary'>
        Where do you want your services?
        </div>
        <div className="text-center in-lineblock">
            <div className='text-sm text-[#707070]'>Check the service availability and begin enjoying all the benefits we have to offer!</div>
        </div>


    </section>

    
    <section className='flex py-6 space-x-3'>

    <div className='w-8/12'>
            <span className='mb-1 text-sm font-semibold text-primary'>Addres</span>
     <div className='flex py-2 border rounded-md relaative border-primary text-primary'>
     <input
        className="w-full px-1 text-sm focus:outline-none"
        placeholder='123 Place St., Orlando FL'
      />
      <IoLocationOutline className='w-6 h-6 text-primary'  />
    
     </div>
    </div>
    <div className='w-3/12 sm:w-4/12'>
            <span className='mb-1 text-sm font-semibold text-primary'>Apt., Suite</span>
            
      <input
        className="w-full px-1 py-2 text-sm border rounded-md border-primary text-primary focus:outline-none"
        placeholder='123'
      />
      
    </div>
    </section>

    <footer className="flex flex-col pt-6 my-3 gap-y-4 ">
        <button className='w-full px-3 py-2 text-white rounded-md bg-primary'> Check Service </button>
        <span className='px-3 py-2 mx-auto underline text-primary'> Go Back </span>
    </footer>
    </div>
  </div>
  
  )
}

export default location