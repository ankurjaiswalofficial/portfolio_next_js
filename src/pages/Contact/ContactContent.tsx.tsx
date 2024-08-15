import { Button } from '@/components/Button';
import { cn } from '@/utils/utils'
import React from 'react'

function ContactContent({className}) {
  return (
    <form className={cn("flex flex-row items-center justify-center gap-4 md:px-48 py-6", className)}>
      <input type="email" placeholder='Enter Your Email' className='text-xl bg-neutral-200/35 p-3.5 flex-grow rounded-xl border outline-none border-gray-200 xl:max-w-[620px] h-[75px]' />
      <Button className={"p-3 px-4 w-[222px] h-[75px]"}>Contact Me</Button>
    </form>
  )
}

export default ContactContent
