import React from "react";
import Image from "next/image";
import { cn } from "@/utils/utils";
import { TestimonialCardProps } from "@/app/interfaces/Component";
import { TestimonialsCardStyles } from "@/styles/Default";

function TestimonialCard({
    className,
    imgSrc,
    name,
    description,
}: Readonly<TestimonialCardProps>) {
    return (
        name &&
        description && (
            <div className={cn(TestimonialsCardStyles.bodyStyles, className)}>
                <div className={TestimonialsCardStyles.imgWrapperStyles}>
                    {imgSrc && (
                        <Image
                            width={1920}
                            height={1080}
                            alt=""
                            className={cn(
                                "w-auto h-auto",
                                TestimonialsCardStyles.imageStyles
                            )}
                            src={imgSrc}
                        />
                    )}
                </div>
                <div className={TestimonialsCardStyles.contentWrapperStyles}>
                    <h3 className={TestimonialsCardStyles.descriptionStyles}>
                        <span
                            className={TestimonialsCardStyles.leftQuoteStyles}
                        >
                            &ldquo;
                        </span>
                        {description}
                        <span
                            className={TestimonialsCardStyles.rightQuoteStyles}
                        >
                            &ldquo;
                        </span>
                    </h3>
                    <div className={TestimonialsCardStyles.descriptionStyles}>
                        <h5
                            className={
                                TestimonialsCardStyles.designationNameStyles
                            }
                        >
                            Name
                        </h5>
                        <h5
                            className={
                                TestimonialsCardStyles.designationWrapperStyles
                            }
                        >
                            {String(name).toUpperCase()}
                        </h5>
                    </div>
                </div>
            </div>
        )
    );
}

export default TestimonialCard;
