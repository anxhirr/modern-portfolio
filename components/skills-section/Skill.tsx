'use client'

import { motion } from 'framer-motion'

type Props = {
  direction: 'left' | 'right'
}

const Skill = ({ direction }: Props) => {
  return (
    <motion.div
      className='group relative flex
   cursor-pointer'
      initial={{
        x: direction === 'left' ? -100 : 100,
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
    >
      <img
        src='https://www.sanity.io/static/images/logo_rounded_square.png'
        className='rounded-full w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
    </motion.div>
  )
}
export default Skill
