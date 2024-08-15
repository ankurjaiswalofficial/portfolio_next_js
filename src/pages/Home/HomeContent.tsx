import { HomeContentData } from "@/app/data/PageDefaultData";
import { HomeContentStyles } from "@/styles/PageDefault";
import { LinkButton } from "@/components/Button";
import React from "react";

function HomeContent() {
    return (
        <div className={HomeContentStyles.bodyStyles}>
            <h4 className={HomeContentStyles.wishStyles}>Hi I am</h4>
            <h4 className={HomeContentStyles.nameStyles}>{HomeContentData.name}</h4>
            <h1 className={HomeContentStyles.profession1Styles}>{HomeContentData.profession1}</h1>
            <h1 className={HomeContentStyles.profession2Styles}>
                {HomeContentData.profession2}
            </h1>
            <p className={HomeContentStyles.descriptionStyles}>
                {HomeContentData.description}
            </p>
            <LinkButton href={HomeContentData.hireURL  ?? "#contact"}>Hire Me</LinkButton>
        </div>
    );
}

export default HomeContent;
