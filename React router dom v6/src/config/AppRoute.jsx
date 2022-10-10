import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home"
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Error from "../components/Error/Error";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* Jab bhi koi url may ulta sida search karyga tou Error page pe img show hogi  */}
                <Route path="*" element={<Error />} />

                {/* Nested routing */}
                {/* <Route exact path="/" element={<Home />} >
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Route> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default AppRoute