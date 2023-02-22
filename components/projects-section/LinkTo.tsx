'use client'

import Link from 'next/link'

type Props = {
  link: string
  children: React.ReactNode
}

const LinkTo = ({ link, children }: Props) => {
  return (
    <div className='mt-10'>
      <Link href={link} className='contactBtn px-10'>
        {children}
      </Link>
    </div>
  )
}
export default LinkTo
