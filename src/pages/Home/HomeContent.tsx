import { Button } from '@/components/Button'
import React from 'react'

function HomeContent() {
  return (
    <div className="flex flex-col items-start justify-start pl-12">
      <h4 className="text-lg font-semibold">
      Hi I am
      </h4>
      <h4 className="text-2xl font-semibold text-primary">
      Muhammad Umair
      </h4>
      <h1 className='text-8xl font-bold'>UI & UX</h1>
      <h1 className='text-8xl font-bold w-full flex justify-end'>Designer</h1>
      <p className="text-xl font-normal py-7 text-justify">
      Lorem ipsum dolor sit amet consectetur. Tristique amet sed <br /> massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
      </p>
      <Button>Hire Me</Button>
    </div>
  )
}

export default HomeContent
