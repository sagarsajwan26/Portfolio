import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
const PortfolioAboutMe = () => {


  return (
    <div 
   
    className='h-screen w-full flex items-center justify-center flex-col  relative gap-[4vw] my-[10vw] '>
     
      
      <div className='h-[40vh] w-[80vw]  flex items-center justify-between pr-[20vw] ' >
          <h1 className='text-8xl w-[30vw]  ' >A Little About Me</h1> 

          <div className='w-[20vw]'>
            <img  className='h-full w-full rounded-2xl object-cover opacity-70 ' src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>  

     <div className=' ml-[20vw] flex items-center w-[60vw] justify-between   ' >
          <p className='w-[50%]'> I am a digital nomad currently based in Hong Kong. I've been working in graphic design for the past ten years. It was only in the past three that I decided to focus full-time on illustrating. </p> 

          <div className='w-[15vw]  -rotate-20' >
            <img className='h-full w-full rounded-md object-cover opacity-70 ' src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>  
      <span className='abosolute top-[90%] opacity-[40%]' >
        <svg
  fill="#000000"
  width="25px"
  height="25px"
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