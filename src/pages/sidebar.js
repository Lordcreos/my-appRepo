import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { BsChevronCompactDown ,BsChevronCompactUp } from "react-icons/bs";
import Logo from "../assets/logo";
import { AiOutlineShoppingCart, AiOutlineClose} from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";


const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showContent, setShowContent] = useState(true);

  return (
    <>
      {showSidebar ? (
      <div></div>
      ) : (
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
        <AiOutlineShoppingCart className="text-4xl"/>
        </div>
      )}

      <div
        className={`top-0 right-0 w-full sm:w-[325px] bg-white  shadow-2xl  p-3 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >

        <div
          className="flex text-2xl justify-between text-black  cursor-pointer mt-5  h-[10%]  border-b-2 "
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Logo />
          <AiOutlineClose/>
        </div>

        <div className="h-[60%] ">

         { ! showContent? 
         (<div >
                <section className="flex flex-col items-center justify-center pt-10">
        <div className="flex items-center justify-center w-32 h-32 rounded-full bg-primary bg-opacity-20">
        <RiErrorWarningLine className="text-6xl"/>
        </div> 
        <div className="px-6 text-center">
          <section className="py-6">
            <div className="text-primary font-semibold" > You can continue shopping and add some items</div>
          </section>
          <section className="text-center in-lineblock">
          <div className="text-gray-500 text-tiny" > You can continue shopping and add some items</div>
          </section>
        </div>
      </section>

         </div>):
         
         
         (<div> { showDelete && <div className="bg-[#ffc1c1] text-primary  flex p-1 rounded-sm  mt-4 ">
         <div className="pt-2 px-3" ><RiErrorWarningLine className="text-2xl"/></div>
         <div className="text-tiny">If you delete a core service, all of its additional services will also be deleted</div>  
         </div>}

               <div className='grid grid-cols-12 p-1 m-3  '>
               <div className='text-center text-primary  font-semibold ' > &nbsp; </div>
               <div className='text-left text-primary col-span-6   font-semibold ' >Internet + Phone </div>
               <div className='text-center text-primary col-span-2' > 12 </div>
               <div className='text-center flex justify-between  font-semibold text-primary  col-span-3'> 99.99$<IoTrashOutline className='text-primary font-semibold text-xl pt-1' onClick={()=>{setShowDelete(!showDelete)}} /> </div>
               </div>

               <div className='grid grid-cols-12 p-1 m-3  '>
               <div className='text-center text-primary  font-semibold ' onClick={()=>{setShowDropdown(!showDropdown)}}> {showDropdown ? (< BsChevronCompactUp  className="text-primary font-semibold text-xl pt-1"/>) :(<BsChevronCompactDown className="text-primary font-semibold text-xl pt-1"/>) } </div>
               <div className='text-left text-primary col-span-6   font-semibold ' >Internet Premium </div>
               <div className='text-center text-primary col-span-2' > 2 </div>
               <div className='text-center flex justify-between  font-semibold text-primary  col-span-3'> 99.99$<IoTrashOutline className='text-primary font-semibold text-xl pt-1' onClick={()=>{setShowDelete(!showDelete)}} /> </div>
               </div>

             { showDropdown &&
              <div className='grid grid-cols-12 p-1 m-3 bg-[#F7F7FD] '>
               <div className='text-center text-primary  font-semibold ' > &nbsp; </div>
               <div className='text-left text-primary col-span-6   font-semibold ' >Wifi 6 Extender </div>
               <div className='text-center text-primary col-span-2' > 2 </div>
               <div className='text-center flex justify-between  font-semibold text-primary  col-span-3'> 99.99$<IoTrashOutline className='text-primary font-semibold text-xl pt-1' /> </div>
               </div>} </div>)
         
         }


        </div>

        <footer className="flex flex-col pt-6 my-3 px-1 mx-3 gap-y-4 ">
            <button className='w-full px-3 py-2 text-white rounded-sm bg-primary'> Check Service </button>
            <button className='w-full py-2  border-2 rounded-sm text-primary text-tiny border-primary'> Schedule my Order </button>
        </footer>

      </div>

    
    </>
  );
};

export default Sidebar;