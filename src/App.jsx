import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPagePage from "pages/LandingPage";
import ContactUsPage from "pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<LandingPagePage/>} />
        <Route path="/contactus"  element={<ContactUsPage/>} />
      
      </Routes>
    </Router>
  );
}

export default App;
