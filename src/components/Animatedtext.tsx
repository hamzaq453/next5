import React from 'react'
import {motion} from 'framer-motion'

interface Animated{
  text: string;
  className?: string;
}

const Animatedtext = ({text,className=""}:Animated) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center
    text-center overflow-hidden
    '>
        <h1 className={`inline-block w-full text-dark font-bold capitalize
         text-6xl ${className}`}>
            {
                text.split(" ").map((word,index)=>
                <span key={word + '-'+ index} className='inline-block'>
                    {word}&nbsp;
                </span>
                )
            }
        </h1>
    </div>
  )
}

export default Animatedtext