import React from 'react'
import Link from 'next/link';

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2 hover:bg-slate-600'>
      <Link href="/" className='w-30 h-30  bg-orange-600 text-white p-3.5 font-bold justify-center text-2xl
      rounded'
      >
        
        HQ</Link>
    </div>
  )
}

export default Logo;
