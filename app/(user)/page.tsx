import Contact from '../../components/contact-section/Contact'
import Hero from '../../components/hero/Hero'
import Projects from '../../components/projects-section/Projects'
import Services from '../../components/services-section/Services'
import Skills from '../../components/skills-section/Skills'

const HomePage = () => {
  return (
    <>
      <section id='hero' className='snap-center'>
        {/* @ts-expect-error Server Component */}
        <Hero />
      </section>
      <section>{/* About  */}</section>
      <section>{/* Experience  */}</section>
      <section id='services' className='snap-start main-container'>
        {/* @ts-expect-error Server Component */}
        <Services />
      </section>
      <section id='skills' className='snap-center main-container'>
        {/* @ts-expect-error Server Component */}
        <Skills />
      </section>
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      <section id='contact' className='snap-start'>
        <Contact />
      </section>
    </>
  )
}
export default HomePage
