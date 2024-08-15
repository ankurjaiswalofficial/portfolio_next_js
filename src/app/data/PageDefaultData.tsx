import SocialLinks from "@/components/SocialLinks";
import { MyProjectFieldProps } from "../interfaces/Component";
import {
    AboutMeParagraph,
    LetsDesignTogetherParagraph,
    MyProjectsParagraph,
    ServicesParagraph,
    TestimonialsParagraph,
} from "./BrandDefault";
import HomeContent from "@/pages/Home/HomeContent";
import AboutMeContent from "@/pages/AboutMe/AboutMeContent";
import ServicesContent from "@/pages/Services/ServicesContent";
import MyProjectsContent from "@/pages/MyProjects/MyProjectsContent";
import TestimonialsContent from "@/pages/Testimonials/TestimonialsContent";
import ContactContent from "@/pages/Contact/ContactContent.tsx";

export const HomeContentData = {
    name: "Muhammad Umair ",
    profession1: "UI & UX",
    profession2: "Designer ",
    description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra",
    hireURL: null,
};

export const AboutMeData = [
    {
        label: "UX",
        percent: "85",
    },
    {
        label: "Website Design",
        percent: "80",
    },
    {
        label: "App Design",
        percent: "90",
    },
    {
        label: "Graphics Design",
        percent: "85",
    },
];

export const ServicesContentData = [
    {
        title: "UI/UX",
        description:
            "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
        imgSrc: "/img/ui-ux.svg",
    },
    {
        title: "Web Design",
        description:
            "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
        imgSrc: "/img/web-design.svg",
    },
    {
        title: "App Design",
        description:
            "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
        imgSrc: "/img/app-design.svg",
    },
    {
        title: "Graphic Design",
        description:
            "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
        imgSrc: "/img/graphic-design.svg",
    },
];

export const TestimonialContentJSON = [
    {
        description:
            "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        imgSrc: "/img/img4.png",
        name: "CEO",
    },
    {
        description:
            "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        imgSrc: "/img/img3.png",
        name: "CEO",
    },
    {
        description:
            "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        imgSrc: "/img/img4.png",
        name: "CEO",
    },
    {
        description:
            "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        imgSrc: "/img/img3.png",
        name: "CEO",
    },
];

export const MyProjectsJSON: MyProjectFieldProps[] = [
    {
        field: "UI/UX",
        cards: [
            {
                title: "Sample Card",
                img1Src: "/img/img6.png",
                img2Src: "/img/img5.png",
            },
            {
                title: "Sample Card",
                img1Src: "/img/img8.png",
                img2Src: "/img/img7.png",
            },
            {
                title: "Sample Card",
                img1Src: "/img/img10.png",
                img2Src: "/img/img9.png",
            },
        ],
    },
    {
        field: "Web Design",
        cards: [
            {
                title: "AirCalling Landing Page Design ",
                img1Src: "/img/img6.png",
                img2Src: "/img/img5.png",
            },
            {
                title: "Business Landing Page Design ",
                img1Src: "/img/img8.png",
                img2Src: "/img/img7.png",
            },
            {
                title: "Ecom Web Page Design ",
                img1Src: "/img/img10.png",
                img2Src: "/img/img9.png",
            },
        ],
    },
    {
        field: "App Design",
        cards: [
            {
                title: "Sample Card",
                img1Src: "/img/img6.png",
                img2Src: "/img/img5.png",
            },
            {
                title: "Sample Card",
                img1Src: "/img/img8.png",
                img2Src: "/img/img7.png",
            },
            {
                title: "Sample Card",
                img1Src: "/img/img10.png",
                img2Src: "/img/img9.png",
            },
        ],
    },
    {
        field: "Graphic Design",
        cards: [
            {
                title: "Sample Card",
                img1Src: "/img/img6.png",
                img2Src: "/img/img5.png",
            },
            {
                title: "Sample Card",
                img1Src: "/img/img8.png",
                img2Src: "/img/img7.png",
            },
            {
                title: "Sample Card",
                img1Src: "/img/img10.png",
                img2Src: "/img/img9.png",
            },
        ],
    },
];



export const PageSectionsDefaultJSON = [
    {
        title: "",
        description: "",
        imgSrc: "/img/img1.png",
        reverse: true,
        footerChildren: <SocialLinks />,
        children: <HomeContent />,
    },
    {
        title: "About Me",
        description: AboutMeParagraph,
        imgSrc: "/img/img2.png",
        children: <AboutMeContent />,
    },
    {
        title: "Services",
        description: ServicesParagraph,
        children: <ServicesContent />,
    },
    {
        title: "My Projects",
        description: MyProjectsParagraph,
        children: <MyProjectsContent />,
    },
    {
        title: "Testimonials",
        description: TestimonialsParagraph,
        className: "max-w-full",
        children: <TestimonialsContent />,
    },
    {
        title: "Lets Design Together",
        description: LetsDesignTogetherParagraph,
        className: "mb-6",
        children: <ContactContent />,
    },
];
