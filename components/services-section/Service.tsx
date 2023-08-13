'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ReactNode } from 'react'
import { urlFor } from '../../lib/sanity.client'

type Props = {
  services: {
    title: string
    description: string
    icon: ReactNode
    _id: string
  }[]
}

const Service = ({ services }: Props) => {
  console.log(services)


  return (
    <>
      {services.map((service, i) => {
        // swipe half of the services from left and half from right
        const halfSwipe = i % 2 === 0 ? '-100' : '100'

        return <motion.li
          initial={{
            x: halfSwipe,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          key={service._id}
          className='flex text-left gap-2'
        >
          <div className='mx-3'>
            <div className='p-4 w-16 h-16 grid place-items-center text-5xl bg-secondary rounded-full'>
              <Image
                src={urlFor(service.icon).url()}
                width={30}
                height={30}
                alt={service.title}
              />
            </div>
          </div>
          <div>
            <h3 className='services__title text-2xl mb-4'>{service.title}</h3>
            <p className='services__description font-thin text-sm'>
              {service.description}
            </p>
          </div>
        </motion.li>
      })}
    </>
  )
}
export default Service
