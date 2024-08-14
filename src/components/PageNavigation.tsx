import { cn } from "@/utils/utils";
import Link from "next/link";
import React from "react";

const pageNavLinkStyles = cn("text-xl hover:text-primary");
const navigationLinks = [
    {
        label: "Home",
        href: "#home",
    },
    {
        label: "About Me",
        href: "#about_me",
    },
    {
        label: "Services",
        href: "#services",
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "Testimonials",
        href: "#testimonals",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];
function PageNavigation({ className }) {
    return (
        <nav
            className={cn(
                "flex flex-row items-center justify-center gap-8 font-medium",
                className
            )}
        >
            {navigationLinks.map((link) => (
                <Link key={link.label} href={link.href} className={pageNavLinkStyles}>
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}

export default PageNavigation;
