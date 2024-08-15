import React from "react";
import Section from "@/components/Section";
import { PageSectionsDefaultJSON } from "@/app/data/PageDefaultData";

export default function Content() {
    return (
        <>
            {PageSectionsDefaultJSON.map((val, index) => {
                return (
                    <Section
                        key={"PageSection_" + String(index)}
                        id={val.id}
                        title={val.title}
                        description={val.description}
                        imgSrc={val.imgSrc ?? null}
                        className={val.className ?? ""}
                        reverse={val.reverse ?? false}
                        footerChildren={val.footerChildren ?? null}
                    >
                        {val.children}
                    </Section>
                );
            })}
        </>
    );
}
