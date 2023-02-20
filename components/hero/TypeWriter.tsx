'use client'

import { useTypewriter, Cursor } from 'react-simple-typewriter'

const TypeWriter = () => {
  const [text, count] = useTypewriter({
    words: ["Hi, The Name's Anxhi", 'Design. Build. Improve.', '<CodeAddict/>'],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 50,
  })
  return (
    <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
      <span>{text}</span>
      <Cursor cursorColor='#F7AB0A' />
    </h1>
  )
}
export default TypeWriter
