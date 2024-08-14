import { cn } from "@/utils/utils";
import Link from "next/link";
import React from "react";

function Button({ className, children }) {
    return (
        <button className={cn("p-1.5 px-3 rounded-md text-xl bg-primary text-white text-nowrap w-48 h-14", className)}>
            {children}
        </button>
    );
}

function LinkButton({ href, className, children }) {
    return (
        <Link href={href}>
            <Button className={className}>{children}</Button>
        </Link>
    );
}

export { Button, LinkButton };
