import {
    SectionSheet,
    SectionSheetHeader,
    SectionSheetHeaderDescription,
    SectionSheetHeaderTitle,
    SectionSheetContent,
} from "@/components/SectionSheet";
import React from "react";
import AboutMeContent from "./AboutMeContent";
import { aboutMeParagraph } from "@/utils/Defaults";
import Section from "@/components/Section";

export default function AboutMe() {
    return (
        <Section title={"About Me"} description={aboutMeParagraph} imgSrc={"/img/img2.png"}>
            <AboutMeContent />
        </Section>
    );
}
