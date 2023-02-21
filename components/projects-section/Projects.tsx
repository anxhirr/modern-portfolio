import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Projects = () => {
  return (
    <div className='min-h-screen relative'>
      <div className='main-container'>
        <h2 className='section-h2'>Projects</h2>
        <div>
          {/* project  */}
          {/* project  */}
          {/* project  */}
        </div>

        <div
          id='controls-carousel'
          className='relative '
          data-carousel='static'
        >
          <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
            <div
              className='hidden duration-700 ease-in-out'
              data-carousel-item
            ></div>
            <div
              className='hidden duration-700 ease-in-out'
              data-carousel-item='active'
            ></div>
            <div
              className='hidden duration-700 ease-in-out'
              data-carousel-item
            ></div>
            <div
              className='hidden duration-700 ease-in-out'
              data-carousel-item
            ></div>
            <div
              className='hidden duration-700 ease-in-out'
              data-carousel-item
            ></div>
          </div>

          <button
            type='button'
            className='absolute top-0 left-0 z-30 flex items-center justify-center h-full -ml-8 cursor-pointer group focus:outline-none'
            data-carousel-prev
          >
            <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
              <AiOutlineArrowLeft />
              <span className='sr-only'>Previous</span>
            </span>
          </button>
          <button
            type='button'
            className='absolute top-0 right-0 z-30 flex items-center justify-center h-full -mr-8  cursor-pointer group focus:outline-none'
            data-carousel-next
          >
            <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
              <AiOutlineArrowRight />
              <span className='sr-only'>Next</span>
            </span>
          </button>
        </div>
      </div>

      <div className='w-full absolute top-[30%] h-[25rem]  bg-[#f7ab0a]/10 skew-y-12' />
    </div>
  )
}
export default Projects
