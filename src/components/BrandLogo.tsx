import React from "react";
import Image from "next/image";
import { cn } from "@/utils/utils";
import { ClassNameProps } from "@/app/interfaces/common";
import { BrandLogoStyles } from "@/styles/Default";
import { BrandLogoURL, BrandName } from "@/app/data/BrandDefault";

function BrandLogo({className}: Readonly<ClassNameProps>) {
    return (
        <Image
            width={1920}
            height={1080}
            priority={true}
            alt={BrandName}
            src={BrandLogoURL}
            className={cn(BrandLogoStyles, className)}
        />
    );
}

export default BrandLogo;
