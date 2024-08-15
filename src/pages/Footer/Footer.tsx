import React from "react";
import { cn } from "@/utils/utils";
import PageNavigation from "@/components/PageNavigation";
import SocialLinks from "@/components/SocialLinks";
import BrandLogo from "@/components/BrandLogo";
import CopyrightFooter from "@/components/CopyrightFooter";
import { FooterStyles } from "@/styles/PageDefault";
import { ClassNameProps } from "@/app/interfaces/common";

export default function Footer({ className }: Readonly<ClassNameProps>) {
    return (
        <footer className={cn(FooterStyles.bodyStyles, className)}>
            <BrandLogo />
            <PageNavigation className={FooterStyles.navStyles} />
            <SocialLinks />
            <CopyrightFooter />
        </footer>
    );
}
