'use client'

import { Carousel } from 'react-responsive-carousel'
import Project from './projects-section/Project'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'

type Props = {
  projects: any
}

const CarouselProvider = ({ projects }: Props) => {
  return (
    <Carousel
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type='button'
            onClick={onClickHandler}
            title={label}
            className='carousel-arrow left-0'
          >
            <MdOutlineArrowBackIos className='text-3xl' />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type='button'
            onClick={onClickHandler}
            title={label}
            className='carousel-arrow right-0'
          >
            <MdOutlineArrowForwardIos className='text-3xl' />
          </button>
        )
      }
      showIndicators={false}
      showStatus={false}
      stopOnHover={true}
      useKeyboardArrows={true}
      showThumbs={false}
      autoPlay
      infiniteLoop
      swipeable={true}
      emulateTouch={true}
    >
      {projects.map((project: any) => (
        <Project key={project._id} project={project} />
      ))}
    </Carousel>
  )
}
export default CarouselProvider
