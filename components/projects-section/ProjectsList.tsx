import { fetchProjects } from '../../lib/fetchFromSanity'
import Carousel from '../Carousel'

const Projects = async () => {
  const projects = await fetchProjects()

  return (
    <>
      <div className='min-h-screen main-container flex flex-col'>
        <h2 className='section-h2'>Projects</h2>
        <h3 className='section-h3'>
          Click the image to be taken to the project.
        </h3>
        <Carousel projects={projects} />
      </div>
      <div className='w-full absolute top-[30%] h-[25rem]  bg-[#f7ab0a]/10 skew-y-12 z-0' />
    </>
  )
}
export default Projects
