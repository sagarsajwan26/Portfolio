import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const ProjectHighLightCard = ({ project, idx }) => {
  const projectRef = useRef()
  const imageRef = useRef()
const titleRef= useRef()
const descriptionRef= useRef()
  gsap.registerPlugin(ScrollTrigger)
  

  useGSAP(() => {
    if (!projectRef.current) return
    
    gsap.from(projectRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: projectRef.current,
        start: 'top 85%'
      }
    })
  }, [project])

  return (
    <div
      ref={projectRef}
      className={`flex flex-col items-center ${
        idx === 1 ? 'justify-end' : 'justify-start'
      } gap-4`}
    >
      <div className="mb-4 w-full max-h-[300px] overflow-hidden rounded-lg">
        <img
          ref={imageRef}
          className="w-full h-full object-cover"
          src={project?.screenshots[0].url}
          alt={project?.projectTitle || 'Project Screenshot'}
        />
      </div>
      <div className="text-center">
        <h1 
            ref={titleRef}
        className="text-xl font-semibold font-[Urbanist] mb-2">
          {project?.projectTitle}
        </h1>
        <p 
        ref={descriptionRef}
        className=" overflow-y-hiddencd c text-md font-[Urbanist] leading-[1.4]">
          {project?.description.length > 120
            ? project.description.slice(0, 120) + '...'
            : project.description}
        </p>
      </div>
    </div>
  )
}

export default ProjectHighLightCard
