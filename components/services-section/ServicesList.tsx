import Service from './Service'
import { fetchServices } from '../../lib/fetchFromSanity'

const Services = async () => {
  const services = await fetchServices()

  return (
    <div className='min-h-screen'>
      <h2 className='section-h2'>Services</h2>
      <h3 className='section-h3'>Everything you need for a perfect Website</h3>

      <div className='mb-14 max-w-7xl mx-auto h-full mt-24'>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <Service services={services} />
        </ul>
      </div>
    </div>
  )
}
export default Services
