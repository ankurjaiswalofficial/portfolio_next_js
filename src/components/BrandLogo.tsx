import { logo } from "@/utils/Defaults";
import { cn } from "@/utils/utils";
import Image from "next/image";
import React from "react";

function BrandLogo() {
    return (
        <Image
            width={1920}
            height={1080}
            alt={"Brand Logo"}
            src={logo}
            className={cn("w-72")}
        />
    );
}

export default BrandLogo;
