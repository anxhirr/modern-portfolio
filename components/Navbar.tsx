'use client'

import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className='sticky top-0 flex items-start xl:items-center justify-between p-5 z-20 max-w-7xl mx-auto'>
      <div>
        <motion.ul
          initial={{
            x: -100,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          className='flex gap-3'
        >
          <li>
            <AiFillLinkedin className='social-icon' />
          </li>
          <li>
            <AiFillGithub className='social-icon' />
          </li>
          <li>
            <AiFillInstagram className='social-icon' />
          </li>
        </motion.ul>
      </div>
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
    </nav>
  )
}
export default Navbar
