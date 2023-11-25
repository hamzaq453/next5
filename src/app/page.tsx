import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Profile from '../app/developer-pic-1.png'
import Animatedtext from '@/components/Animatedtext'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex text-dark w-full min-h-screen flex-col ">
     
      <Navbar/>

      <div className='flex items-center justify-between w-full '>
        <div className='w-1/2'>
          <Image src={Profile} alt='Hamza Qureshi' className='w-full h-auto'/>
        </div>
        <div className='mr-5 flex flex-col items-center self-center text-left'>
         
          <Animatedtext text="Turning Vision Into Reality With Code And Design." className='text-left'/>
          <p className='text-lg mr-10'>
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
 Explore my latest projects and articles, showcasing my expertise in Next.js and web development.
          </p>
          <div className='flex items-center self-start mt-3'>
            <Link href="/Resume.pdf" target={'_blank'}
            className='flex items-center bg-neutral-900 text-white p-2.5 px-6
            rounded-lg text-lg font-semibold hover:bg-slate-600 hover:text-white
            border border-solid border-transparent hover:border-black'
            download={true}
            >Resume <LinkArrow className="w-6 ml-1"/>
            </Link>
            <Link href="mailto:qhamza4532@gmail.com" target={'_blank'}
            className='ml-4 text-lg font-medium text-dark underline'
            >Contact</Link>

          </div>
        </div>
      </div>
      <div className='-mt-9'>
      <Footer/>
      </div>
    </main>
  )
}
