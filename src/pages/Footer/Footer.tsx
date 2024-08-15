import PageNavigation from "@/components/PageNavigation";
import SocialLinks from "@/components/SocialLinks";
import { cn } from "@/utils/utils";
import React from "react";
import CopyrightFooter from "./CopyrightFooter";
import BrandLogo from "@/components/BrandLogo";

export default function Footer({ className }) {
    return (
        <footer
            className={cn(
                "flex flex-col items-center justify-center gap-16 pt-16 bg-neutral-200/35",
                className
            )}
        >
            <BrandLogo />
            <PageNavigation className={"gap-6"} />
            <SocialLinks />
            <CopyrightFooter />
        </footer>
    );
}
