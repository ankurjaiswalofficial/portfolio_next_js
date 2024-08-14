import React from "react";
import ContactContent from "./ContactContent.tsx";
import { letsDesignTogether } from "@/utils/Defaults";
import Section from "@/components/Section";

export default function Contact() {
    return (
        <Section className="mb-6" title={"Lets Design Together"} description={letsDesignTogether}>
            <ContactContent />
        </Section>
    );
}
