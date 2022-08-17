
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import "./StyleGeneral.css";

function AppoinmentView() {
  return (
    <div className="App bg-slate-100" >
      <>
        <div className="flex h-16 p-4 text-2xl font-bold align-middle bg-white text-primary place-content-between"> 
          <div className='flex my-auto align-middle '><IoIosArrowBack className='m-auto mr-4' onClick={()=>{window.location.href = 'http://localhost:3008/app';}}/> Service Installation</div>  
        </div>
        <section className='p-4'>
          <div className='p-5 bg-white rounded-md shadow-xl'>
            <div className='grid grid-cols-1'>
              <div>
                <div className='grid grid-cols-1 mt-3 mb-3'>
                  <div>
                    <div className='text-lg font-bold text-left text-primary'>When would you like reschedule?</div>
                  </div>
                  <div>
                    <div className='mt-3 text-left text-md text-primary'>Please select a new date</div>
                  </div>
                </div>
              </div>
              <div>
                <div className='grid grid-cols-1 mt-3 mb-3'>
                  <div class="container mx-auto px-4">
                    <div className="flex justify-center text-center">
                      <IoIosArrowBack className="mt-1 mr-10 font-bold" />
                        <div className='text-lg font-bold text-left text-primary'>June 2022</div>
                      <IoIosArrowForward className="mt-1 ml-10 font-bold" />
                    </div>
                    <div className="flex justify-center mt-5 text-center">
                      <div className="px-2 mx-1 text-sm font-bold bg-purple-200 border rounded">Week 1</div>
                      <div className="px-2 mx-1 text-sm font-bold rounded">Week 2</div>
                      <div className="px-2 mx-1 text-sm font-bold rounded">Week 3</div>
                      <div className="px-2 mx-1 text-sm font-bold rounded">Week 4</div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div class="rounded overflow-hidden shadow-lg">
                    <div class="grid grid-rows-1 grid-flow-col gap-1 p-2">
                      <div>
                        <div className="mb-2 text-sm font-bold text-center bg-purple-200 rounded">Time</div>
                        <div>
                          <div className="py-3 mt-1 text-xs font-bold text-center bg-gray-100 rounded md:text-sm min-45">08:00 - 11:00</div>
                          <div className="py-3 mt-1 text-xs font-bold text-center bg-gray-100 rounded md:text-sm min-45">12:00 - 15:00</div>
                          <div className="py-3 mt-1 text-xs font-bold text-center bg-gray-100 rounded md:text-sm min-45">15:00 - 18:00</div>
                          <div className="py-3 mt-1 text-xs font-bold text-center bg-gray-100 rounded md:text-sm min-45">19:00 - 22:00</div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 text-sm font-bold text-center bg-purple-200 rounded">Monday</div>
                        <div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-200 rounded min-45"><span className="invisible block sm:visible">Not available</span></div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-100 rounded min-45"></div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-100 rounded min-45"></div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-100 rounded min-45"></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 text-sm font-bold text-center bg-purple-200 rounded">Tuesday</div>
                        <div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-100 rounded min-45"></div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-100 rounded min-45"></div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-200 rounded min-45"><span className="invisible block sm:visible">Not available</span></div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-100 rounded min-45"></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 text-sm font-bold text-center bg-purple-200 rounded">Wednesday</div>
                        <div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-100 rounded min-45"></div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-200 rounded min-45"><span className="invisible block sm:visible">Not available</span></div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-100 rounded min-45"></div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-200 rounded min-45"><span className="invisible block sm:visible">Not available</span></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 text-sm font-bold text-center bg-purple-200 rounded">Thursday</div>
                        <div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-100 rounded min-45"></div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-100 rounded min-45"></div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-100 rounded min-45"></div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-100 rounded min-45"></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 text-sm font-bold text-center bg-purple-200 rounded">Friday</div>
                        <div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-100 rounded min-45"></div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-100 rounded min-45"></div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-100 rounded min-45"></div>
                          <div className="py-3 mt-1 text-sm font-bold text-center bg-gray-100 rounded min-45"></div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default AppoinmentView;