import React from "react";
import Link from "next/link";
import { cn } from "@/utils/utils";
import { PageNavigationData } from "@/app/data/ComponentsDefault";
import { ClassNameProps } from "@/app/interfaces/common";
import { PageNavigationStyles } from "@/styles/Default";

function PageNavigation({ className }: Readonly<ClassNameProps>) {
    return (
        <nav
            className={cn(
                PageNavigationStyles.navStyles,
                className
            )}
        >
            {PageNavigationData.map((link) => (
                <Link key={link.label} href={link.href} className={PageNavigationStyles.linkStyles}>
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}

export default PageNavigation;
