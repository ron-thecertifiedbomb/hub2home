import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/HomePage/Home";
import SuccessfulPage from "./Pages/SuccessfulPage.jsx/SuccessfulPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import {UserContext} from './UserContext/UserContext'
import React, { useState} from "react";

import "./App.css";

const App = () => {

const [showNavBar, setShowNavBar] = useState(true)

  return (
    <div className="App">
        <UserContext.Provider
        value={{ showNavBar, setShowNavBar}}
      >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/success" element={<SuccessfulPage />} />
      </Routes>
      <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default App;
