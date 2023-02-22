import Image from 'next/image'
import { urlFor } from '../../lib/sanity.client'
import { ProjectType } from '../../typings.s'
import LinkTo from './LinkTo'

type Props = {
  current: number
  projects: ProjectType[]
}

const Project = ({ current, projects }: Props) => {
  return (
    <div className='text-center max-w-lg'>
      <Image
        src={urlFor(projects[current].icon).url() || ''}
        alt={projects[current].title}
        width={100}
        height={100}
      />
      <h3 className='text-4xl font-semibold'>
        <span className='decoration-secondary/50 underline'>
          Project {current + 1} of {projects.length} :
        </span>{' '}
        {projects[current].title}
      </h3>
      <p className='text-lg text-center mt-8'>
        {projects[current].description}
      </p>
      <LinkTo link={projects[current].link}>Visit</LinkTo>
    </div>
  )
}
export default Project