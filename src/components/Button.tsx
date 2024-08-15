import React from "react";
import Link from "next/link";
import { cn } from "@/utils/utils";
import { ButtonProps, LinkButtonProps } from "@/app/interfaces/Component";
import { ButtonStyles } from "@/styles/Default";


function Button({ className, children, onClick, disabled }: Readonly<ButtonProps>) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(
                ButtonStyles.default,
                className,
                disabled && ButtonStyles.disabled
            )}
        >
            {children}
        </button>
    );
}

function LinkButton({
    href = "#",
    className,
    children,
    disabled,
}: Readonly<LinkButtonProps>) {
    return (
        <Link href={href}>
            <Button className={className} disabled={disabled}>
                {children}
            </Button>
        </Link>
    );
}

export { Button, LinkButton };
