
import { IoIosArrowBack } from "react-icons/io";
import { IoCalendarSharp, IoConstruct } from "react-icons/io5";
import { BsTruck, BsFillCheckCircleFill } from "react-icons/bs";
import "./StyleGeneral.css";
import { list } from "postcss";
import {useParams} from 'react-router-dom';



const data = {
    number: '#23456',
    date: 'July 07, 2022',
    services: ['Internet'],
    description: 'Residential Internet service installation',
    list_appointment: [
      {
        name: "Pendindg",
        icon: <IoCalendarSharp />,
        active:false
      },
      {
        name: "On way",
        icon: <BsTruck />,
        active:false
      },
      {
        name: "Started",
        icon: <IoConstruct />,
        active:false
      },
      {
        name: "Completed",
        icon: <BsFillCheckCircleFill />,
        active:false
      }
    ]
};

function AppoinmentView() {
  const {id} = useParams();
  data.list_appointment[id].active = true
  console.log ( data.list_appointment[id].active)
  return (
    <div className="App bg-slate-100" >
      <>
        <div className="flex h-16 p-4 text-2xl font-bold align-middle bg-white text-primary place-content-between"> 
          <div className='flex my-auto align-middle '><IoIosArrowBack className='m-auto mr-4'/> Appointment Detail</div>  
        </div>
        <section className='p-4'>
          <div className='p-5 bg-white rounded-md shadow-xl'>
            <div className='grid grid-cols-1 divide-y'>
              <div>
                <div className='grid grid-cols-2 gap-4 mb-3'>
                  <div>
                    <div className='font-bold text-left text-md text-primary'>Order Number</div>
                  </div>
                  <div>
                    <div className='text-right text-md text-primary'>{ data.number }</div>
                  </div>
                  <div>
                    <div className='font-bold text-left text-md text-primary'>Date</div>
                  </div>
                  <div>
                    <div className='text-right text-md text-primary'>{ data.date }</div>
                  </div>
                </div>
              </div>
              <div>
                <div className='grid grid-cols-1 mt-3 mb-3'>
                  <div>
                    <div className='mb-3 font-bold text-left text-md text-primary'>Services</div>
                  </div>
                  <div>
                    <div className='text-left text-md text-primary'>{ data.services.map((list) => {
                      return <div className='text-sm text-primary'>{ list }</div>
                    }) }</div>
                  </div>
                </div>
              </div>
              <div>
                <div className='grid grid-cols-1 mt-3'>
                  <div>
                    <div className='mb-3 font-bold text-left text-md text-primary'>Description</div>
                  </div>
                  <div>
                    <div className='text-left text-md text-primary'>{ data.description }</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              {
                data.list_appointment.map((list) => {
                  return (<div className='flex mt-5 flex-list'>
                    <div className={`banner ${!list.active ? "p-3 bg-blue-200 text-white rounded-full line-style" : "p-3 bg-primary text-white rounded-full border border-green-400 line-style"}`}> { list.icon } </div>
                    <div className="mt-2 ml-3"> {list.name} </div>
                  </div>)
                })
              }
            </div>

            <div className="mt-5">
              {
              
              data.list_appointment[0].active === false ? (<div></div>):(<div><button className="w-full py-2 text-center text-white border rounded-md border-alternative bg-primary" onClick={() => { window.location.href = 'http://localhost:3008/schedule';}}>
              Reshedule appointment
            </button></div>)
              }
                
        
              <button className="w-full py-2 mt-3 text-center text-blue-900 bg-white border rounded-md border-alternative">
                Cancel appointment
              </button>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default AppoinmentView;