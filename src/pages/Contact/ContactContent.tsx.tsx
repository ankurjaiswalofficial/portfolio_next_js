import React from "react";
import { cn } from "@/utils/utils";
import { Button } from "@/components/Button";
import { ClassNameProps } from "@/app/interfaces/common";
import { ContactContentStyles } from "@/styles/PageDefault";

function ContactContent({ className }: Readonly<ClassNameProps>) {
    return (
        <form className={cn(ContactContentStyles.formStyles, className)}>
            <input
                type="email"
                placeholder="Enter Your Email"
                className={ContactContentStyles.inputStyles}
            />
            <Button className={ContactContentStyles.buttonStyles}>
                Contact Me
            </Button>
        </form>
    );
}

export default ContactContent;
