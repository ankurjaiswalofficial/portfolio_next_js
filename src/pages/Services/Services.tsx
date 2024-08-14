import React from "react";
import ServicesContent from "./ServicesContent";
import { servicesParagraph } from "@/utils/Defaults";
import Section from "@/components/Section";

export default function Services() {
    return (
        <Section title={"Services"} description={servicesParagraph}>
            <ServicesContent />
        </Section>
    );
}
