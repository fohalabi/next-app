import React from 'react'
import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';

const Navbar = () => {

    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/Issues'},
    ]
  return (
    <nav className='flex space-x-4 p-x-4 border-b mb-4 px-5 h-14 items-center'>
      <Link href="/"> <AiFillBug /> </Link>

      <ul className='flex space-x-4'>
        {links.map(link =>
            <Link 
                key={link.href}
                className='text-zinc-500 hover:text-zinc-800 transition-colors'
                href={link.href}
            >
                {link.label}
            </Link>
        )}
        
      </ul>
    </nav>
  )
}

export default Navbar
