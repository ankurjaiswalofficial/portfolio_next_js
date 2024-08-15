import { MouseEvent, ReactNode } from "react";
import { ClassNameProps } from "./common";

export interface Props {
    key?: React.Key | null;
    [key: string]: any;
}

export interface ButtonProps {
    className?: string;
    children: ReactNode;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

export interface LinkButtonProps {
    className?: string;
    children: ReactNode | string;
    href?: string;
    disabled?: boolean;
}

export interface ServiceCardProps {
    title: string;
    description: string;
    imgSrc: string;
}
export interface ProgressProps {
    percent?: number | string;
}
export interface LabelledProgressProps {
    label?: string;
    percent?: number | string;
}
export interface SectionProps {
    id?: string;
    title: string;
    description: string;
    children: ReactNode;
    className?: string;
    footerChildren?: ReactNode;
    imgSrc?: string | null;
    reverse?: boolean;
}

export interface MyProjectsCardProps extends ClassNameProps {
    field: string;
    title: string;
    img1Src: string;
    img2Src: string;
}

export interface TestimonialCardProps extends ClassNameProps {
    name: string;
    description: string;
    imgSrc: string;
}

export interface MyProjectCardProps {
    title: string;
    img1Src: string;
    img2Src: string;
}

export interface MyProjectFieldProps {
    field: string;
    cards: MyProjectCardProps[];
}

export interface HomeContentProps {
    name: string;
    profession1: string;
    profession2: string;
    description: string;
    hireURL?: string | null;
}
