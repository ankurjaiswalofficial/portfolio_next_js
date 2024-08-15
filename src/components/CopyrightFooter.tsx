import React from 'react'
import { cn } from '@/utils/utils'
import { CopyrightFooterStyles } from '@/styles/PageDefault'
import { ClassNameProps } from '@/app/interfaces/common'
import { BrandName } from '@/app/data/BrandDefault'

function CopyrightFooter({className}: Readonly<ClassNameProps>) {
  return (
    <div className={cn(CopyrightFooterStyles.bodyStyles, className)}>
        &copy; 2023&nbsp;<span className={CopyrightFooterStyles.hightLightStyles}>{BrandName}</span>&nbsp;All Rights Reserved, Inc.
    </div>
  )
}

export default CopyrightFooter
