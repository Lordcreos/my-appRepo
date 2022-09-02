import React, { useState } from 'react'
import { FaWifi } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineRouter } from "react-icons/md";
import Sidebar from './sidebar';

function ShoppingCart() {
  const [showSidebar, setShowSidebar] = useState(false);  const [showOffers, setShowOffers] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showInternet, setShowInternet] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showTV, setShowTV] = useState(false);

  return (
    <>
          
      <Sidebar />


   
    <div className="flex py-10 sm:h-screen sm:place-content-center">
    <div className='p-4 my-auto space-y-4 divide-y sm:w-3/4 sm:bg-white sm:shadow-2xl sm:rounded-xl divide-slate-200'>
      
   
      
      
      <section>
    <div className='flex place-content-between'>
        <div className='flex space-x-2'>
            <div className='relative flex justify-center border-[3px] rounded-full border-alternative h-9 w-9 place-content-center bg-primary'>
                <FaWifi className='justify-center w-5 h-5 my-auto text-white' />
            </div>
            <div className='relative flex justify-center rounded-full h-9 w-9 place-content-center bg-primary'>
            <BsTelephone className='justify-center w-5 h-5 my-auto text-white' />
            </div>
            <div className='relative flex justify-center rounded-full h-9 w-9 place-content-center bg-primary'>
            <CgScreen className='justify-center w-5 h-5 my-auto text-white' />
            </div>
    </div>

    <div className='content-center px-4 py-2 font-semibold rounded-full bg-alternative text-primary'  onClick={()=>{setShowOffers(!showOffers)}}> Offers</div>

   </div>
          
   </section>
   
   




       <section className='flex py-4 place-content-between '>
          <div className='text-xl font-bold text-primary' >
            Internet
          </div>
          <hr />
          <div className='flex my-auto text-primary ' >
             <TbArrowsSort className='content-center justify-center'/> Hight to Low
          </div>
        </section>

        { showOffers &&
          <section className='flex justify-center pt-3 space-x-4'>
        <div className='content-center px-4 py-2 font-semibold rounded-full bg-[#bdf6f3] text-primary'onClick={()=>{setShowAll(!showAll)}} > {showAll &&<span>✓</span>} All</div>
        <div className='content-center px-4 py-2 font-semibold rounded-full bg-[#bdf6f3] text-primary' onClick={()=>{setShowInternet(!showInternet)}}>  {showInternet &&<span>✓</span>}Internet</div>
        <div className='content-center px-4 py-2 font-semibold rounded-full bg-[#bdf6f3] text-primary' onClick={()=>{setShowPhone(!showPhone)}}>  {showPhone &&<span>✓</span>} Phone</div>
        <div className='content-center px-4 py-2 font-semibold rounded-full bg-[#bdf6f3] text-primary' onClick={()=>{setShowTV(!showTV)}}>{showTV &&<span>✓</span>} Tv</div>
        </section>}


     <section className='space-y-4 sm:flex sm:space-x-4 sm:py-4'>
     <section className='  p-2 bg-gradient-to-r  from-[#333366] to-[#00E5D9] rounded-lg shadow-lg text-white text-center font-semibold text-lg sm:w-2/4'>
        Pemium
        <div className='p-2 my-2 bg-white rounded-md shadow-xl '>
          <div className='flex flex-col sm:space-y-6'>
           <span className='p-1 text-gray-400 text-tiny text-start'>Get $20 off for the next 3 months with the purchase of our Premium Plan 2GB/s.</span> 
          <div className='flex'>
          <h1  class=" text-start font-bold text-transparent text-[40px] bg-clip-text bg-gradient-to-r from-[#333366] to-[#00E5D9]">
           $79,99
            </h1>
            <div className='p-1 text-gray-400 text-[16px] pt-6'>$99.99 per month + tax</div>
          </div>
           <button className='w-full py-2 text-white rounded-md text-tiny bg-primary'> + Add to Cart </button>
          </div>
        </div>

      </section>

      <section className='p-2 text-lg font-semibold text-center bg-white rounded-lg shadow-lg text-primary sm:w-2/4'>
        Basic
        <hr ></hr>
        <div className='p-2 my-2 bg-white rounded-md '>
          <div className='flex flex-col'>
           <span className='p-1 text-gray-400 text-tiny text-start'>40mb/s.  Lorem ipsum sit amet, consectetur adipiscing elit ut aliqua, et purus amet.</span> 
            <div className='flex justify-between'>
              <div className=''>
              <div className='flex'>
          <h1  class=" text-start font-bold text-transparent text-[30px] bg-clip-text bg-gradient-to-r from-[#333366] to-[#00E5D9]">
           $59,99
            </h1>
            <div className='p-1 pt-5 text-gray-400 text-tiny'> per month + tax</div>
          </div>
          <div className='p-1 my-auto underline text-primary text-tiny text-start' >
          More information
          </div>
              </div>
              
              <MdOutlineRouter className='w-20 h-20' />
            </div>
           <button className='w-full py-2 mt-3 text-white rounded-md text-tiny bg-primary'> + Add to Cart </button>
          </div>
        </div>

      </section>

     </section>

      
     <section className='flex py-4 place-content-between '>
          <div className='text-xl font-bold text-primary' >
          Additional Services
          </div>
          <hr />
          
        </section>

          <section className='space-y-4 sm:flex sm:space-x-4 sm:py-4'>

            <section className='p-2 text-lg font-semibold text-center bg-white rounded-lg shadow-lg text-primary sm:w-2/4'>
              Wifi 6 Extender
              <hr ></hr>
              <div className='p-2 my-2 bg-white rounded-md '>
                <div className='flex flex-col'>
                  <span className='p-1 text-gray-400 text-tiny text-start'>40mb/s.  Lorem ipsum sit amet, consectetur adipiscing elit ut aliqua, et purus amet.</span>
                  <div className='flex justify-between'>
                    <div className=''>
                      <div className='flex'>
                        <h1 class=" text-start font-bold text-transparent text-[30px] bg-clip-text bg-gradient-to-r from-[#333366] to-[#00E5D9]">
                          $9,99
                        </h1>
                        <div className='p-1 pt-5 text-gray-400 text-tiny'> per month + tax</div>
                      </div>
                      <div className='p-1 my-auto underline text-primary text-tiny text-start' >
                        More information
                      </div>
                    </div>

                    <MdOutlineRouter className='w-20 h-20' />
                  </div>
                  <button className='w-full py-2 mt-3 border-2 rounded-md text-primary text-tiny border-primary'> + Add to Cart </button>
                </div>
              </div>

            </section>

          </section>



          <footer className="flex flex-col pt-6 my-3 gap-y-4 ">
            <button className='w-full px-3 py-2 text-white rounded-md bg-primary'> Check Service </button>
            <span className='px-3 py-2 mx-auto underline text-primary'> Go Back </span>
          </footer>


        </div>
      </div>

  
  </>
  )
}

export default ShoppingCart