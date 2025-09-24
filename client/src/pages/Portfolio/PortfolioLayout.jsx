import React, { useEffect, useRef } from 'react'
import PortfolioName from './components/PortfolioName'
import PortfolioAboutMe from './components/PortfolioAboutMe'
import PortfolioWorkExperience from './components/PortfolioWorkExperience'
import PortfolioSkillAndExpertiese from './components/PortfolioSkillAndExpertiese'
import PortfolioProjects from './components/Project/PortfolioProjects'
import PortfolioQuotePage from './components/PortfolioQuotePage'
import PortfolioContactPage from './components/PortfolioContactPage'
import PortfolioOtherProject from './components/Project/PortfolioOtherProject'
import  gsap from 'gsap'
const PortfolioLayout = () => {
const movingBall=useRef()
  const handleMouseMove= (e)=>{
    const x= e.clientX 
    const y = e.clientY 
      
      
    gsap.to(movingBall.current,{
      x:x-30,
      y: y-30,
      delay:0.2,
      duration: 0.5,
      ease: "power2.out"
    })

  }


  useEffect(()=>{
    let scrollTimeout;
    const handleScroll= ()=>{
          gsap.to(movingBall.current,{
            scaleX:1,
            duration:0.5,
            ease:"power2.out"
          })
    }


    if(scrollTimeout){
      clearTimeout(scrollTimeout)
    }
    scrollTimeout= setTimeout(()=>{
      gsap.to(movingBall.current,{
        scaleX:1,
        duration:0.5,
        ease:"power2.out"
      })
    },100)
    window.addEventListener('scroll', handleScroll)
    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  },[])
  return (
    <div 
   
    onMouseMove={(e)=>handleMouseMove(e)}
    className='relative' >  
      <div 
       ref={movingBall}
      className='fixed h-3 w-3 rounded-full bg-black z-[9999] pointer-events-none hidden md:block' >
      </div>

      <PortfolioName />
      <PortfolioAboutMe />
      <PortfolioWorkExperience />
      <PortfolioSkillAndExpertiese/>
      <PortfolioProjects/> 
      <PortfolioQuotePage /> 
      <PortfolioOtherProject />

      <PortfolioContactPage/>
      
    </div>
  )
}

export default PortfolioLayout