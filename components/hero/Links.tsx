'use client'

import Link from 'next/link'

const Links = () => {
  return (
    <div className='pt-6'>
      {/* <Link href='#about' className='heroBtn'>
        About
      </Link> */}
      {/* <Link href='#experience' className='heroBtn'>
        Experience
      </Link> */}
      <Link href='#services' className='heroBtn'>
        Services
      </Link>
      <Link href='#skills' className='heroBtn'>
        Skills
      </Link>
      <Link href='#projects' className='heroBtn'>
        Projects
      </Link>
    </div>
  )
}
export default Links
