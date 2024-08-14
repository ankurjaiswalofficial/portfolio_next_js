import { cn } from '@/utils/utils'
import React from 'react'

function CopyrightFooter({className}) {
  return (
    <div className={cn("w-full py-4 flex items-center justify-center bg-neutral-500 dark:bg-black text-white text-base", className)}>
        &copy; 2023&nbsp;<span className={cn("font-semibold text-primary")}>Mumair</span>&nbsp;All Rights Reserved, Inc.
    </div>
  )
}

export default CopyrightFooter
