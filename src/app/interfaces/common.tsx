import { ReactNode } from "react";

export interface ClassNameProps {
    readonly className?: string;
}

export interface ChildrenProps {
    readonly children?: ReactNode;
}

export interface CNCRProps extends ClassNameProps, ChildrenProps{}
