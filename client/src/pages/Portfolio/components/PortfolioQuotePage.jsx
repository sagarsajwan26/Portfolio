import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import {useSelector} from 'react-redux'
const PortfolioQuotePage = () => {
  const quote1ref = useRef() 
  const containerRef = useRef()
  const quote2ref = useRef()
  const quote3ref = useRef()
  const image1ref= useRef()
  const image2ref= useRef()
  const {data} = useSelector(state=> state.portfolio)

  
  gsap.registerPlugin(ScrollTrigger, SplitText)

  useGSAP(() => {
    

 const split= new SplitText(quote1ref.current,{type:'chars'})
 const split2= new SplitText(quote2ref.current,{type:'chars'})
    const split3 = new SplitText(quote3ref.current,{type:'chars'})
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:containerRef.current,
       
        start:'top 50%',
        end:'top 0%',
        scrub:true
      }
    })

   

    if(quote1ref.current) {
       tl.from(split.chars,{
      opacity:0,
           stagger:.2,
        ease:'power2.inOut'
      
    })
    }

    if(quote2ref.current){
        tl.from(split2.chars,{
          opacity:0,
            stagger:.2,
          ease:'power1.inOut'
        })
    }
    if(image1ref.current){
      tl.from(image1ref.current,{
        opacity:0,
        scale:0 ,
        ease:'power1.inOut'
      })
    }
  if(image2ref.current){
      tl.from(image2ref.current,{
        opacity:0,
        scale:0 ,
        ease:'power1.inOut'
      })
    }
       if(quote3ref.current){
        tl.from(split3.chars,{
          opacity:0,
            stagger:0.2,
          ease:'power1.inOut'
        })
    }
    
    
  }, [])

  

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
            src={data?.portfolio?.quoteImages[0].url ||data?.portfolio?.quoteImages[1].url  }
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:-mt-[5vw]">
        <div className="h-24 w-32 md:h-[10vw] md:w-[15vw] overflow-hidden order-2 md:order-1">
          <img 
            ref={image2ref}
            className="h-full w-full object-cover"
            src={data?.portfolio?.quoteImages[0].url ||data?.portfolio?.quoteImages[1].url }
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
