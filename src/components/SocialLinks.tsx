import React from "react";
import Link from "next/link";
import { cn } from "@/utils/utils";
import { SocialLinksData } from "@/app/data/ComponentsDefault";
import { ClassNameProps } from "@/app/interfaces/common";
import { SocialIconStyles } from "@/styles/Default";

function SocialLinks({ className }: Readonly<ClassNameProps>) {
    return (
        <nav
            className={cn(
                "flex flex-row items-center justify-center gap-4",
                className
            )}
        >
            {SocialLinksData.map((val, index) => {
                return (
                    <Link
                        key={"IconLink_" + String(index)}
                        href={val.href}
                        className={SocialIconStyles}
                    >
                        {val.icon}
                    </Link>
                );
            })}
        </nav>
    );
}
export default SocialLinks;
