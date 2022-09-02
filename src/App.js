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
import EmailVerification from "./pages/emailVerification";
import PhoneVerification from "./pages/phoneVerification";
import EmailConfirmation from "./pages/emailConfirmation";
import RefPhone from "./pages/RefPhone";
import RefTv from "./pages/refTV";
import RefInternet from "./pages/refInternet";
import LocationCheck from "./pages/locationCheck";


function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<div> soy app</div>}>
        
      </Route>

      <Route path="/internet" element={<InternetView/>}/>
      <Route path="/phone" element={<PhoneView/>}/>
      <Route path="/refphone" element={<RefPhone/>}/>
      <Route path="/reftv" element={<RefTv/>}/>
      <Route path="/refinternet" element={<RefInternet/>}/>
      <Route path="/tv" element={<TvView/>}/>
      <Route path="/app" element={<AppoinmentView/>}/>
      <Route path="/appo/:id" element={<AppointmentsDetailsView/>}/>
      <Route path="/schedule" element={<ScheduleView/>}/>
      <Route path="/location" element={<LocationView/>}/>
      <Route path="/check" element={<LocationCheck/>}/>
      <Route path="/shop" element={<ShoppingCart/>}/>
      <Route path="/email" element={<EmailVerification/>}/>
      <Route path="/confirmemail" element={<EmailConfirmation/>}/>
      <Route path="/verifyphone" element={<PhoneVerification/>}/>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App