
import { BsCheckLg } from "react-icons/bs";


const LocationCheck = () => {
  return (
    <div className="flex h-screen place-content-center">
    <div className='p-4 my-auto sm:w-2/4 sm:bg-white sm:shadow-2xl sm:rounded-xl'>
        <section className="flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center w-32 h-32 rounded-full bg-[#E2DCFA] bg-opacity-20">
        <svg className="h-14 w-14 css-1t6yzwh-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" stroke="#6C6AFE" fill="#6C6AFE"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" ></path></svg>
        </div>


        <div className="px-6 text-center">
          <section className="py-6">
            <div className="text-primary font-bold text-xl" >Our services are available in your location!</div>
          </section>
          <section className="text-center in-lineblock">
          <div className='flex justify-center'>
            <div className=" text-tiny  text-gray-500 " >Before we continue, are you an existing client?</div> 
          </div>
          
          </section>
        </div>
      </section>


      <footer className="flex flex-col px-3 my-6 pt-4 gap-y-4 ">
      <button className={
                  "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-white hover:border hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                }>
                    Sing in
              </button>
              <button className='w-full py-2  border-2 rounded-sm text-primary text-tiny border-primary'> Schedule my Order </button>
      </footer>

         </div>
         </div>
          
  );
};

export default LocationCheck;
