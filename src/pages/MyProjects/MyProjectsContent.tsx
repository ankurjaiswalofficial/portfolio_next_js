"use client";
import React from "react";
import { cn } from "@/utils/utils";
import MyProjectsCard from "../../components/MyProjectsCard";
import { Button } from "@/components/Button";
import { ClassNameProps } from "@/app/interfaces/common";
import { MyProjectsJSON } from "@/app/data/PageDefaultData";
import { MyProjectContentStyles } from "@/styles/PageDefault";
import { MyProjectDefaultTab } from "@/app/data/BrandDefault";


export default function MyProjectsContent({
    className,
}: Readonly<ClassNameProps>) {
    const [activeState, setActiveState] = React.useState<string>(MyProjectDefaultTab);
    const handleActiveState = (event: React.MouseEvent<HTMLButtonElement>) => {
        setActiveState(String(event.currentTarget.textContent ?? "All"));
    };
    return (
        <div
            className={cn(
                MyProjectContentStyles.bodyStyles,
                className
            )}
        >
            <div className={MyProjectContentStyles.headerStyles}>
                <Button
                    className={cn(MyProjectContentStyles.buttonStyles.default, (activeState === "All") && MyProjectContentStyles.buttonStyles.activeState)}
                    onClick={handleActiveState}
                >
                    All
                </Button>
                {MyProjectsJSON.map((val, index) => {
                    return (
                        <Button
                            key={"FilterButton_" + String(index)}
                            className={cn(MyProjectContentStyles.buttonStyles.default, (activeState === val.field) && MyProjectContentStyles.buttonStyles.activeState)}
                            onClick={handleActiveState}
                        >
                            {val.field}
                        </Button>
                    );
                })}
            </div>
            <div
                className={cn(
                    MyProjectContentStyles.contentWrapperStyles,
                    className
                )}
            >
                {MyProjectsJSON.map((val) => {
                    return val.cards.map((card, index) => {
                        return (
                            <MyProjectsCard
                                key={"ProjectCard_+" + String(index)}
                                field={val.field}
                                className={cn({
                                    hidden:
                                        activeState !== "All" &&
                                        activeState !== val.field,
                                })}
                                title={card.title}
                                img1Src={card.img1Src}
                                img2Src={card.img2Src}
                            />
                        );
                    });
                })}
            </div>
        </div>
    );
}
