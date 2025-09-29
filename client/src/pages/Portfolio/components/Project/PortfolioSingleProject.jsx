import { useDispatch } from 'react-redux'
import React, { useEffect, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from '../../../../Components/input/Button'
import SingleProjectDescription from './SingleProjectsComp/SingleProjectDescription'
import SingleProjectOverview from './SingleProjectsComp/SingleProjectOverview'
import SingleProjectGallery from './SingleProjectsComp/SingleProjectGallery'
import gsap from 'gsap'
import InterestedInWorkingTogether from './SingleProjectsComp/InterestedInWorkingTogether'
import { fetchProjectById } from '../../../../store/projects/projectThunk'
import { useState } from 'react'
import Loading from '../../../../Components/loading/Loading'

const PortfolioSingleProject = () => { 
const dispatch= useDispatch()
  const [project,setProject] = useState()
const{id} = useParams()
  useEffect(()=>{
   dispatch(fetchProjectById(id)).then(res=> {
   setProject(res.payload)
    
   })
  },[]) 
  const navigate = useNavigate()

  const movingBall= useRef()

  const handleMouseMove= (e)=>{
    if (window.innerWidth < 768 || !movingBall.current) return
    
    const x= e.clientX 
    const y= e.clientY 

    gsap.to(movingBall.current,{
      x: x-90,
      y: y-90,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  useEffect(()=>{
    if (window.innerWidth < 768 || !movingBall.current) return
    
    let scrollTimeout

    const handleScroll= ()=>{
      if (!movingBall.current) return
      
      gsap.to(movingBall.current,{
        scale:1.5,
        duration:0.3,
        ease:'power2.out'
      })
      
      clearTimeout(scrollTimeout)
      scrollTimeout= setTimeout(()=>{
        if (movingBall.current) {
          gsap.to(movingBall.current,{
            scale:1,
            duration:0.3,
            ease:'power2.out'
          })
        }
      },150)
    }

    window.addEventListener('scroll',handleScroll)
    return ()=> {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  },[])
if(!project){
  return  <Loading />
}

 

  return (
    <div  
      onMouseMove={(e)=>handleMouseMove(e)}
      className='min-h-screen w-full pt-16 md:pt-[12vh] font-[Urbanist] px-4 md:px-8 lg:px-[6vw] relative'
    >
      
      <div 
        ref={movingBall}
        className='fixed h-3 w-3 bg-black rounded-full z-[9999] pointer-events-none hidden md:block'
      ></div>
       <button  
         onClick={()=> navigate('/')}
         className="absolute bg-white text-black px-4 md:px-6 lg:px-[1.5vw] py-2 md:py-3 lg:py-[1vh] flex items-center justify-center rounded-full text-sm md:text-lg lg:text-xl font-semibold border-black hover:bg-black hover:text-white border-2 transition-all duration-300 ease-in-out cursor-pointer gap-2 left-4 md:left-8 lg:left-[6%] top-4 md:top-6 lg:top-10"
       >

  <svg
    className="fill-current transition-colors duration-300 ease-in-out w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
    viewBox="0 0 92 92"
  >
  <path
    id="XMLID_546_"
    d="M84,46c0,2.2-1.8,4-4,4H21.6l18.1,18.2c1.6,1.6,1.6,4.1,0,5.7C39,74.6,38,75,36.9,75c-1,0-2.1-0.4-2.8-1.2
	l-24.9-25c-1.6-1.6-1.6-4.1,0-5.6l24.9-25c1.6-1.6,4.1-1.6,5.7,0c1.6,1.6,1.6,4.1,0,5.7L21.6,42H80C82.2,42,84,43.8,84,46z"
  ></path>
</svg>
</button>

        <Button 
          label={project.role} 
          className='text-black bg-white rounded-full hover:text-white hover:bg-black mb-6 md:mb-8 lg:mb-10 text-sm md:text-base px-4 md:px-6 py-2 md:py-3' 
        />
   
   <div className='space-y-8 md:space-y-12 lg:space-y-16'>
     <SingleProjectDescription project={project} />
     <SingleProjectOverview project={project} />
     <SingleProjectGallery gallery={project.screenshots} />
     <InterestedInWorkingTogether />
   </div>
   
    </div>
  )
}

export default PortfolioSingleProject