import React from "react";
import { Carousel, CarouselItem } from "@/components/Carousel";
import TestimonialCard from "../../components/TestimonialCard";
import { TestimonialsContentStyles } from "@/styles/PageDefault";
import { TestimonialContentJSON } from "@/app/data/PageDefaultData";


function TestimonialsContent() {
    return (
        <div className={TestimonialsContentStyles}>
            <Carousel>
                {TestimonialContentJSON.map((val, index) => {
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
