import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too

import React from 'react'
import InternetView from "./pages/internetpage";
import PhoneView from "./pages/phonepage";
import TvView from "./pages/tvpage";
import AppoinmentView from "./pages/appointments";
import AppointmentsDetailsView from "./pages/appointmentsDetails";
import ScheduleView from "./pages/schedule";
import LocationView from "./pages/location";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<div> soy app</div>}>
        
      </Route>

      <Route path="/internet" element={<InternetView/>}/>
      <Route path="/phone" element={<PhoneView/>}/>
      <Route path="/tv" element={<TvView/>}/>
      <Route path="/app" element={<AppoinmentView/>}/>
      <Route path="/appo/:id" element={<AppointmentsDetailsView/>}/>
      <Route path="/schedule" element={<ScheduleView/>}/>
      <Route path="/location" element={<LocationView/>}/>
      <Route path="/shop" element={<ShoppingCart/>}/>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App