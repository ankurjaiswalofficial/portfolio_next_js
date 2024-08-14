import React from "react";
import { Carousel, CarouselItem } from "@/components/Carousel";
import TestimonialCard from "./TestimonialCard";

const testimonialCardJSON = [
    {
        description: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        imgSrc: "/img/img4.png",
        name: "CEO",
    },
    {
        description: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        imgSrc: "/img/img3.png",
        name: "CEO",
    },
    {
        description: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        imgSrc: "/img/img4.png",
        name: "CEO",
    },
    {
        description: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        imgSrc: "/img/img3.png",
        name: "CEO",
    },
];

function TestimonialsContent() {
    return (
        <div className="w-full">
            <Carousel>
                {testimonialCardJSON &&
                    testimonialCardJSON.map((val, index) => {
                        return (
                            <CarouselItem key={"CarouselItem_" + String(index)}>
                                <TestimonialCard {...val} />
                            </CarouselItem>
                        );
                    })}
            </Carousel>
        </div>
    );
}

export default TestimonialsContent;
