import Image from 'next/image'
import Link from 'next/link'
import BackgroundCircles from './BackgroundCircles'
import TypeWriter from './TypeWriter'

type Props = {}
const Hero = ({}: Props) => {
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        src='https://raw.githubusercontent.com/anxhirr/anxhirr.github.io/main/src/assets/images/me-1.jpg'
        width={100}
        height={100}
        alt='anxhi'
      />
      <div className='z-20'>
        <h2
          className='text-sm uppercase text-gray 
        tracking-[1em] pb-4'
        >
          Front End Developer
        </h2>
        <TypeWriter />
        <div className='pt-6'>
          <Link href='about' className='heroBtn'>
            About
          </Link>
          <Link href='experience' className='heroBtn'>
            Experience
          </Link>
          <Link href='skills' className='heroBtn'>
            Skills
          </Link>
          <Link href='project' className='heroBtn'>
            Project
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Hero
