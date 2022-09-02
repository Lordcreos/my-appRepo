import React from 'react'


function location() {
  return (
    
    <div className="flex sm:h-screen sm:place-content-center">
    <div className='p-4 my-auto sm:w-3/4 sm:bg-white sm:shadow-2xl sm:rounded-xl'>
    <section className="flex flex-col items-center justify-center sm">
      <div className="flex items-center justify-center w-32 h-32 bg-purple-300 rounded-full bg-opacity-20">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-20 h-20 text-purple-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"></path><circle cx="256" cy="192" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle></svg>
      </div>

        <div className='py-6 m-2 text-lg font-bold text-primary'>
        Where do you want your services?
        </div>
        <div className="text-center in-lineblock">
            <div className='text-sm text-gray-500'>Check the service availability and begin enjoying all the benefits we have to offer!</div>
        </div>


    </section>

    
    <section className='sm:flex py-6 sm:space-x-3'>

    <div className=' w-12/12 sm:w-10/12'>
            <span className='mb-1 text-sm font-semibold text-primary'>Addres</span>
     <div className='flex py-2 border rounded-md relaative border-primary text-primary'>
     <input
        className="w-full px-1 text-sm focus:outline-none"
        placeholder='123 Place St., Orlando FL'
      />
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-6 h-6 text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"></path><circle cx="256" cy="192" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle></svg>
    
     </div>
    </div>
    <div className='flex space-x-3 justify-start'>
    <div className='w-6/12 sm:w-6/12'>
            <span className='mb-1 text-sm font-semibold text-primary'>Apt., Suite</span>
            
      <input
        className="w-full px-1 py-2 text-sm border rounded-md border-primary text-primary focus:outline-none"
        placeholder='123'
      />
      
    </div>
    <div className='w-6/12 sm:w-6/12'>
            <span className='mb-1 text-sm font-semibold text-primary'>Zip Code</span>
            
      <input
        className="w-full px-1 py-2 text-sm border rounded-md border-primary text-primary focus:outline-none"
        placeholder='123'
      />
      
    </div>
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