import React from "react";
import Image from "next/image";
import { cn } from "@/utils/utils";
import { MyProjectsCardProps } from "@/app/interfaces/Component";
import { MyProjectsCardStyles } from "@/styles/Default";

function MyProjectsCard({
    className,
    field,
    title,
    img1Src,
    img2Src,
}: Readonly<MyProjectsCardProps>) {
    return (
        <div className={cn(MyProjectsCardStyles.bodyStyles, className)}>
            <div className={MyProjectsCardStyles.imageWrapperStyles.wrapper1}>
                <div
                    className={MyProjectsCardStyles.imageWrapperStyles.wrapper2}
                >
                    <div
                        className={
                            MyProjectsCardStyles.imageStyles.image1.wrapper
                        }
                    >
                        <Image
                            width={274}
                            height={405}
                            alt={title}
                            src={img1Src}
                            className={cn(
                                "w-auto h-auto",
                                MyProjectsCardStyles.imageStyles.image1
                                    .imgStyles
                            )}
                        />
                    </div>
                    <div
                        className={
                            MyProjectsCardStyles.imageStyles.image2.wrapper
                        }
                    >
                        <Image
                            width={274}
                            height={405}
                            alt={title}
                            src={img2Src}
                            className={cn(
                                "w-auto h-auto",
                                MyProjectsCardStyles.imageStyles.image2
                                    .imgStyles
                            )}
                        />
                    </div>
                </div>
            </div>
            <div className={MyProjectsCardStyles.contentWrapperStyles}>
                <h5 className={MyProjectsCardStyles.fieldNameStyles}>
                    {field}
                </h5>
                <h4 className={MyProjectsCardStyles.titleStyles}>{title}</h4>
            </div>
        </div>
    );
}

export default MyProjectsCard;
