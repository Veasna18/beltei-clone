import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import Home from '../Pages/Home';
import About from '../Pages/About';
import Service from '../Pages/Service';
import Features from '../Pages/Features';
import OurTeam from '../Pages/OurTeam';
import Testimonial from '../Pages/Testimonial';
import Appointment from '../Pages/Appointment';
import Page from '../Pages/Page';
import Contact from '../Pages/Contace';
import Get_A_Quote from '../Pages/Get_A_Quote';


export default function Master() {

    
    return (
        <>

            <BrowserRouter>
                <Navbar/>

                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/feature" element={<Features />} />
                    <Route path="/team" element={<OurTeam />} />
                    <Route path="/testimonial" element={<Testimonial />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/404" element={<Page />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/appointment" element={<Get_A_Quote />} />
                    
                </Routes>

                <Footer />
            </BrowserRouter>

        </>
    )
}
