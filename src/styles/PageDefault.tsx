export const AboutMeContentStyles =
    "flex flex-col items-start justify-start w-full h-fit gap-4";

export const ContactContentStyles = {
    formStyles: "flex flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-4 md:px-48 py-6",
    inputStyles:
        "text-xl bg-neutral-200/35 p-3.5 flex-grow rounded-xl border outline-none border-gray-200 xl:max-w-[38.75rem] h-[4.6875rem]",
    buttonStyles: "p-3 px-4 w-[13.875rem] h-[4.6875rem] font-semibold text-2xl",
};

export const CopyrightFooterStyles = {
    bodyStyles:
        "w-full py-4 flex items-center justify-center bg-neutral-500 dark:bg-black text-white text-xl xl:h-[5.25rem]",
    hightLightStyles: "font-bold text-primary",
};

export const FooterStyles = {
    bodyStyles:
        "flex flex-col items-center justify-center gap-16 pt-16 bg-neutral-200/35",
    navStyles: "gap-6",
};

export const HeaderStyles = {
    bodyStyles: "px-4 lg:px-0 py-8 flex items-center justify-between max-w-[1400px] mx-auto",
    logoWrapperStyles: "w-fit",
    navWrapperStyles:
        "w-fit hidden lg:flex flex-row items-center justify-end flex-grow gap-6",
};

export const HomeContentStyles = {
    bodyStyles: "flex flex-col items-start justify-start pl-12",
    wishStyles: "text-lg font-semibold",
    nameStyles: "text-2xl font-semibold text-primary",
    profession1Styles: "text-8xl font-bold",
    profession2Styles: "text-8xl font-bold w-full flex justify-start lg:justify-end",
    descriptionStyles: "text-xl font-normal py-7 text-justify",
};

export const ServicesContentStyles =
    "flex flex-row flex-wrap gap-8 items-center justify-center";
    
export const TestimonialsContentStyles = "w-full";

export const MyProjectContentStyles = {
    bodyStyles: "flex flex-col gap-8 items-center justify-center",
    headerStyles:
        "w-full flex flex-row flex-wrap items-center justify-center gap-8",
    buttonStyles: {
        default:
            "bg-gray-100/75 font-normal text-2xl w-fit px-6 border text-black border-neutral-400",
        activeState: "bg-primary border-primary text-white",
    },
    contentWrapperStyles: "flex flex-wrap gap-8 items-center justify-center",
};
