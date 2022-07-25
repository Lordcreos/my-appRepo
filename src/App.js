
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

    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App