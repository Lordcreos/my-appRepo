
import RouterIcon from '../assets/RouterIcon';
// import Header from '../components/header';
import { GoPrimitiveDot } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { FaWifi } from "react-icons/fa";

function AppoinmentView() {
  return (
    <div className="App bg-slate-100" >
      
      <>
      {/* <Header/> */}

      <div className="flex h-16 p-4 text-2xl font-bold align-middle bg-white text-primary place-content-between"> 
            <div className='flex my-auto align-middle '><IoIosArrowBack className='m-auto mr-4' onClick={()=>{console.log('hola')}}/> Appointments </div>
              
                
            </div>

 

      <section className='p-4 '>
        <div className='bg-white rounded-md shadow-xl '> 
        <div className='flex p-5 space-x-4 place-content-between'>

            <div> 
              <div className='text-lg font-bold text-left text-primary' > Service order </div>
            </div>
            <div className='text-lg font-bold text-right text-primary'> Appointment Status </div>
         </div>

        
         <div className='flex p-5 m-3 border-t-2 border-solid place-content-between'>
        <div> 
        <div className='text-lg font-bold text-left text-primary' > #26975 </div>
        <div className='text-left text-primary' > July 07, 2022. </div>
        <div className='text-left text-primary' >Internet </div>
        </div>
        <div className='text-right text-primary'>Pending </div>
        </div>


        <div className='flex p-5 m-3 border-t-2 border-solid place-content-between'>
        <div> 
        <div className='text-lg font-bold text-left text-primary' > #26975 </div>
        <div className='text-left text-primary' > July 07, 2022. </div>
        <div className='text-left text-primary' >Internet </div>
        </div>
        <div className='text-right text-primary'>On way </div>
        </div>

        <div className='flex p-5 m-3 border-t-2 border-solid place-content-between'>
        <div> 
        <div className='text-lg font-bold text-left text-primary' > #26975 </div>
        <div className='text-left text-primary' > July 07, 2022. </div>
        <div className='text-left text-primary' >Internet </div>
        </div>
        <div className='text-right text-primary'>Started</div>
        </div>

        <div className='flex p-5 m-3 border-t-2 border-solid place-content-between'>
        <div> 
        <div className='text-lg font-bold text-left text-primary' > #26975 </div>
        <div className='text-left text-primary' > July 07, 2022. </div>
        <div className='text-left text-primary' >Internet </div>
        </div>
        <div className='text-right text-primary'>Suspended </div>
        </div>

        <div className='flex p-5 m-3 border-t-2 border-solid place-content-between'>
        <div> 
        <div className='text-lg font-bold text-left text-primary' > #26975 </div>
        <div className='text-left text-primary' > July 07, 2022. </div>
        <div className='text-left text-primary' >Internet </div>
        </div>
        <div className='text-right text-primary'>Completed </div>
        </div>       

        </div>
        <div className='m-3 text-sm text-[#707070]'> If you are having any problem, please call our contact center 1800 345 355.</div>
      </section>

      

      </>

      
    </div>
  );
}

export default AppoinmentView;