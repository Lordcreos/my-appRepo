
import RouterIcon from '../assets/RouterIcon';
// import Header from '../components/header';
import { GoPrimitiveDot } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { FaWifi } from "react-icons/fa";

function InternetView() {
  return (
    <div className="App bg-slate-100" >
      <>
        <div className="flex h-16 p-4 text-2xl font-bold align-middle bg-white text-primary place-content-between">
          <div className='flex my-auto align-middle '><IoIosArrowBack className='m-auto mr-4' onClick={() => { console.log('hola') }} /> Internet </div>
          <div className='relative flex my-auto align-middle rounded-full h-9 w-9 place-content-center bg-primary'>
            <FaWifi className='my-auto text-white align-middle ' />
            <div className='text-alternative rounded-full   text-[48px] absolute bottom-0 right-0 -mb-3.5 '> .</div>
          </div>
        </div>
        <div className=' sm:flex   sm:justify-start sm:mt-6 sm:w-[65%] sm:mx-auto'>
          <section className='flex p-4 sm:bg-white sm:rounded-l-md sm:p-11 '>
            <RouterIcon />
            <div className='flex-col p-5'>
              <div className='text-tiny text-[#707070]'>Service Status</div>
              <div className='bg-active text-activeText text-center rounded-sm  text-tiny mt-1 place-content-center flex w-[117px]'>
                <GoPrimitiveDot className='pr-1 my-auto' />
                Active</div>
            </div>
          </section>
          <section className='flex p-4 space-x-4 sm:p-0 sm:justify-between sm:w-full'>
            <div className='flex-1 sm:bg-white sm:rounded-r-md sm:p-11 '  >
              <div className='text-tiny text-[#707070]'>Internet Plan</div>
              <div className='inline-block px-1 mt-1 font-bold text-white rounded-sm bg-primary text-tiny'>
                Internet Service
              </div>
              <div className='font-medium text-black text-tiny '>Includes 40mb/s</div>
            </div>
            <hr />
            <div className='flex-1 sm:bg-white sm:rounded-md sm:p-11 ' >
              <div className='text-tiny text-[#707070]'>Equipment Information</div>
              <div className='font-medium text-black text-tiny'>Digital Max Pro/100 mbps </div>
            </div>
          </section>
        </div>
        <section className='flex px-4 py-1 place-content-between sm:mx-auto sm:w-[65%] sm:mt-10'>
          <div className='text-xl font-bold text-primary' >
            Additional services
          </div>
          <hr />
          <div className='my-auto underline text-primary text-tiny ' >
            + Add more services
          </div>
        </section>
        <div className='p-4 text-center sm:mx-auto sm:w-[65%] sm:text-left text-tiny'> You have the following services included with your plan</div>
        <section className='p-4 sm:mx-auto sm:w-[65%] sm:flex sm:space-x-4 '>
          <div className='my-2 bg-white rounded-md shadow-xl sm:w-2/4 '>
            <div className='flex p-5 place-content-between'>
              <div>
                <div><span className='text-xl font-bold text-primary '> Basic</span> <span className='text-[#707070] text-xl font-bold '> 40mb/s</span></div>
                <div className='text-tiny'> Virus protection and more</div>
              </div>
              <div> <IoTrashOutline className='text-primary' /></div>
            </div>
          </div>



          
          <div className='my-2 bg-white rounded-md shadow-xl sm:w-2/4'>
            <div className='flex p-5 place-content-between'>
              <div>
                <div><span className='text-xl font-bold text-primary '> Basic</span> <span className='text-[#707070] text-xl font-bold '> 40mb/s</span></div>
                <div className='text-tiny'> Virus protection and more</div>
              </div>
              <div> <IoTrashOutline className='text-primary' /></div>
            </div>
          </div>
        </section>
        <div className='sm:mx-auto sm:w-[65%]'>
          <section className='flex px-4 py-1 place-content-between'>
            <div className='text-xl font-bold text-primary' >
              Special for You
            </div>
          </section>
          <section className='bg-gradient-to-b from-[#00E5D9] to-[#333366] rounded-lg shadow-lg p-0 m-3 block sm:flex relative'>
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
            <div className='block sm:hidden absolute mt-1 bg-[#FF8C3E] text-center -mt-[50px] text-white text-lg font-bold rounded-full h-[71px] w-[71px] p-3 top-4 right-6'>
              20% off
            </div>
          </section>


          {/* <section className='p-4'>
            <div className='  rounded-md bg-gradient-to-b from-[#00E5D9] to-[#333366]'>
              <div className='p-5 place-content-between'>
                <div className='space-y-3'>
                  <div><span className='text-xl font-bold text-white '> Experience full power</span> </div>
                  <div className='text-white text-tiny' > Enjoy 2G Internet</div>
                  <button className='w-full py-2 text-center text-black rounded-md bg-alternative'> Upgrade plan</button>
                </div>
                <div className=' bg-[#FF8C3E] text-center -mt-[50px] text-white text-lg font-bold rounded-full h-[71px] w-[71px] p-3'>
                  20% off
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </>
    </div>
  );
}

export default InternetView;