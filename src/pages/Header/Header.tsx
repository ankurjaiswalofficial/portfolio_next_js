import React from 'react'
import { cn } from '@/utils/utils'
import { BrandResumeURL } from '@/app/data/BrandDefault'
import { ClassNameProps } from '@/app/interfaces/common'
import { HeaderStyles } from '@/styles/PageDefault'
import BrandLogo from '@/components/BrandLogo'
import { LinkButton } from '@/components/Button'
import PageNavigation from '@/components/PageNavigation'

export default function Header({className}: Readonly<ClassNameProps>) {
  return (
    <header className={cn(HeaderStyles.bodyStyles, className)}>
      <div className={HeaderStyles.logoWrapperStyles}>
        <BrandLogo />
      </div>
      <div className={HeaderStyles.navWrapperStyles}>
        <PageNavigation />
        <LinkButton href={BrandResumeURL}>Download CV</LinkButton>
      </div>
    </header>
  )
}
