import React from "react";
import TestimonialsContent from "./TestimonialsContent";
import { testimonialsParagraph } from "@/utils/Defaults";
import Section from "@/components/Section";

export default function Testimonials() {
    return (
        <Section
            title={"Testimonials"}
            description={testimonialsParagraph}
            className="max-w-full flex-1 bg-slate-200 overflow-hidden"
        >
            <TestimonialsContent />
        </Section>
    );
}
