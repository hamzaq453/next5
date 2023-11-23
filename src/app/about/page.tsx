import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Animatedtext from '@/components/Animatedtext'
import Navbar from '@/components/Navbar'
import Profilepic from '../../app/developer-pic-2.png'
import Image from 'next/image'
import { useSpring } from 'framer-motion'
import Skills from '@/components/Skills'

const page = () => {
  return (
    <>
    <Head>
      <title> Hamza Qureshi | About Page</title>
    </Head>
    <main className='flex w-full items-center flex-col justify-center '>
    <Navbar/>
      <Animatedtext text='Passion Fuels Purpose! ' className='mt-5 mb-10 ml-40 -ml-40 font-mono font-light text-center justify-center'/>
      <div className='grid w-full grid grid-cols-8 gap-16'>
        <div className='col-span-3 flex flex-col items-start justify-start ml-20 mt-5'>
          <h2 className='mb-4 font-bold uppercase text-[150%] underline text-black/80'>Biography</h2>
          <p className='font-medium font-sans text-lg'>
          Hi, I'm Hamza Qureshi, a web developer with a passion for creating beautiful, functional, 
          and user-centered digital experiences. With 6 Months of experience in the field, i am always looking for 
          new and innovative ways to bring my clients' visions to life.
          </p>
          <p className='my-4 font-medium font-sans text-lg'>
          I believe that design is about more than just making things look pretty. It's about solving problems and 
        creating intuitive, enjoyable experiences for users. 
          </p>
          <p className='font-medium font-sans  text-lg'>
          Whether I'm working on a website, mobile app, or 
        other digital product, I bring my commitment to design excellence and user-centered thinking to 
        every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
          </p>
        </div>


<div className='mt-7 col-span-3 relative mb-20 h-[70%] bg-white  rounded-2xl border-2 border-solid border-black
                 p-8 '>
    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]
                   bg-black'/>

    <Image src={Profilepic} alt="Hamza Qureshi" className="w-ful h-[100%] rounded-2xl" />   
</div>

<div className='col-span-2 flex mr-20 flex-col items-end justify-between  h-[70%]'>
  <div className='flex flex-col items-end justify-center'>
    <span className='inline-block text-7xl font-bold'>
      1+
    </span >
    <h2 className='text-xl font-medium capitalize text-black/80'>Satisfied clients</h2>
  </div>
  <div className='flex flex-col items-end justify-center'>
    <span className='inline-block text-7xl font-bold'>
      3+
    </span>
    <h2 className='text-xl font-medium capitalize text-black/80'>Projects Completed</h2>
  </div>

  <div className='flex flex-col items-end justify-center'>
    <span className='inline-block text-7xl font-bold'>
      6+
    </span>
    <h2 className='text-xl font-medium capitalize text-black/80'>Months of experience</h2>
  </div>

</div>
      </div>

      <Skills/>
    </main>


<div className='mt-[20%]'>   
           <Footer/>
      </div>
    </>
  )
}

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-black
    font-medium text-lg mt-16 text-center bg-neutral-900 text-white '>
        <div className='py-8 flex justify-evenly text-center'>
        <span className='-ml-40'>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex'>
        Made By &nbsp;<Link href="mailto:qhamza4532@gmail.com"
         className='underline '>
             Hamza Qureshi</Link>
        </div>
    
        </div>
    </footer>
    )
}

export {Footer}

export default page