import {
    SectionSheet,
    SectionSheetHeader,
    SectionSheetHeaderDescription,
    SectionSheetHeaderTitle,
    SectionSheetContent,
} from "@/components/SectionSheet";
import { cn } from "@/utils/utils";
import Image from "next/image";
import React, { ReactNode } from "react";
import { SectionGraphics, SectionProps, SectionWrapper } from "./Section";


function HeroSection({ title, description, imgSrc, children, className }: SectionProps) {
    return (
        <SectionWrapper className={className}>
            <SectionSheet className={cn("col-span-1", {"md:col-span-2": (imgSrc ? false : true)})}>
                <SectionSheetHeader className={cn({"items-start justify-start": (imgSrc ? true : false)})}>
                    <SectionSheetHeaderTitle className={cn({"text-start" : (imgSrc ? true : false)})}>
                        {title}
                    </SectionSheetHeaderTitle>
                    <SectionSheetHeaderDescription className={cn({"text-start xl:w-full lg:pr-2": (imgSrc ? true : false)})}>
                        {description}
                    </SectionSheetHeaderDescription>
                </SectionSheetHeader>
                <SectionSheetContent>{children}</SectionSheetContent>
            </SectionSheet>
            {imgSrc && (
                <SectionGraphics>
                    <Image alt={""} width={1362} height={1364} src={imgSrc} className={cn("max-h-[400px] object-contain aspect-square")} />
                </SectionGraphics>
            )}
        </SectionWrapper>
    );
}

export default Section;
