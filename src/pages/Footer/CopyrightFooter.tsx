import { cn } from '@/utils/utils'
import React from 'react'

function CopyrightFooter({className}) {
  return (
    <div className={cn("w-full py-4 flex items-center justify-center bg-neutral-500 dark:bg-black text-white text-xl xl:h-[84px]", className)}>
        &copy; 2023&nbsp;<span className={cn("font-bold text-primary")}>Mumair</span>&nbsp;All Rights Reserved, Inc.
    </div>
  )
}

export default CopyrightFooter
