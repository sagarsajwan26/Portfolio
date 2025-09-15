import React from 'react'
import { useNavigate } from 'react-router-dom'

const PortfolioSkillAndExpertiese = () => {
  const navigate= useNavigate()
  return (
    <div className='grid grid-cols-2 items-center font-[Urbanist] my-[10vh] px-[10vw] gap-[5vw] relative py-[10vh]' >
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
     
      <div className='col-span-1 flex flex-col gap-[3vw] items-start ' >
        <h1 className='text-8xl text-center leading-[0.8] uppercase font-medium tracking-tighter' >

          Skill & <br />
          Expertise
        </h1>
        <div className='w-[80%] flex items-center justify-center ' >
          <img className='h-full w-full rounded-md object-cover ' src="https://plus.unsplash.com/premium_photo-1664372145543-d60ba2756a7e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

      </div>
      <div className='col-span-1  grid grid-cols-2 content-center gap-[2vw]  h-full relative ' >
         <button  

         onClick={()=> navigate('/sagarsajwan/skills')}
  className="absolute bg-black text-white px-[1.5vw] py-[1vh] flex items-center justify-center rounded-full text-xl font-semibold hover:bg-white hover:text-black border-2 border-black transition-all duration-300 ease-in-out cursor-pointer gap-2 bottom-10 right-10"
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
        {[1,2,3,4].map((item,idx)=>(
          <div  key={idx}>
             <h1 className='text-2xl font-semibold text-[#6e6565] tracking-wider' >
              Backend
              </h1> 
              
          </div>
        ))}

      </div>



    </div>
  )
}

export default PortfolioSkillAndExpertiese