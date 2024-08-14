import {
    SectionSheet,
    SectionSheetHeader,
    SectionSheetHeaderDescription,
    SectionSheetHeaderTitle,
    SectionSheetContent,
    SectionSheetFooter,
} from "@/components/SectionSheet";
import { cn } from "@/utils/utils";
import Image from "next/image";
import React, { ReactNode } from "react";
import ImageGlass from "./ImageGlass";

interface SectionProps {
    title: string;
    description: string;
    children: ReactNode;
    className?: string;
    footerChildren?: ReactNode;
    imgSrc?: string;
    reverse?: boolean;
}

function SectionGraphics({ children, className }: SectionProps) {
    return <div className={cn("w-auto h-fit", className)}>{children}</div>;
}
// grid grid-cols-1 md:grid-cols-2 grid-flow-col
function SectionWrapper({ children, className }: SectionProps) {
    return <div className={cn("w-full max-w-[1400px] py-8 mb-8 mx-auto", className)}>{children}</div>;
}

function Section({
    title,
    description,
    imgSrc,
    children,
    footerChildren,
    className,
    reverse=false
}: SectionProps) {
    return (
        <SectionWrapper className={className}>
            <div
                className={cn(
                    "w-full flex flex-row gap-14 items-center justify-center",
                    {"flex-row-reverse": (reverse)}
                )}
            >
                {imgSrc && (
                    <SectionGraphics className="relative">
                        <Image
                            alt={""}
                            width={1362}
                            height={1364}
                            src={imgSrc}
                            className={cn(
                                "max-w-[620px] object-contain aspect-square mb-4"
                            )}
                        />
                        <ImageGlass />
                        {footerChildren && (
                            <SectionSheetFooter className="items-center justify-center">
                                {footerChildren}
                            </SectionSheetFooter>
                        )}
                    </SectionGraphics>
                )}
                <SectionSheet className={cn({"flex-1" : (imgSrc ? true : false)})}>
                    {title && description && (
                        <SectionSheetHeader
                            className={cn({
                                "items-start justify-start": imgSrc
                                    ? true
                                    : false,
                            })}
                        >
                            <SectionSheetHeaderTitle
                                className={cn({
                                    "text-start": imgSrc ? true : false,
                                })}
                            >
                                {title}
                            </SectionSheetHeaderTitle>
                            <SectionSheetHeaderDescription
                                className={cn({
                                    "text-start xl:w-full lg:pr-2": imgSrc
                                        ? true
                                        : false,
                                })}
                            >
                                {description}
                            </SectionSheetHeaderDescription>
                        </SectionSheetHeader>
                    )}
                    <SectionSheetContent>{children}</SectionSheetContent>
                </SectionSheet>
            </div>
            {!imgSrc && footerChildren && (
                <SectionSheetFooter>{footerChildren}</SectionSheetFooter>
            )}
        </SectionWrapper>
    );
}
export { SectionGraphics, SectionWrapper, SectionProps };
export default Section;
