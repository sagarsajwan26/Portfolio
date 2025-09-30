import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../../Components/loading/Loading'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import SingleImage from './SingleImage'

const PortfolioOtherProject = () => {
  const navigate= useNavigate()
  const headingRef= useRef()
  const descRef = useRef()
  const containerRef= useRef()
  const {data} = useSelector(state=> state.portfolio)
  gsap.registerPlugin(ScrollTrigger, SplitText)
  useGSAP(()=>{
    const tl= gsap.timeline({
      scrollTrigger:{
        trigger:containerRef.current,
        start:"top 50%",
        end:"top 5%",
        scrub:true ,
        
      }

    })

    tl.from(headingRef.current,{
      scale:0,
      opacity:0,
      duration:2
    })

    const splitText= new SplitText(descRef.current,{type:'words'})
      tl.from(splitText.words,{
          opacity:0,
          y:100,
          stagger:.2,
          duration:2
      })

     


  },[])
  
  


  if(!data)return <Loading />

  return (
    <div 
    ref={containerRef}
    className='my-[10vw] py-[10vh] px-[10vw] h-screen font-[Urbanist] relative' >
       <span className='absolute left-[50%] top-[90%] opacity-[40%]' >
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
      <div className='grid grid-cols-3 gap-[2vw] mb-[10vw] ' >
        <div className='col-span-1'> 
          <h1 ref={headingRef} className='uppercase text-7xl font-semibold  ' >  other 
            <br />
             project</h1>
           </div>
        <div   
        
        ref={descRef}
        className='col-span-1 '> <p className='  block overflow-hidden text-xl leading-[0.9]  ' >A sample of posters and cards conceptualized, designed, and created by me</p> </div>
        <div className='col-span-1'>  </div>

      </div>
      <div className='grid grid-cols-4 gap-[3vw]' > 
      <div className='col-span-1 flex items-center justify-center' >
 <button  
 onClick={()=>navigate('/sagarsajwan/projects')}
  className="bg-black text-white px-[1.5vw] py-[1vh] flex items-center justify-center rounded-full text-xl font-semibold hover:bg-white hover:text-black border-2 border-black transition-all duration-300 ease-in-out cursor-pointer gap-2"
>
  Check Out 
  <svg 
    className="fill-current transition-colors duration-300 ease-in-out"
    width="25px"
    height="25px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.7071 6.29289C16.3166 5.90237 15.6834 5.90237 15.2929 6.29289C14.9024 6.68342 14.9024 7.31658 15.2929 7.70711L18.5858 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L18.5858 13L15.2929 16.2929C14.9024 16.6834 14.9024 17.3166 15.2929 17.7071C15.6834 18.0976 16.3166 18.0976 16.7071 17.7071L21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L16.7071 6.29289Z"
    />
  </svg>
</button>


      </div>
      <div className='col-span-2 grid grid-cols-4 rounded-md overflow-hidden ' > 
        {data?.projects?.slice(0,8).map((item,idx)=>(
          <SingleImage key={idx} item={item} idx={idx} />
        ))}

      </div>
      <div className='col-span-1 grid grid-cols-2 -rotate-12 relative bottom-[2vw] rounded-md overflow-hidden' >

          {data?.projects?.slice(8,12).map((item,idx)=>(
           <SingleImage key={idx} item={item} idx={idx} />
          ))}  

      </div>

      </div>
    </div>
  )
}

export default PortfolioOtherProject