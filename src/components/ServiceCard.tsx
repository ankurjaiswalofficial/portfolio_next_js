import React from "react";
import Image from "next/image";
import { cn } from "@/utils/utils";
import { CNCRProps } from "@/app/interfaces/common";
import { ServiceCardProps } from "@/app/interfaces/Component";
import { ServiceCardStyles } from "@/styles/Default";

function ServiceCardSheetImage({ children, className }: Readonly<CNCRProps>) {
    return (
        <div
            className={cn(ServiceCardStyles.sheetStyles.imageStyles, className)}
        >
            {children}
        </div>
    );
}
function ServiceCardSheetTitle({ children, className }: Readonly<CNCRProps>) {
    return (
        <h1
            className={cn(ServiceCardStyles.sheetStyles.titleStyles, className)}
        >
            {children}
        </h1>
    );
}
function ServiceCardSheetDescription({ children, className }: Readonly<CNCRProps>) {
    return (
        <p
            className={cn(
                ServiceCardStyles.sheetStyles.descriptionStyles,
                className
            )}
        >
            {children}
        </p>
    );
}

function ServiceCardSheet({ className, children }: Readonly<CNCRProps>) {
    return (
        <div
            className={cn(ServiceCardStyles.sheetStyles.sheetStyles, className)}
        >
            {children}
        </div>
    );
}

function ServiceCard({ title, description, imgSrc }: Readonly<ServiceCardProps>) {
    return (
        <ServiceCardSheet>
            <ServiceCardSheetImage>
                <Image
                    width={80}
                    height={80}
                    alt={""}
                    src={imgSrc}
                    className={ServiceCardStyles.imageStyles}
                />
            </ServiceCardSheetImage>
            <ServiceCardSheetTitle>{title}</ServiceCardSheetTitle>
            <ServiceCardSheetDescription>
                {description}
            </ServiceCardSheetDescription>
        </ServiceCardSheet>
    );
}

export {
    ServiceCardSheetImage,
    ServiceCardSheetTitle,
    ServiceCardSheetDescription,
    ServiceCardSheet,
};
export default ServiceCard;
