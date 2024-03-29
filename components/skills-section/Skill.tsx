"use client"

import Image from 'next/image'
import { urlFor } from '../../lib/sanity.client'
import { SkillType } from '../../typings.s'
import { motion } from 'framer-motion'

type Props = {
  skill: SkillType
  // swipe can be 100 or -100
  swipe: string
}

const Skill = ({ skill, swipe }: Props) => {
  return (
    <motion.div
      className='group relative flex
   cursor-pointer'
      initial={{
        x: swipe,
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
      <Image
        src={urlFor(skill.icon).url()}
        alt={skill.name}
        width={500}
        height={500}
        className='rounded-full border border-gray object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale grayscale-0 transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 '>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>
            {skill.level}%
          </p>
        </div>
      </div>
    </motion.div>
  )
}
export default Skill
