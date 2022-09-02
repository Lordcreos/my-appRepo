import React, { Children } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { BsTelephone} from "react-icons/bs";
import { CgScreen } from "react-icons/cg";

function RenderIcon ({ icon}) {
  console.log(icon);
  switch (icon) {
    case "FaWifi":
    return <FaWifi className='text-white align-middle my-auto '/>;
    case "BsTelephone":
    return <BsTelephone className='text-white align-middle my-auto '/>;
    case "CgScreen":
    return <CgScreen className='text-white align-middle my-auto '/>;

    default:
      break;
  }

}


function Header({ icon, title }) {
console.log(icon);

  return (
    <div className="text-primary text-2xl font-bold align-middle bg-white flex  place-content-between h-16 p-4"> 
            <div className=' align-middle flex  my-auto '><IoIosArrowBack className='m-auto mr-4'/> {title} </div>

                <div className=' align-middle flex  my-auto h-9 w-9 place-content-center relative bg-primary rounded-full '>
                  
              <RenderIcon icon={icon}/>

              
              <div className='text-alternative rounded-full   text-[48px] absolute bottom-0 right-0 -mb-3.5 '> .</div>
              </div>
            </div>
  )
}

export default Header