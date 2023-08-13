'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiOutlineMail } from 'react-icons/hi'

const GetInTouch = () => {
  return (
    <Link href='#contact'>
      <motion.button
        initial={{
          x: 100,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.1,
        }}
        className='flex items-center gap-2 text-gray '
      >
        <HiOutlineMail className='text-2xl' />

        <p className='hidden uppercase md:inline-flex text-sm'>Get in touch</p>
      </motion.button>
    </Link>
  )
}
export default GetInTouch
