import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'


const PortfolioAboutMe = () => {

    const aboutMeHeading= useRef()

    const aboutMe= useRef()
    const image1= useRef()
    const image2= useRef()

gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.from(aboutMeHeading.current,{
      opacity:0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: aboutMeHeading.current,
        start: "top 60%",
        end: "top 20%",
       
        scrub: 1
      }
    })
    gsap.from(aboutMe.current,{
      opacity:0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: aboutMe.current,
        start: "top 90%",
        end: "top 50%",
        
        scrub: 1
      }
    })

    gsap.from(image1.current,{
      opacity:0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: image1.current,
        start: "top 90%",
        end: "top 50%",

        scrub: 1
      }
    })

    gsap.from(image2.current,{
      opacity:0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: image2.current,
        start: "top 90%",
        end: "top 50%",

        scrub: 1
      }
    })
  },[])

  return (
    <div 
   
    className='min-h-screen w-full flex items-center justify-center flex-col relative gap-8 md:gap-[4vw] my-10 md:my-[10vw] px-4 md:px-0'>
     
      
      <div className='flex flex-col md:flex-row items-center justify-between w-full md:w-[80vw] md:pr-[20vw] gap-6 md:gap-0' >
          <h1 ref={aboutMeHeading} className='text-4xl md:text-6xl lg:text-8xl text-center md:text-left md:w-[30vw]' >A Little About Me</h1> 

          <div className='w-48 md:w-[20vw] h-48 md:h-auto'>
            <img  
            ref={image1}
            className='h-full w-full rounded-2xl object-cover opacity-70 ' src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>  

     <div className='flex flex-col md:flex-row items-center justify-between w-full md:w-[60vw] md:ml-[20vw] gap-6 md:gap-0' >
          <p ref={aboutMe} className='w-full md:w-[50%] text-center md:text-left text-sm md:text-base'> I am a digital nomad currently based in Hong Kong. I've been working in graphic design for the past ten years. It was only in the past three that I decided to focus full-time on illustrating. </p> 

          <div className='w-32 md:w-[15vw] h-32 md:h-auto -rotate-12 md:-rotate-20' >
            <img  
            ref={image2}
            className='h-full w-full rounded-md object-cover opacity-70 ' src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>  
      <span className='absolute bottom-4 md:top-[90%] opacity-[40%]' >
        <svg
  fill="#000000"
  width="20px"
  height="20px"
  className='md:w-[25px] md:h-[25px]'
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M18.364 8.95l-5.657-5.657a1 1 0 0 0-1.414 0L5.636 8.95a1 1 0 0 0 1.414 1.414L11 6.414V20a1 1 0 0 0 2 0V6.414l3.95 3.95a1 1 0 0 0 1.414-1.414z"
  ></path>
</svg>

      </span>
    </div>
  )
}

export default PortfolioAboutMe