import BrandLogo from '@/components/BrandLogo'
import { Button } from '@/components/Button'
import PageNavigation from '@/components/PageNavigation'
import { cn } from '@/utils/utils'
import React from 'react'

export default function Header({className}) {
  return (
    <header className={cn("py-8 flex items-center justify-between max-w-[1400px] mx-auto", className)}>
      <div className={"w-fit"}>
        <BrandLogo />
      </div>
      <div className="w-fit flex flex-row items-center justify-end flex-grow gap-6">
        <PageNavigation />
        <Button>Download CV</Button>
      </div>
    </header>
  )
}
