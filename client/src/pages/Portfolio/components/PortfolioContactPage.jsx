import React, { useRef } from 'react'
import Button from '../../../Components/input/Button'
import { useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useSelector } from 'react-redux'
import Loading from '../../../Components/loading/Loading'

const PortfolioContactPage = () => {

  const {data} = useSelector(state=> state.portfolio)
  const containerRef= useRef()
      const nameRef= useRef()
      const titleRef= useRef()
      const addressRef= useRef()
      const phoneNumberRef= useRef()
      const emailRef= useRef()
      const imageRef= useRef()
      const detailRef = useRef()
      useGSAP(()=>{
        const tl= gsap.timeline({
          scrollTrigger:{
            trigger:containerRef.current,
            start:"top 40%",
            end:'top -10%',
          
            scrub:true
          }
        })


        tl.from(nameRef.current,{
            opacity:0,
            x:-100,
          ease:'power1.inOut'    
        })
          tl.from(titleRef.current,{
            opacity:0,
            x:-100,
          ease:'power1.inOut'    
        })
          tl.from(addressRef.current,{
            opacity:0,
            x:-100,
          ease:'power1.inOut'    
        })
          tl.from(phoneNumberRef.current,{
            opacity:0,
            x:-100,
          ease:'power1.inOut'    
        })
          tl.from(emailRef.current,{
            opacity:0,
            x:-100,
          ease:'power1.inOut'    
        })
        gsap.from(imageRef.current,{
          opacity:0,
          height:0,
         scrollTrigger:{
          trigger:containerRef.current,
          start:"top 40%", 
          end:"top 0%", 
          scrub:true
         }
        })
      
  },[])
  
  if(!data) return <Loading />
  const address= data?.portfolio?.owner?.contactInfo
    
  const navigate = useNavigate()
  return (
    <div 
    ref={containerRef}
    className='min-h-screen my-10 md:my-[10vw] py-10 md:py-[10vw] px-4 md:px-[10vw] grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-[3vw] font-[Urbanist] items-center'>
      <div 
      ref={detailRef}
      className='flex flex-col items-center lg:items-start justify-between gap-8 lg:gap-0 text-center lg:text-left'>
        <div>
          <h4 
          ref={nameRef}
          className='text-2xl md:text-3xl lg:text-[2.5vw] font-bold mb-5 uppercase text-[#4f4b4b]'>
            {' '}
            {data?.portfolio?.owner?.firstName.toUpperCase()} {data?.portfolio?.owner?.lastName.toUpperCase()} 
          </h4>
          <h1 
          ref={titleRef}
          className='text-4xl md:text-6xl lg:text-[7vw] font-bold leading-tight lg:leading-[0.8]'>
            Work <br />
            with me
          </h1>
        </div>

        <div className='text-lg md:text-xl font-[Besley]'>
          <p 
          ref={addressRef}
          className='mb-2'>{address?.address}, {address?.city} ,{address?.state}, {address?.zipCode}</p>
          <p 
          ref={phoneNumberRef}
          className='mb-2'>+91 {address?.phone}</p>
          <p  
          ref={emailRef}
          className='mb-4'>{address?.email}</p>

          <Button
            onClick={() => navigate('/sagarsajwan/contact')}
            className='mt-5 rounded-full hover:bg-black hover:text-white px-6 py-3'
            label='Contact'
          />
        </div>
      </div>

      <div className='flex justify-center lg:justify-end'>
        <img 
        ref= {imageRef}
          className='h-64 md:h-80 lg:h-full w-64 md:w-80 lg:w-[60%] object-cover rotate-3 lg:rotate-6 grayscale-50 rounded-lg'
          src={data?.portfolio?.owner?.profileImage}
          alt=''
        />
      </div>
    </div>
  )
}

export default PortfolioContactPage
