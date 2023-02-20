import BackgroundCircles from './BackgroundCircles'
import Links from './Links'
import TypeWriter from './TypeWriter'

type Props = {}
const Hero = ({}: Props) => {
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        src='https://raw.githubusercontent.com/anxhirr/anxhirr.github.io/main/src/assets/images/me-1.jpg'
        width={300}
        height={300}
        alt='anxhi'
        className='rounded-full z-20 object-cover'
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
