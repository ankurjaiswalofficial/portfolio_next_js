import React from "react";
import MyProjectsContent from "./MyProjectsContent";
import { myProjectsParagraph } from "@/utils/Defaults";
import Section from "@/components/Section";

export default function MyProjects() {
    return (
        <Section title={"My Projects"} description={myProjectsParagraph}>
            <MyProjectsContent />
        </Section>
    );
}
