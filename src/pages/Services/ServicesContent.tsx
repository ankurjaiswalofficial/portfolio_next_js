import React from "react";
import { cn } from "@/utils/utils";
import { ServicesContentData } from "@/app/data/PageDefaultData";
import { ClassNameProps } from "@/app/interfaces/common";
import { ServicesContentStyles } from "@/styles/PageDefault";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesContent({ className }: Readonly<ClassNameProps>) {
    return (
        <div className={cn(ServicesContentStyles, className)}>
            {ServicesContentData.map((val, index) => {
                return (
                    <ServiceCard
                        key={"ServiceCard_" + String(index)}
                        title={val.title}
                        description={val.description}
                        imgSrc={val.imgSrc}
                    />
                );
            })}
        </div>
    );
}
