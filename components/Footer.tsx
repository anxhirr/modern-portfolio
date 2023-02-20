'use client'

import Link from 'next/link'
import { AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='sticky bottom-5 w-full cursor-pointer'>
      <div className='flex items-center justify-center'>
        <Link href='#hero'>
          <AiOutlineArrowUp className='text-4xl rounded-full bg-secondary/10 p-1' />
        </Link>
      </div>
    </footer>
  )
}
export default Footer
