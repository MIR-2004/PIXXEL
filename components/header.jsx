"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Header = () => {

    const path = usePathname();
  return (
    <header className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-nowrap'>
        <div className='backdrop-blur-md bg-white/10 border-white/20 rounded-full px-8 py3 flex items-center justify-between gap-8'>
            <Link href="/" className='mr-10 md:mr-20'>
                <Image src='/logo-text.png' alt="Pixxel Logo" className='min-w-24 object-cover' width={96} height={24} />
            </Link>

            {
                path === "/" && (
                    <div className='hidden md:flex space-x-6'>
                        Link
                    </div>
                )
            }
        </div>
    </header>
  )
}

export default Header