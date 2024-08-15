"use client";
import React from "react";
import { Splide } from "@splidejs/splide";
import { URLHash } from "@splidejs/splide-extension-url-hash";
import "@splidejs/splide/css";
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css/sea-green";
import "@splidejs/splide/css/core";
import { cn } from "@/utils/utils";

const spliderStyles = {
    list: cn("splide__list"),
    slide: cn("splide__slide", "px-4 opacity-30"),
};

function CarouselItem({ className, children }) {
    return <li className={spliderStyles.slide}>{children}</li>;
}

function Carousel({ className, children }) {
    const splideRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        if (splideRef.current) {
            const splide = new Splide(splideRef.current, {
                autoWidth: true,
                perPage: 3,
                perMove: 1,
                focus: "center",
                trimSpace: false,
                arrows: false,
                drag: true,
                cloneStatus: false,
                pagination: true,
                paginationKeyboard: true,
                autoScroll: {
                    speed: 1,
                },
                gap: "1rem",
            });
            splide.mount({ URLHash });
            splide.go(1)
        }
    }, [splideRef]);
    return (
        <div ref={splideRef} className={cn("splide", className)}>
            <div className="splide__track">
                <ul className={spliderStyles.list}>{children}</ul>
            </div>
            <ul className="splide__pagination"></ul>
        </div>
    );
}

export { Carousel, CarouselItem };
