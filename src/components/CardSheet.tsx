import { cn } from "@/utils/utils";
import React from "react";


function CardSheetImage({children, className}) {
    return <div className={cn("h-20 max-h-20 pb-2", className)}>
        {children}
    </div>
}
function CardSheetTitle({children, className}) {
    return <h1 className={cn("text-3xl font-semibold", className)}>
        {children}
    </h1>
}
function CardSheetDescription({children, className}) {
    return <p className={cn("text-xl", className)}>
        {children}
    </p>
}

function CardSheet({ className, children }) {
    return <div className={cn("aspect-square rounded-lg bg-neutral-100 p-4 flex flex-col items-start justify-center gap-6", className)}>{children}</div>;
}

export {CardSheet, CardSheetImage, CardSheetTitle, CardSheetDescription};
