import Image from 'next/image'
import { urlFor } from '../../lib/sanity.client'
import { ProjectType } from '../../typings.s'
import { FiExternalLink } from 'react-icons/fi'

type Props = {
  project: ProjectType
}

const Project = ({ project }: Props) => {
  return (
    <div className='m-auto max-w-lg'>
      <Image
        src={urlFor(project.icon).url() || ''}
        alt={project.title}
        width={500}
        height={500}
      />
      <div className='text-4xl font-semibold'>{project.title} </div>
      <p className='text-md text-center mt-5'>{project.description}</p>
      <button
        className='flex items-center justify-center mt-5 m-auto bg-[#f7ab0a] font-semibold py-2 px-4 rounded-full'
        onClick={() => window.open(project.link, '_blank')}
      >
        <span className='pr-2'>Check out website</span>
        <FiExternalLink className='inline-block text-lgse' />
      </button>
    </div>
  )
}
export default Project
