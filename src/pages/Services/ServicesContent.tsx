import Card from '@/components/Card'
import { cn } from '@/utils/utils'
import React from 'react'

const dummyServicesParagraph = "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"

export default function ServicesContent({className}) {
  return (
    <div className={cn("grid grid-cols-4 gap-8 items-center justify-center", className)}>
      <Card title={"UI/UX"} description={dummyServicesParagraph} imgSrc={"/img/ui-ux.svg"} />
      <Card title={"Web Design"} description={dummyServicesParagraph} imgSrc={"/img/web-design.svg"} />
      <Card title={"App Design"} description={dummyServicesParagraph} imgSrc={"/img/app-design.svg"} />
      <Card title={"Graphic Design"} description={dummyServicesParagraph} imgSrc={"/img/graphic-design.svg"} />
    </div>
  )
}
