import Skill from './Skill'

const Skills = () => {
  return (
    <div className='min-h-screen flex flex-col '>
      <h2 className='section-h2'>Skills</h2>
      <h3 className='text-center pt-3 uppercase tracking-[3px] text-gray text-sm'>
        Hover over the icons for currency proficiency.
      </h3>
      <div className='flex justify-center items-center flex-1'>
        <div className='grid grid-cols-4 gap-5 items-center justify-center'>
          <Skill direction='left' />
          <Skill direction='left' />
          <Skill direction='left' />
          <Skill direction='left' />
          <Skill direction='right' />
          <Skill direction='right' />
          <Skill direction='right' />
          <Skill direction='right' />
          <Skill direction='left' />
          <Skill direction='left' />
          <Skill direction='left' />
          <Skill direction='left' />
        </div>
      </div>
    </div>
  )
}
export default Skills
