export const BrandLogoStyles = "w-72";
export const SocialIconStyles = "text-black w-8";
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
            "aspect-square rounded-lg bg-neutral-100 p-4 flex flex-col items-start justify-center gap-6",
    },
};

export const CarouselStyles = {
    listStyles: "",
    itemStyles: "opacity-30",
};

export const ImageGlassStyles =
    "h-20 w-[374px] bg-primary opacity-60 absolute top-20 left-[50%] translate-x-[-50%]";

export const ProgressStyles = {
    bodyStyles: "h-3 w-full bg-neutral-200 rounded-lg",
    indicatorStyles: "relative h-full bg-primary rounded-lg min-w-0",
    dotStyles:
        "absolute right-0 top-[50%] translate-y-[-50%] w-8 h-8 rounded-full bg-neutral-200 border-[3px] border-primary",
};

export const LabelledProgressStyles = {
    bodyStyles: "w-full pr-2 flex flex-col items-start justify-start gap-4",
    titleStyles: "text-xl font-semibold",
};
export const PageNavigationStyles = {
    navStyles: "flex flex-row items-center justify-center gap-8 font-medium",
    linkStyles: "text-xl hover:text-primary",
};

export const SectionSheetStyles = {
    sheetStyles: "flex flex-col gap-6",
    graphicStyles: "relative w-auto h-fit",
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
        default: "w-full flex flex-row gap-14 items-center justify-center",
        reverse: "flex-row-reverse",
    },
    imageStyles: "max-w-[620px] object-contain aspect-square mb-4",
    footerStyles: "items-center justify-center",
    sheetStyles: { imgSrc: "flex-1" },
    headerStyles: { imgSrc: "items-start justify-start" },
    titleStyles: { imgSrc: "text-start" },
    descriptionStyles: { imgSrc: "text-start xl:w-full lg:pr-2" },
};

export const TestimonialsCardStyles = {
    bodyStyles:
        "relative flex-shrink-0 w-8/12 lg:w-9/12 xl:w-[1087px] xl:h-[344px] p-8 py-6 gap-8 rounded-xl flex flex-row items-center bg-neutral-200/35",
    imgWrapperStyles:
        "h-36 xl:h-[235px] aspect-square rounded-full bg-neutral-100",
    imageStyles:
        "h-36 xl:h-[235px] aspect-square object-contain overflow-hidden rounded-full bg-neutral-100",
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
    bodyStyles: "flex flex-col items-start justify-start h-[601px] w-[445px] gap-6",
    imageWrapperStyles: {
        wrapper1: "px-4 h-[489px] w-[445px] rounded-lg bg-orange-100",
        wrapper2: "relative mx-auto flex flex-row justify-between w-11/12",
    },
    imageStyles: {
        image1: {
            wrapper: "w-[274px] h-[405px]", 
            imgStyles: "absolute bottom-0 left-0 z-10",
        },
        image2: {
            wrapper: "w-[274px] h-[489px]", 
            imgStyles: "absolute bottom-0 right-0 hover:z-20",
        },
    },
    contentWrapperStyles: "flex flex-col items-start justify-start gap-2",
    fieldNameStyles: "text-primary text-xl",
    titleStyles: "font-bold text-2xl w-full overflow-hidden text-ellipsis",
}

