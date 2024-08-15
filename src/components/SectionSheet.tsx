import { cn } from "@/utils/utils";
import { ReactNode } from "react";

const SectionSheetStyles = {
    sheetStyles: "flex flex-col gap-6",
    headerStyles: "flex flex-col items-center justify-center gap-8 py-2",
    headerTitleStyles: "text-6xl font-semibold",
    headerDescriptionStyles:
        "text-xl w-10/12 md:w-7/12  text-wrap text-center",
    contentStyles: "w-full h-fit my-4",
    footerStyles: "w-full flex items-center justify-end",
};

interface SectionSheetProps {
    children: ReactNode;
    className?: string;
}

function SectionSheet({ children, className }: SectionSheetProps) {
    return (
        <div className={cn(SectionSheetStyles.sheetStyles, className)}>
            {children}
        </div>
    );
}

function SectionSheetHeaderTitle({ children, className }: SectionSheetProps) {
    return (
        <h1 className={cn(SectionSheetStyles.headerTitleStyles, className)}>
            {children}
        </h1>
    );
}

function SectionSheetHeaderDescription({
    children,
    className,
}: SectionSheetProps) {
    return (
        <p
            className={cn(
                SectionSheetStyles.headerDescriptionStyles,
                className
            )}
        >
            {children}
        </p>
    );
}

function SectionSheetHeader({ children, className }: SectionSheetProps) {
    return (
        <div className={cn(SectionSheetStyles.headerStyles, className)}>
            {children}
        </div>
    );
}

function SectionSheetContent({ children, className }: SectionSheetProps) {
    return (
        <div className={cn(SectionSheetStyles.contentStyles, className)}>
            {children}
        </div>
    );
}

function SectionSheetFooter({ children, className }: SectionSheetProps) {
    return (
        <div className={cn(SectionSheetStyles.footerStyles, className)}>
            {children}
        </div>
    );
}
export {
    SectionSheet,
    SectionSheetHeader,
    SectionSheetHeaderTitle,
    SectionSheetHeaderDescription,
    SectionSheetContent,
    SectionSheetFooter,
};
