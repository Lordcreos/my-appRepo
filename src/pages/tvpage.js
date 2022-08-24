import { GoPrimitiveDot } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { CgScreen } from "react-icons/cg";
import TvIcon from "../assets/TvIcon";

function TvView() {
  return (
    <div className="App bg-slate-100" >
    <>
      <div className="flex h-16 p-4 text-2xl font-bold align-middle bg-white text-primary place-content-between">
        <div className='flex my-auto align-middle '><IoIosArrowBack className='m-auto mr-4' onClick={() => { console.log('hola') }} /> TV </div>
        <div className='relative flex my-auto align-middle rounded-full h-9 w-9 place-content-center bg-primary'>
          <CgScreen className='my-auto text-white align-middle ' />
          <div className='text-alternative rounded-full   text-[48px] absolute bottom-0 right-0 -mb-3.5 '> .</div>
        </div>
      </div>
      <div className=' sm:flex   sm:justify-start sm:mt-6 sm:w-[65%] sm:mx-auto'>
        <section className='flex p-4 sm:bg-white sm:rounded-l-md sm:p-12 '>
          <TvIcon />
          <div className='flex-col p-5'>
            <div className='text-tiny text-gray-500'>Service Status</div>
            <div className='bg-active text-o text-center rounded-sm  text-tiny mt-1 place-content-center flex w-[117px]'>
              <GoPrimitiveDot className='pr-1 my-auto' />
              Active</div>
          </div>
        </section>
        <section className='flex p-4 space-x-4 sm:p-0 sm:justify-between sm:w-full'>
          <div className='flex-1 sm:bg-white sm:rounded-r-md sm:p-12 '  >
            <div className='text-tiny text-gray-500'>TV Plan</div>
            <div className='inline-block px-1 mt-1 font-bold text-white rounded-sm bg-primary text-tiny'>
            HDTV Premium Plus
            </div>
            <div className='font-medium text-black text-tiny '>233 Channels</div>
          </div>
          <hr />
          <div className='flex-1 sm:bg-white sm:rounded-md sm:p-12 ' >
            <div className='text-tiny text-gray-500 sm:my-auto '>Equipment Information</div>
            <div className='font-medium text-black text-tiny sm:my-auto '>Digital Max Pro/100 mbps</div>
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
            <div className="flex space-x-4">
                <div className="rounded-full bg-gradient-to-b  from-[#333366] to-[#00E5D9] w-14 h-14">
                <img src="https://thumbs.dreamstime.com/b/hbo-logo-editorial-ilustrativo-sobre-fondo-blanco-icono-vectorial-logotipos-iconos-conjunto-redes-sociales-banner-plano-vectores-210442739.jpg" className="p-1 rounded-full" />
                </div>
                <div>
                  <div>
                    <span className="text-xl font-bold text-primary "> HBO   </span>
                  </div>
                  <div className="text-tiny"> 120 Channels</div>
                </div>
              </div>
              <div> <IoTrashOutline className='text-primary' /></div>
            </div>
          </div>




          <div className='my-2 bg-white rounded-md shadow-xl sm:w-2/4'>
            <div className='flex p-5 place-content-between'>
            <div className="flex space-x-4">
                <div className="rounded-full bg-gradient-to-b  from-[#333366] to-[#00E5D9] w-14 h-14">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBBhwrH5hPA7CDkF0h3hR25smghZA2Hbt8Pw&usqp=CAU" className="p-1 rounded-full" />
                </div>
                <div>
                  <div>
                    <span className="text-xl font-bold text-primary "> ESPN   </span>
                  </div>
                  <div className="text-tiny">50 Channels</div>
                </div>
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

      </div>
    </>
  </div>
  );
}

export default TvView;
