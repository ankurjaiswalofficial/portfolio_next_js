import React from "react";
import { AboutMeContentStyles } from "@/styles/PageDefault";
import LabeledProgress from "@/components/LabeledProgress";
import { AboutMeData } from "@/app/data/PageDefaultData";

function AboutMeContent() {
    return (
        <div className={AboutMeContentStyles}>
            {AboutMeData.map((val, index) => {
                return (
                    <LabeledProgress
                        key={"LabelledProgress_" + String(index)}
                        label={val.label}
                        percent={val.percent}
                    />
                );
            })}
        </div>
    );
}
export default AboutMeContent;
