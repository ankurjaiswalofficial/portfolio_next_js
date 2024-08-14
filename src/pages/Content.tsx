import React from "react";
// import { aboutMeParagraph, letsDesignTogether, myProjectsParagraph, servicesParagraph, testimonialsParagraph } from '@/utils/Defaults'
import AboutMe from "./AboutMe/AboutMe";
import Services from "./Services/Services";
import MyProjects from "./MyProjects/MyProjects";
import Footer from "./Footer/Footer";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";

export default function Content() {
    return (
        <>
            <Home />
            <AboutMe />
            <Services />
            <MyProjects />
            <Testimonials />
            <Contact />
            {/* <SectionSheet title={"Services"} description={servicesParagraph}></SectionSheet>
        <SectionSheet title={"My Projects"} description={myProjectsParagraph}></SectionSheet>
        <SectionSheet title={"Testimonials"} description={testimonialsParagraph}></SectionSheet>
        <SectionSheet title={"Lets Design Together"} description={letsDesignTogether}></SectionSheet> */}
        </>
    );
}
