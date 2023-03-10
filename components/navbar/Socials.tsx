'use client'

import Image from 'next/image'
import { urlFor } from '../../lib/sanity.client'
import { SocialType } from '../../typings.s'

type Props = {
  socials: SocialType[]
}

import { motion } from 'framer-motion'

const Socials = ({ socials }: Props) => {
  return (
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
        {socials.map((social: SocialType) => (
          <li key={social._id}>
            <a href={social.url} target='_blank'>
              <Image
                src={urlFor(social.icon).url()}
                width={30}
                height={30}
                alt='social icon'
                className='social-icon'
              />
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  )
}
export default Socials
