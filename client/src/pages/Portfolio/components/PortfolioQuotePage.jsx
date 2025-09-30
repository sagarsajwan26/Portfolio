import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'
import {useSelector} from 'react-redux'
const PortfolioQuotePage = () => {
  const quote1ref = useRef() 
  const containerRef = useRef()
  const quote2ref = useRef()
  const quote3ref = useRef()
  const image1ref= useRef()
  const image2ref= useRef()
  const {data = {}} = useSelector(state=> state.portfolio)

  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    if (!containerRef.current || !quote1ref.current || !quote2ref.current || !quote3ref.current) return
    
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:containerRef.current,
        start:'top 50%',
        end:'top 0%',
        scrub:1
      }
    })

    tl.from(quote1ref.current,{
      opacity:0,
      y:50,
      ease:'power2.inOut'
    })
    
    tl.from(quote2ref.current,{
      opacity:0,
      y:30,
      ease:'power1.inOut'
    })
    
    if(image1ref.current){
      tl.from(image1ref.current,{
        opacity:0,
        scale:0,
        ease:'power1.inOut'
      })
    }
    
    if(image2ref.current){
      tl.from(image2ref.current,{
        opacity:0,
        scale:0,
        ease:'power1.inOut'
      })
    }
    
    tl.from(quote3ref.current,{
      opacity:0,
      y:30,
      ease:'power1.inOut'
    })
  }, [data])

  

  return (
    <div
      ref={containerRef}
      className="min-h-screen my-10 md:my-[10vw] px-4 md:px-[10vw] py-10 md:py-[10vw] relative flex flex-col justify-center"
    >
      <div
        ref={quote1ref}
        className="text-[15vw] md:text-[10vw] text-center uppercase font-[Urbanist] font-semibold"
      >
        I Was
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:-mt-[5vw]">
        <div
          ref={quote2ref}
          className="text-[15vw] md:text-[10vw] text-center uppercase font-[Besley] font-semibold text-[#807c7c]"
        >
          Created
        </div>
        <div className="h-24 w-32 md:h-[10vw] md:w-[15vw] overflow-hidden">
          <img
           ref={image1ref}
            className="h-full w-full object-cover"
            src={data?.portfolio?.quoteImages?.[0]?.url || data?.portfolio?.quoteImages?.[1]?.url || 'https://via.placeholder.com/300x200'}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:-mt-[5vw]">
        <div className="h-24 w-32 md:h-[10vw] md:w-[15vw] overflow-hidden order-2 md:order-1">
          <img 
            ref={image2ref}
            className="h-full w-full object-cover"
            src={data?.portfolio?.quoteImages?.[1]?.url || data?.portfolio?.quoteImages?.[0]?.url || 'https://via.placeholder.com/300x200'}
            alt=""
          />
        </div>
        <span  
        ref={quote3ref}
        className="text-[15vw] md:text-[10vw] text-center uppercase font-[Urbanist] font-semibold order-1 md:order-2">
          to create
        </span>
      </div>
    </div>
  )
}

export default PortfolioQuotePage
