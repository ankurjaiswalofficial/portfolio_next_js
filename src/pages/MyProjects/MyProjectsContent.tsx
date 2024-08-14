import Card from '@/components/Card'
import { myProjectsParagraph } from '@/utils/Defaults'
import { cn } from '@/utils/utils'
import React from 'react'
import MyProjectsCard from './MyProjectsCard'

const dummyServicesParagraph = "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"

export default function MyProjectsContent({className}) {
  return (
    <div className={cn("flex flex-row flex-wrap gap-8 items-center justify-center", className)}>
      <MyProjectsCard />
      <MyProjectsCard />
      <MyProjectsCard />
      <MyProjectsCard />
      <MyProjectsCard />
      <MyProjectsCard />
      <MyProjectsCard />
      <MyProjectsCard />
      <MyProjectsCard />
      <MyProjectsCard />
    </div>
  )
}
