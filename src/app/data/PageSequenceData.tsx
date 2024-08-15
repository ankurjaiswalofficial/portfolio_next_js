import HomeContent from "@/pages/Home/HomeContent";
import AboutMeContent from "@/pages/AboutMe/AboutMeContent";
import ServicesContent from "@/pages/Services/ServicesContent";
import MyProjectsContent from "@/pages/MyProjects/MyProjectsContent";
import TestimonialsContent from "@/pages/Testimonials/TestimonialsContent";
import ContactContent from "@/pages/Contact/ContactContent.tsx";

import SocialLinks from "@/components/SocialLinks";
import {
    AboutMeParagraph,
    LetsDesignTogetherParagraph,
    MyProjectsParagraph,
    ServicesParagraph,
    TestimonialsParagraph,
} from "./BrandDefault";

export const PageSectionsDefaultJSON = [
    {
        id: "home",
        title: "",
        description: "",
        imgSrc: "/img/img1.png",
        reverse: true,
        footerChildren: <SocialLinks />,
        children: <HomeContent />,
    },
    {
        id: "about",
        title: "About Me",
        description: AboutMeParagraph,
        imgSrc: "/img/img2.png",
        children: <AboutMeContent />,
    },
    {
        id: "services",
        title: "Services",
        description: ServicesParagraph,
        children: <ServicesContent />,
    },
    {
        id: "projects",
        title: "My Projects",
        description: MyProjectsParagraph,
        children: <MyProjectsContent />,
    },
    {
        id: "testimonials",
        title: "Testimonials",
        description: TestimonialsParagraph,
        className: "max-w-full",
        children: <TestimonialsContent />,
    },
    {
        id: "contact",
        title: "Lets Design Together",
        description: LetsDesignTogetherParagraph,
        className: "mb-6",
        children: <ContactContent />,
    },
];
