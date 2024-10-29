import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import NoPage from "./components/NoPage";
import Navbar from "./components/sharedComponents/Navbar";
import Footer from "./components/sharedComponents/Footer";

// function component
const App = () => {


const description = " this is  hello description"

  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <div className="main-routes">
          <Routes>
            <Route path="*" element={<NoPage />} />
            <Route path="/" element={<Home description ={description} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;