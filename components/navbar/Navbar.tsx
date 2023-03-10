import { fetchSocials } from '../../lib/fetchFromSanity'
import Socials from './Socials'
import GetInTouch from './GetInTouch'

const Navbar = async () => {
  const socials = await fetchSocials()

  return (
    <nav className='sticky top-0 main-container flex items-start xl:items-center justify-between p-2 md:p-5 z-20 max-w-7xl w-full'>
      <Socials socials={socials} />

      <GetInTouch />
    </nav>
  )
}
export default Navbar
