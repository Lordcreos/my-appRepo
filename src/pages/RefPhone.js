import { GoPrimitiveDot } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { BiHash} from "react-icons/bi";
import { CgScreen } from "react-icons/cg";
import { useState } from 'react';


const statusStyle =[
  {status: 'Active',
    color : 'text-activeText',
    bg: 'bg-active' },
  {status: 'Pending',
      color : 'text-orange-500', 
      bg: 'bg-orange-100'},
  {status: 'Suspended',
        color : 'text-red-500', 
        bg: 'bg-red-100'},
       
]

function RefPhone() {
  const [stateNum, setStateNum] = useState(0);

  return (
    <div className="App bg-slate-100" >
    <>
    <div className="flex h-16 p-4 text-2xl font-bold align-middle bg-white text-primary place-content-between">
        <div className='flex my-auto align-middle '><IoIosArrowBack className='m-auto mr-4' onClick={() => { console.log('hola') }} /> Phone </div>
        <div className='relative flex my-auto align-middle rounded-full h-9 w-9 place-content-center bg-primary'>
          <CgScreen className='my-auto text-white align-middle ' />
          <div className='text-alternative rounded-full   text-[48px] absolute bottom-0 right-0 -mb-3.5 '> .</div>
        </div>
      </div>
    
    <div className=' sm:flex   sm:justify-start sm:flex-col  sm:p-16   p-4 space-y-6 justify-center'>

        <section>
            <section className=' bg-primary rounded-t-lg  sm:flex sm:space-x-4  p-5 place-content-between sm:h-[170px] '>
            
            <div className='rounded-md  w-full '>
                <div className='sm:flex p-5 place-content-between h-full space-y-6 sm:space-y-0'>
                    <div className=" sm:flex sm:flex-col sm:justify-between ">
                    <div className='text-2xl font-bold text-white '  > Digital Phone Plus (Europe)</div>
                    <div className='text-base text-alternative underline'> More Information</div>
                    </div>
                    <div className="sm:flex sm:flex-col justify-between">
                        <div className="flex space-x-4">
                            <button className="border-white  text-white border-2 rounded-md p-2 text-base "> Remove</button>
                            <button className="bg-white text-primary  rounded-md p-2 text-base "> Add Service</button>
                        </div>
                    </div>
                </div>
                </div>

            </section>

            <section className=' bg-[#E6F9F8] rounded-b-lg shadow-2xl sm:flex sm:space-y-4  p-5 flex-col divide-y-2 divide-gray-300  '>
                
              <div>
                <div className="flex justify-between sm:p-4">
                    <div className=' flex space-x-4 content-center'>
                          <div className='sm:text-xl font-bold text-primary ' > Phone number (2) </div>
                          <button className='bg-alternative text-primary text-tiny sm:text-base sm:px-4 px-2 rounded-full' > + Add  </button>
                    </div>
                    <div className="flex"><IoIosArrowUp className="text-bold text-2xl my-auto "/> </div>
                </div>

                <section className=' sm:grid sm:grid-cols-2 gap-4 py-4'>
                      <div className='my-2 bg-white rounded-md shadow-xl '>
                              <div className='flex p-5 place-content-between'>
                                  <div className="flex space-x-4">
                                    <BiHash className="text-primary" size="40px"/>
                                    <span className="text-xl font-semibold text-primary my-auto">(789) 123 45 67</span>
                                  </div>               
                                  <div className="flex"> <IoTrashOutline className='text-gray-300 my-auto' size="30px"/></div>
                              </div>
                          </div>
                      <div className='my-2 bg-white rounded-md shadow-xl '>
                              <div className='flex p-5 place-content-between'>
                                  <div className="flex space-x-4">
                                    <BiHash className="text-primary" size="40px"/>
                                    <span className="text-xl font-semibold text-primary my-auto">(789) 123 45 67</span>
                                  </div>               
                                  <div className="flex"> <IoTrashOutline className='text-gray-300 my-auto' size="30px"/></div>
                              </div>
                  </div>


                  </section>

              </div>

              <div>
                <div className="flex justify-between sm:p-4">
                    <div className=' flex space-x-4 content-center'>
                          <div className='sm:text-xl font-bold text-primary ' > Phone number (2) </div>
                          <button className='bg-alternative text-primary text-tiny sm:text-base sm:px-4 px-2 rounded-full' > + Add  </button>
                    </div>
                    <div className="flex"><IoIosArrowUp className="text-bold text-2xl my-auto "/> </div>
                </div>

                <section className=' sm:grid sm:grid-cols-2 gap-4 py-4'>
                      <div className='my-2 bg-white rounded-md shadow-xl '>
                              <div className='flex p-5 place-content-between'>
                                  <div className="flex space-x-4">
                                    <BiHash className="text-primary" size="40px"/>
                                    <span className="text-xl font-semibold text-primary my-auto">(789) 123 45 67</span>
                                  </div>               
                                  <div className="flex"> <IoTrashOutline className='text-gray-300 my-auto' size="30px"/></div>
                              </div>
                          </div>
                      <div className='my-2 bg-white rounded-md shadow-xl '>
                              <div className='flex p-5 place-content-between'>
                                  <div className="flex space-x-4">
                                    <BiHash className="text-primary" size="40px"/>
                                    <span className="text-xl font-semibold text-primary my-auto">(789) 123 45 67</span>
                                  </div>               
                                  <div className="flex"> <IoTrashOutline className='text-gray-300 my-auto' size="30px"/></div>
                              </div>
                  </div>


                  </section>

              </div>

              <div>
                <div className="flex justify-between sm:p-4">
                    <div className=' flex space-x-4 content-center'>
                          <div className='sm:text-xl font-bold text-primary ' > Phone number (2) </div>
                          <button className='bg-alternative text-primary text-tiny sm:text-base sm:px-4 px-2 rounded-full' > + Add  </button>
                    </div>
                    <div className="flex"><IoIosArrowUp className="text-bold text-2xl my-auto "/> </div>
                </div>

                <section className=' sm:grid sm:grid-cols-2 gap-4 py-4'>
                      <div className='my-2 bg-white rounded-md shadow-xl '>
                              <div className='flex p-5 place-content-between'>
                                  <div className="flex space-x-4">
                                    <BiHash className="text-primary" size="40px"/>
                                    <span className="text-xl font-semibold text-primary my-auto">(789) 123 45 67</span>
                                  </div>               
                                  <div className="flex"> <IoTrashOutline className='text-gray-300 my-auto' size="30px"/></div>
                              </div>
                          </div>
                      <div className='my-2 bg-white rounded-md shadow-xl '>
                              <div className='flex p-5 place-content-between'>
                                  <div className="flex space-x-4">
                                    <BiHash className="text-primary" size="40px"/>
                                    <span className="text-xl font-semibold text-primary my-auto">(789) 123 45 67</span>
                                  </div>               
                                  <div className="flex"> <IoTrashOutline className='text-gray-300 my-auto' size="30px"/></div>
                              </div>
                  </div>


                  </section>

              </div>
              


            </section>


        </section>
        
        <footer className='bg-gradient-to-b from-[#00E5D9] to-[#333366] rounded-lg shadow-lg p-0  block sm:flex relative'>
          <div class="sm:w-4/5 py-10">
            <div className='items-center justify-center block h-full lg:flex'>
              <div className="ml-5 text-2xl lg:w-1/2 xl:ml-20">
                <div className='font-bold text-white'>Full Power Experience</div>
                <div className='text-white'>Enjoy 2G Internet</div>
              </div>
              <div className="mt-5 ml-5 lg:w-1/2 lg:mt-0 lg:ml-0 lg:text-center">
                <button className='py-2 text-center text-black rounded-md w-44 bg-alternative'> Upgrade plan</button>
              </div> 
            </div>
          </div>
          <div className="hidden text-xs sm:w-1/5 sm:bg-orange-500 sm:text-center sm:text-white sm:font-bold lg:text-2xl sm:p-8 sm:rounded-tr-lg sm:rounded-br-lg sm:block">
            <div className='flex items-center justify-center h-full'>
              <div className='block'>
                <div>20%</div>
                <div>OFF</div>
              </div>
            </div>
          </div>
          <div className='block sm:hidden absolute  bg-[#FF8C3E] text-center -mt-[50px] text-white text-lg font-bold rounded-full h-[71px] w-[71px] p-3 top-4 right-6'>
            20% off
          </div>
        </footer>


    </div>
    </>
  </div>
  );
}

export default RefPhone;