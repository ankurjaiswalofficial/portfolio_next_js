import React from "react";
import { cn } from "@/utils/utils";
import Image from "next/image";
import ImageGlass from "./ImageGlass";
import { CNCRProps } from "@/app/interfaces/common";
import { SectionProps } from "@/app/interfaces/Component";
import { SectionSheetStyles, SectionStyles } from "@/styles/Default";

function SectionSheet({ children, className }: Readonly<CNCRProps>) {
    return (
        <div className={cn(SectionSheetStyles.sheetStyles, className)}>
            {children}
        </div>
    );
}

function SectionSheetHeaderTitle({ children, className }: Readonly<CNCRProps>) {
    return (
        <h1 className={cn(SectionSheetStyles.titleStyles, className)}>
            {children}
        </h1>
    );
}

function SectionSheetHeaderDescription({
    children,
    className,
}: Readonly<CNCRProps>) {
    return (
        <p className={cn(SectionSheetStyles.descriptionStyles, className)}>
            {children}
        </p>
    );
}

function SectionSheetHeader({ children, className }: Readonly<CNCRProps>) {
    return (
        <div className={cn(SectionSheetStyles.headerStyles, className)}>
            {children}
        </div>
    );
}

function SectionSheetContent({ children, className }: Readonly<CNCRProps>) {
    return (
        <div className={cn(SectionSheetStyles.contentStyles, className)}>
            {children}
        </div>
    );
}

function SectionSheetFooter({ children, className }: Readonly<CNCRProps>) {
    return (
        <div className={cn(SectionSheetStyles.footerStyles, className)}>
            {children}
        </div>
    );
}

function SectionSheetGraphics({ children, className }: Readonly<CNCRProps>) {
    return (
        <div className={cn(SectionSheetStyles.graphicStyles, className)}>
            {children}
        </div>
    );
}

function SectionSheetWrapper({ children, className }: Readonly<CNCRProps>) {
    return (
        <div className={cn(SectionSheetStyles.wrapperStyles, className)}>
            {children}
        </div>
    );
}

function Section({
    title,
    description,
    imgSrc,
    children,
    footerChildren,
    className,
    reverse = false,
}: Readonly<SectionProps>) {
    return (
        <SectionSheetWrapper className={className}>
            <div
                className={
                    (imgSrc &&
                        cn(
                            SectionStyles.wrapperInnerStyles.default,
                            reverse && SectionStyles.wrapperInnerStyles.reverse
                        )) ??
                    ""
                }
            >
                {imgSrc && (
                    <SectionSheetGraphics>
                        <Image
                            alt={""}
                            width={1362}
                            height={1364}
                            src={imgSrc}
                            className={SectionStyles.imageStyles}
                        />
                        <ImageGlass />
                        {footerChildren && (
                            <SectionSheetFooter
                                className={SectionStyles.footerStyles}
                            >
                                {footerChildren}
                            </SectionSheetFooter>
                        )}
                    </SectionSheetGraphics>
                )}
                <SectionSheet
                    className={cn(imgSrc && SectionStyles.sheetStyles)}
                >
                    {title && description && (
                        <SectionSheetHeader
                            className={cn(imgSrc && SectionStyles.headerStyles.imgSrc)}
                        >
                            <SectionSheetHeaderTitle
                                className={cn(
                                    imgSrc && SectionStyles.titleStyles.imgSrc
                                )}
                            >
                                {title}
                            </SectionSheetHeaderTitle>
                            <SectionSheetHeaderDescription
                                className={cn(
                                    imgSrc && SectionStyles.descriptionStyles.imgSrc
                                )}
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
        </SectionSheetWrapper>
    );
}
export {
    SectionSheet,
    SectionSheetGraphics,
    SectionSheetWrapper,
    SectionSheetHeader,
    SectionSheetHeaderTitle,
    SectionSheetHeaderDescription,
    SectionSheetContent,
    SectionSheetFooter,
};
export default Section;
