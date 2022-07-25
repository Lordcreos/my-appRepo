
import { GoPrimitiveDot } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { BsTelephone} from "react-icons/bs";
import PhoneIcon from "../assets/PhoneIcon";


function PhoneView() {
  return (
    <div className="App bg-slate-100" >
      
      <>


      <div className="flex h-16 p-4 text-2xl font-bold align-middle bg-white text-primary place-content-between"> 
            <div className='flex my-auto align-middle '><IoIosArrowBack className='m-auto mr-4' onClick={()=>{console.log('hola')}}/> Phone </div>
              
                <div className='relative flex my-auto align-middle rounded-full h-9 w-9 place-content-center bg-primary'> 
              <BsTelephone className='my-auto text-white text-[20px] '/>
              <div className='text-alternative rounded-full   text-[48px] absolute bottom-0 right-0 -mb-3.5 '> .</div>
              </div>
            </div>

      <section className='flex p-4 '>
        <PhoneIcon/>
        <div className='flex-col p-5'>
        <div className='text-tiny text-[#707070]'>Service Status</div> 
        <div className='bg-active text-activeText text-center rounded-sm  text-tiny mt-1 place-content-center flex w-[117px]'>
          <GoPrimitiveDot className='pr-1 my-auto'/>
           Active</div>
        </div>
      </section>

      <section className='flex p-4 space-x-4 '>
      <div className='flex-1' >
          <div className='text-tiny text-[#707070]'>Phone Plan</div> 
          <div className='inline-block px-1 mt-1 font-bold text-white rounded-sm bg-primary text-tiny'>
          Basic
           </div>
           <div className='font-medium text-black text-tiny'>Phone number</div> 
           <div className='font-medium text-black text-tiny'> +1 134 2455 567</div> 
      </div>
      <hr/>
      <div className='flex-1' >
        <div className='text-tiny text-[#707070]'>Equipment Information</div> 
        <div className='font-medium text-black text-tiny'>Digital Max Pro/100 mbps </div> 
      </div>
      </section>

      <section className='flex px-4 py-1 place-content-between'>
      <div className='text-xl font-bold text-primary' >
      Additional services
      </div>
      <hr/>
      <div className='my-auto underline text-primary text-tiny ' >
      + Add more services
      </div>
      </section>
      <div className='py-4 text-center text-tiny'> You have the following services included with your plan</div>
      <section className='p-4 '>
        <div className='bg-white rounded-md shadow-xl '> 
        <div className='flex p-5 place-content-between'>

            <div> 
              <div><span className='text-xl font-bold text-primary '> Voice Ultra</span> </div>
              <div className='text-tiny'> 1 month free in 1 year contract</div>
            </div>
            <div> <IoTrashOutline className='text-primary'/></div>
         </div>
        </div>
        
      </section>
      
      <section className='flex px-4 py-1 place-content-between'>
            <div className='text-xl font-bold text-primary' >
               Special for You
            </div>
      </section>

      <section className='p-4 '>
        <div className='  rounded-md bg-gradient-to-b from-[#00E5D9] to-[#333366]'> 
        <div className='flex p-5 place-content-between'>

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
        
      </section>

      </>

      
    </div>
  );
}

export default PhoneView;