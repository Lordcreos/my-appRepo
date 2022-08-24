import { GoPrimitiveDot } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { BsTelephone} from "react-icons/bs";
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

function RefPhonev1() {
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

    <div className=' sm:flex   sm:justify-start flex-col  px-16 py-10  space-y-6 justify-center'>

        <section className=' sm:bg-white sm:rounded-lg  w-full'>
        <div className="flex h-16 p-4 text-2xl sm:rounded-lg font-bold align-middle bg-white text-primary place-content-between">
            <div className='flex align-middle '><CgScreen  onClick={() => { console.log('hola') }} /> Phone </div>
            <div className= { `${statusStyle[stateNum].color} ${statusStyle[stateNum].bg} text-center rounded-sm  text-tiny  place-content-center flex py-1  px-3`} onClick={() => { stateNum >= 2 ? (setStateNum(0)):(setStateNum(stateNum +1)) }}> 
                    <GoPrimitiveDot className='pr-1 my-auto' />
                    {statusStyle[stateNum].status}
            </div>
            
        </div>  
        </section>

        <section className=' '>
        <div className='text-xl font-bold text-primary' > Primary Services  </div>
        <div className='my-auto underline text-gray-500 text-tiny ' > You have the following primary services included with your TV service  </div>
        </section>

        <section className=" shadow-lg rounded-lg ">
        <section className='p-4 bg-white rounded-t-lg sm:flex sm:space-x-4 '>
            <div className='my-2 bg-primary rounded-md shadow-xl  h-[12rem] sm:w-2/4 '>
            <div className='flex p-5 place-content-between h-full'>
                <div className=" flex flex-col justify-between ">
                <div className='text-base font-semibold text-white '  > HDTV Premium Plan</div>
                <div className='text-tiny text-alternative underline'> More Information</div>
                </div>
                <div className="flex flex-col justify-between">
                     <button className="border-alternative bg-primary text-alternative border-2 rounded-md p-1 text-tiny "> Change Plan</button>
                     
                </div>
            </div>
            </div>

            <div className='flex my-2  rounded-md  border-dashed border-gray-300 border-2 sm:w-2/4 h-[12rem] '> 
                <div className= "text-gray-500 text-xl text-center m-auto">+ Add Service</div>
            </div>
        </section>


        <section className='p-4 bg-[#E6F9F8]  rounded-b-lg  space-y-6'>
                <section className=' '>
                     <div className='text-xl font-bold text-primary' >Additional Services  </div>
                    <div className='my-auto underline text-gray-500 text-tiny ' > You have the following additional services included with your plan  </div>
                </section>
                    <seciotn className=' sm:grid sm:grid-cols-2 gap-4'>
                    <div className='my-2 bg-white rounded-md shadow-xl '>
                            <div className='flex p-5 place-content-between'>
                                <div className="flex space-x-4">
                                    <div className="rounded-full bg-gradient-to-b  from-[#333366] to-[#00E5D9] w-14 h-14">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBBhwrH5hPA7CDkF0h3hR25smghZA2Hbt8Pw&usqp=CAU" className="p-1 rounded-full" />
                                    </div>
                                    <div>
                                        <div><span className="text-xl font-bold text-primary "> ESPN </span></div>
                                        
                                        <div className="text-tiny">50 Channels</div>
                                    </div>
                                </div>               
                                <div> <IoTrashOutline className='text-primary' /></div>
                            </div>
                        </div>

                        <div className='my-2 bg-white rounded-md shadow-xl '>
                            <div className='flex p-5 place-content-between'>
                                <div className="flex space-x-4">
                                    <div className="rounded-full bg-gradient-to-b  from-[#333366] to-[#00E5D9] w-14 h-14">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBBhwrH5hPA7CDkF0h3hR25smghZA2Hbt8Pw&usqp=CAU" className="p-1 rounded-full" />
                                    </div>
                                    <div>
                                        <div><span className="text-xl font-bold text-primary "> ESPN </span></div>
                                        
                                        <div className="text-tiny">50 Channels</div>
                                    </div>
                                </div>               
                                <div> <IoTrashOutline className='text-primary flex' /></div>
                            </div>
                        </div>
                        
                        <div className='flex my-2  rounded-md  border-dashed border-gray-300 border-2  h-[96px] '> 
                            <div className= "text-gray-500 text-xl text-center m-auto">+ Add Service</div>
                        </div>

                </seciotn>
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

