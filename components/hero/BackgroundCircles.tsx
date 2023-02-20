'use client'

import { motion } from 'framer-motion'

const BackgroundCircles = () => {
  return (
    <div className='relative flex items-center justify-center'>
      <motion.div className='bg-circles border w-[20rem] h-[20rem] animate-ping' />
      <motion.div className='bg-circles border w-[40rem] h-[40rem]  border-secondary animate-pulse ' />
      <motion.div className='bg-circles w-[50rem] h-[50rem] ' />
      <motion.div className='bg-circles border w-[30rem] h-[30rem] ' />
      <motion.div className='bg-circles w-[20rem] h-[20rem] ' />
    </div>
  )
}
export default BackgroundCircles
