export const BrandLogoStyles = "w-72";
export const SocialIconStyles = "text-black w-8 dark:text-white dark:fill-white";
export const ButtonStyles = {
    default:
        "p-1.5 px-3 rounded-xl text-xl font-semibold bg-primary text-white text-nowrap w-48 h-14 ",
    disabled: "opacity-50 cursor-not-allowed",
};

export const ServiceCardStyles = {
    imageStyles: "h-20 w-auto",
    sheetStyles: {
        imageStyles: "h-20 max-h-20 pb-2",
        titleStyles: "text-3xl font-semibold",
        descriptionStyles: "text-xl",
        sheetStyles:
            "min-w-[18.125rem] w-[20.375rem] aspect-square rounded-lg bg-neutral-100 text-black p-4 flex flex-col items-start justify-center gap-6",
    },
};

export const CarouselStyles = {
    listStyles: "",
    itemStyles: "opacity-30",
};

export const ImageGlassStyles =
    "h-20 w-[23.375rem] bg-primary opacity-60 absolute top-20 left-[50%] translate-x-[-50%]";

export const ProgressStyles = {
    bodyStyles: "h-3 w-full bg-neutral-200 rounded-lg",
    indicatorStyles: "relative h-full bg-primary rounded-lg min-w-0",
    dotStyles:
        "absolute right-0 top-[50%] translate-y-[-50%] w-8 h-8 rounded-full bg-neutral-200 border-[0.1875rem] border-primary",
};

export const LabelledProgressStyles = {
    bodyStyles: "w-full pr-2 flex flex-col items-start justify-start gap-4",
    titleStyles: "text-xl font-semibold",
};
export const PageNavigationStyles = {
    navStyles: "flex flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-8 font-medium",
    linkStyles: "text-xl hover:text-primary",
};

export const SectionSheetStyles = {
    sheetStyles: "flex flex-col gap-6",
    graphicStyles: "relative w-auto h-fit hidden lg:block",
    wrapperStyles: "w-full max-w-[1400px] py-8 mb-8 mx-auto",
    headerStyles:
        "flex flex-col items-center justify-center gap-8 py-2 max-w-[1400px] mx-auto",
    titleStyles: "text-6xl font-semibold",
    descriptionStyles: "text-xl w-10/12 md:w-2/3  text-wrap text-center",
    contentStyles: "w-full h-fit my-4",
    footerStyles: "w-full flex items-center justify-end",
};

export const SectionStyles = {
    wrapperInnerStyles: {
        default: "w-full flex flex-col lg:flex-row gap-14 items-center justify-center",
        reverse: "flex-col lg:flex-row-reverse",
    },
    imageStyles: "max-w-80 lg:max-w-[38.75rem] object-contain aspect-square mb-4",
    footerStyles: "items-center justify-center",
    sheetStyles: { imgSrc: "flex-1 px-8 lg:px-0" },
    headerStyles: { imgSrc: "items-start justify-start" },
    titleStyles: { imgSrc: "text-start" },
    descriptionStyles: { imgSrc: "text-start xl:w-full lg:pr-2" },
};

export const TestimonialsCardStyles = {
    bodyStyles:
        "relative flex-shrink-0 w-5/12 lg:w-[67.9375rem] lg:h-[21.5] p-8 py-6 gap-8 rounded-xl flex flex-col lg:flex-row items-center bg-neutral-200/35 dark:bg-neutral-200 text-black",
    imgWrapperStyles:
        "h-36 lg:h-[14.6875rem] aspect-square rounded-full bg-neutral-100",
    imageStyles:
        "h-36 lg:h-[14.6875rem] aspect-square object-contain overflow-hidden rounded-full bg-neutral-100",
    contentWrapperStyles:
        "flex flex-col flex-grow items-center justify-start gap-4",
    descriptionStyles: "text-xl font-normal text-start w-full",
    leftQuoteStyles: "text-primary text-3xl font-bold -ml-4 pr-1 inline-block",
    rightQuoteStyles:
        "text-primary text-3xl font-bold pt-3 pl-1 inline-block absolute",
    designationWrapperStyles: "flex flex-col items-start w-full",
    designationNameStyles: "text-2xl font-medium",
    designationContentStyles: "text-xl font-normal",
};


export const MyProjectsCardStyles = {
    bodyStyles: "flex flex-col items-start justify-start h-[37.5625rem] w-[27.8125rem] gap-6",
    imageWrapperStyles: {
        wrapper1: "px-4 h-[30.5625rem] w-[27.8125rem] rounded-lg bg-orange-100",
        wrapper2: "relative mx-auto flex flex-row justify-between w-11/12 overflow-hidden",
    },
    imageStyles: {
        image1: {
            wrapper: "w-[17.125rem] h-[25.3125rem]",
            imgStyles: "w-[17.125rem] h-[25.3125rem] absolute bottom-0 left-0 z-10",
        },
        image2: {
            wrapper: "w-[17.125rem] h-[30.5625rem]",
            imgStyles: "w-[17.125rem] h-[30.5625rem] absolute bottom-0 right-0 hover:z-20",
        },
    },
    contentWrapperStyles: "flex flex-col items-start justify-start gap-2",
    fieldNameStyles: "text-primary text-xl",
    titleStyles: "font-bold text-2xl w-full overflow-hidden text-ellipsis",
}

