import { fetchSkills } from '../../lib/fetchFromSanity'
import { SkillType } from '../../typings.s'
import Skill from './Skill'

const Skills = async () => {
  const skills = await fetchSkills()

  return (
    <div className='min-h-screen flex flex-col '>
      <h2 className='section-h2'>Skills</h2>
      <h3 className='section-h3'>
        Hover over the icons for current proficiency.
      </h3>
      <div className='flex justify-center items-center flex-1'>
        <div className='grid grid-cols-3 md:grid-cols-4 gap-5 md:gap-8 items-center justify-center'>
          {skills.map((skill: SkillType, i: number) => (
            <Skill key={skill._id} skill={skill} swipe={i % 2 === 0 ? '100' : '-100'} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Skills
