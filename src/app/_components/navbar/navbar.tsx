'use client';
import React from 'react'
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
         <div className='bg-main py-4 px-8 xl:flex hidden cursor-pointer' onClick={() => router.push(`/`)}>
            <span className='text-xl text-white' >LANSTELLAR</span>
        </div>
  )
}

export default Navbar