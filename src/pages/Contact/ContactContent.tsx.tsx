import { Button } from '@/components/Button';
import { cn } from '@/utils/utils'
import React from 'react'

function ContactContent({className}) {
  return (
    <form className={cn("flex flex-row items-center justify-center gap-4 md:px-48 py-6", className)}>
      <input type="email" placeholder='Enter Your Email' className='text-sm bg-neutral-200/25 p-3.5 flex-grow rounded-md border outline-none border-gray-200 xl:max-w-[627px] h-14' />
      <Button className={"p-3 px-4"}>Contact Me</Button>
    </form>
  )
}

export default ContactContent
