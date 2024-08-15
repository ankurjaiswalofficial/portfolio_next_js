import React from "react";
import {
    LabelledProgressProps,
    ProgressProps,
} from "@/app/interfaces/Component";
import { LabelledProgressStyles, ProgressStyles } from "@/styles/Default";

function Progress({ percent }: Readonly<ProgressProps>) {
    const styles = { width: `${percent}%` };

    return (
        <div className={ProgressStyles.bodyStyles}>
            <div style={styles} className={ProgressStyles.indicatorStyles}>
                <div className={ProgressStyles.dotStyles}></div>
            </div>
        </div>
    );
}

function LabeledProgress({ label, percent}: Readonly<LabelledProgressProps>) {
    return (
        <div className={LabelledProgressStyles.bodyStyles}>
            <h6 className={LabelledProgressStyles.titleStyles}>{label}</h6>
            <Progress percent={percent} />
        </div>
    );
}

export { Progress };
export default LabeledProgress;
