'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'
interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
  }

const CustomLink=({href, title,className=""}:CustomLinkProps)=>{
    return(
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span className={`h-[1px] inline-block w-0 bg-black absolute
        left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        '}
        `}>&nbsp;</span>
      </Link> 
    )
}
const Navbar = () => {
  return (
    <header
    className='w-full px-32 py-8 font-medium justify-between flex items-center'>
        <nav>
        <CustomLink href="/" title="Home" className='mr-4'/>
        <CustomLink href="/about" title="About" className='mx-4'/>
        <CustomLink href="/projects" title="Projects" className='mx-4'/>
        <CustomLink href="/articles" title="Articles" className='ml-4'/>
        </nav>

        
        <nav className='flex items-center justify-center text-3xl'>
            <motion.a href="https://twitter.com"
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}>
            <TwitterIcon className='w-6 mx-2'/>
            </motion.a>

            <motion.a href="/" target='_blank'
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}>
            <GithubIcon className='w-6 mx-2'/>
            </motion.a>

            <motion.a href="/" target='_blank'
            whileHover={{y:-4}}
            whileTap={{scale:0.9}}>
            <LinkedInIcon className='w-6 mx-2 '/>
            </motion.a>
            
            

        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo/>
        </div>
        
        </header>
  )
}

export default Navbar