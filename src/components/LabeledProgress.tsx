import React from 'react'
import Progress from './Progress'

export default function LabeledProgress({label, percent, ...props}) {
  return (
    <div key={props.key} className={"w-full pr-2 flex flex-col items-start justify-start gap-4"}>
        <h6 className="text-xl font-semibold">
            {label}
        </h6>
        <Progress percent={percent} />
    </div>
  )
}
