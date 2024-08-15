import React from "react";
import { ChildrenProps } from "@/app/interfaces/common";
import { ImageGlassStyles } from "@/styles/Default";

function ImageGlass({ children }: Readonly<ChildrenProps>) {
    return <div className={ImageGlassStyles}>{children}</div>;
}

export default ImageGlass;
