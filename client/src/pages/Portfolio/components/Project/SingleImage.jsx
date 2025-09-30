import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const SingleImage = ({idx, item}) => {
   
    
    const imageRef= useRef()
    useGSAP(()=>{
        gsap.from(imageRef.current,{
            opacity:0,
            y:200,
            delay:(idx/5) +0.1
            

        })
    },[])
  return (
   <img ref={imageRef} key={idx} className='h-full w-full  object-cover col-span-1 ' src={item?._id[0].url} alt="" />
  )
}

export default SingleImage