import LabeledProgress from "@/components/LabeledProgress";
import { aboutMeJSON } from "@/utils/Defaults";
import React from "react";

export default function AboutMeContent() {
    return (
        <div className="flex flex-col items-start justify-start w-full h-fit gap-4">
            {aboutMeJSON.map((val, index) => {
                return <LabeledProgress key={"LabelledProgress_" + String(index)} label={val.label} percent={val.percent} />;
            })}
        </div>
    );
}
