"use client";
import React from "react";

export default function Progress({ percent }) {
    const styles = { width: `${percent}%` };

    return (
        <div className="h-3 w-full bg-neutral-200 rounded-lg">
            <div
                style={styles}
                className="relative h-full bg-primary rounded-lg min-w-0 "
            >
                <div className="absolute right-0 top-[50%] translate-y-[-50%] w-8 h-8 rounded-full bg-neutral-200 border-[3px] border-primary"></div>
            </div>
        </div>
    );
}
