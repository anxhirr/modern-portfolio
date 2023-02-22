'use client'

import { useState } from 'react'

import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs'
import Project from './projects-section/Project'

const Carousel = ({ projects }: any) => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    const isLastSlide = current === projects.length - 1
    const newCurrent = isLastSlide ? 0 : current + 1
    setCurrent(newCurrent)
  }
  const prevSlide = () => {
    const isFirstSlide = current === 0
    const newCurrent = isFirstSlide ? projects.length - 1 : current - 1
    setCurrent(newCurrent)
  }

  return (
    <div className='flex-1 flex justify-between items-center z-20 relative group'>
      <div
        onClick={() => prevSlide()}
        className='absolute hidden group-hover:block text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
      >
        <BsChevronCompactLeft size={30} />
      </div>

      <div className='mx-auto rounded-2xl bg-center duration-500'>
        <Project current={current} projects={projects} />
      </div>

      <div
        onClick={() => nextSlide()}
        className='absolute hidden right-0 group-hover:block text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
      >
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  )
}
export default Carousel
