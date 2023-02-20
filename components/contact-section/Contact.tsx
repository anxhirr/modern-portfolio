import { BsFillTelephoneFill } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='h-screen space-y-5'>
      <h2 className='section-h2'>Contact</h2>
      <h3 className='text-4xl font-semibold text-center'>
        I have got just what you need. Let's Talk
      </h3>
      <div className='flex flex-col items-center justify-center gap-7 pt-10 text-2xl'>
        <div className='flex items-center gap-3'>
          <BsFillTelephoneFill className='fill-secondary animate-pulse' />
          <p>+355683471478</p>
        </div>
        <div className='flex items-center gap-3'>
          <MdEmail className='fill-secondary animate-pulse' />
          <p>anxhirr@gmail.com</p>
        </div>
        <div className='flex items-center gap-3'>
          <HiLocationMarker className='fill-secondary animate-pulse' />
          <p>Tirane, Albania</p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
export default Contact
