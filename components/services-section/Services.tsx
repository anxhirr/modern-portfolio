import { AiOutlineSearch } from 'react-icons/ai'
import { IoBusinessSharp } from 'react-icons/io5'
import { MdDesignServices } from 'react-icons/md'
import { MdDeveloperMode } from 'react-icons/md'
import { TbTestPipe } from 'react-icons/tb'
import { BiSupport } from 'react-icons/bi'
import Service from './Service'

const SERVICES = [
  {
    title: 'Website Review',
    description:
      'I make sure your website is performing its best by thoroughly reviewing it before making any changes.',
    icon: <AiOutlineSearch />,
    shouldSwipeFromLeft: true,
  },
  {
    title: 'Business Strategy',
    description:
      'We discuss what you are trying to achieve, and place goals on your website planning how to achieve that. We also discuss your target audience and how to reach them.',
    icon: <IoBusinessSharp />,
    shouldSwipeFromLeft: false,
  },
  {
    title: 'User Experience Design',
    description:
      'I design your website to be as easy to use as possible while guiding users towards the end goal. I also make sure your website is visually appealing and easy to navigate.',
    icon: <MdDesignServices />,
    shouldSwipeFromLeft: true,
  },
  {
    title: 'Tailored Development',
    description:
      'I build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product. I will make sure your website is built to your specifications.',
    icon: <MdDeveloperMode />,
    shouldSwipeFromLeft: false,
  },
  {
    title: 'Rigorous Testing',
    description:
      'I ensure your website is of excellent quality by thoroughly testing using multiple approaches.  I also make sure your website is compatible with all major browsers and devices.',
    icon: <TbTestPipe />,
    shouldSwipeFromLeft: true,
  },
  {
    title: 'Ongoing Support',
    description:
      'Your website is always growing. Whether you’re adding new features or making improvements I’m here to help. I will also make sure your website is always up to date with the latest security patches.',
    icon: <BiSupport />,
    shouldSwipeFromLeft: false,
  },
]

const Services = () => {
  return (
    <div className='min-h-screen'>
      <h2 className='section-h2'>Services</h2>
      <h3 className='section-h3'>Everything you need for a perfect Website</h3>

      <div className='mb-14 max-w-7xl mx-auto h-full mt-24'>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <Service services={SERVICES} />
        </ul>
      </div>
    </div>
  )
}
export default Services
