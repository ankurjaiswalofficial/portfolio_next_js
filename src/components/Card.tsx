import React from "react";
import {
    CardSheet,
    CardSheetDescription,
    CardSheetImage,
    CardSheetTitle,
} from "./CardSheet";
import Image from "next/image";

function Card({ title, description, imgSrc }) {
    return (
        <CardSheet>
            <CardSheetImage>
                <Image width={80} height={80} alt={""} src={imgSrc} className={"h-20 w-auto"} />
            </CardSheetImage>
            <CardSheetTitle>{title}</CardSheetTitle>
            <CardSheetDescription>{description}</CardSheetDescription>
        </CardSheet>
    );
}

export default Card;
