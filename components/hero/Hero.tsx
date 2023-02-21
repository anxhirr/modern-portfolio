import Image from 'next/image'
import { fetchLogo } from '../../lib/fetchFromSanity'
import { urlFor } from '../../lib/sanity.client'
import BackgroundCircles from './BackgroundCircles'
import Links from './Links'
import TypeWriter from './TypeWriter'

const Hero = async () => {
  const image = await fetchLogo()

  console.log('image', image)
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        src={urlFor(image[0].image).url()}
        width={200}
        height={200}
        alt={image[0].alt}
        className='rounded-full z-20 bg-secondary/40'
      />
      <div className='z-20'>
        <h2
          className='text-sm uppercase text-gray 
        tracking-[1em] pb-4'
        >
          Front End Developer
        </h2>
        <TypeWriter />
        <Links />
      </div>
    </div>
  )
}
export default Hero
