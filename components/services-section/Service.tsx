'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  services: {
    title: string
    description: string
    icon: ReactNode
    shouldSwipeFromLeft: boolean
  }[]
}

const Service = ({ services }: Props) => {
  return (
    <>
      {services.map((service, index) => (
        <motion.li
          initial={{
            x: service.shouldSwipeFromLeft ? -100 : 100,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          key={index}
          className='flex text-left'
        >
          <div className='mx-3'>
            <div className='p-4 w-16 h-16 grid place-items-center text-5xl'>
              {service.icon}
            </div>
          </div>
          <div>
            <h3 className='services__title text-2xl mb-4'>{service.title}</h3>
            <p className='services__description font-thin text-sm'>
              {service.description}
            </p>
          </div>
        </motion.li>
      ))}
    </>
  )
}
export default Service
