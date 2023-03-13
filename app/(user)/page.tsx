import Contact from '../../components/contact-section/Contact'
import Hero from '../../components/hero/Hero'
import Projects from '../../components/projects-section/ProjectsList'
import Services from '../../components/services-section/ServicesList'
import Skills from '../../components/skills-section/SkillsList'

const HomePage = () => {
  return (
    <>
      <section id='hero' className='snap-center'>
        {/* @ts-expect-error Server Component */}
        <Hero />
      </section>
      <section id='services' className='snap-start main-container'>
        {/* @ts-expect-error Server Component */}
        <Services />
      </section>
      <section id='skills' className='snap-center main-container'>
        {/* @ts-expect-error Server Component */}
        <Skills />
      </section>
      <section id='projects' className='snap-start relative'>
        {/* @ts-expect-error Server Component */}
        <Projects />
      </section>
      <section id='contact' className='snap-start'>
        <Contact />
      </section>
    </>
  )
}
export default HomePage
