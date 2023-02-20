import Hero from '../../components/hero/Hero'

const HomePage = () => {
  return (
    <>
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      <section>{/* About  */}</section>
      <section>{/* Experience  */}</section>
      <section>{/* Projects */}</section>
      <section>{/* Contact */}</section>
    </>
  )
}
export default HomePage
