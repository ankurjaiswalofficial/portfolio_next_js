import { cn } from "@/utils/utils";
import Image from "next/image";
import React from "react";

function TestimonialCard({ className, imgSrc, name, description }) {
    return (
        name &&
        description && (
            <div
                className={cn(
                    "relative flex-shrink-0 w-8/12 lg:w-9/12 xl:w-[1087px] xl:h-[344px] p-8 py-6 gap-8 rounded-lg flex flex-row items-center bg-neutral-200/35",
                    className
                )}
            >
                <div className="h-36 xl:h-[235px] aspect-square rounded-full bg-neutral-100">
                    {imgSrc && (
                        <Image
                            width={1920}
                            height={1080}
                            alt=""
                            className="h-36 xl:h-[235px] aspect-square object-contain overflow-hidden rounded-full bg-neutral-100"
                            src={imgSrc}
                        />
                    )}
                </div>
                <div className="flex flex-col flex-grow items-center justify-start gap-4">
                    <h3 className="text-xl font-normal">
                        <span className="text-primary text-3xl font-bold -ml-4 pr-1 inline-block">
                            &ldquo;
                        </span>
                        {description}
                        <span className="text-primary text-3xl font-bold pt-3 pl-1 inline-block absolute">
                            &ldquo;
                        </span>
                    </h3>
                    <div className="flex flex-col items-start w-full">
                        <h5 className="text-2xl font-medium">Name</h5>
                        <h5 className="text-xl font-normal">
                            {String(name).toUpperCase()}
                        </h5>
                    </div>
                </div>
            </div>
        )
    );
}

export default TestimonialCard;
