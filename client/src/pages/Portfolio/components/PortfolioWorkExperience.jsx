import React from 'react'

const PortfolioWorkExperience = () => {
  return (
    <div className=' h-screen  px-[10vw] my-[10vh]  flex flex-col items-start justify-center gap-[8vw] relative  '>
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
     <h1 className='text-8xl font-md leading-[0.8] font-[Urbanist]' >Work 
      <br />
      Experience</h1>

     <div className='grid grid-cols-4 '>
      <div>
        <h3 className='text-2xl font-[Arsenica]'  >Agency Work</h3>
        <p className='text-md font-[Urbanist] font-bold text-[#565656]' >Comany Name</p>
        <p className='text-md font-[Urbanist] font-bold text-[#565656]' >Seccond Compnay Name </p>
        <p className='text-md font-[Urbanist] font-bold text-[#565656]'>JKIL Design Studio</p>
        <p className='text-md font-[Urbanist] font-bold text-[#565656]' >Senior Developer</p>

      </div>
        <div>
          <h1>
            <h3 className='text-2xl font-[Arsenica]' >Freelance Work</h3>
            <p className='text-md font-[Urbanist] font-bold text-[#565656]' >Comany Name</p>
            <p className='text-md font-[Urbanist] font-bold text-[#565656]' >Seccond Compnay Name </p>
           
          </h1>
        </div>

        <div className='grid-cols-1'>

        </div>
        <div className='col-span-1 justify-end '>
          <img  className='w-full opacity-70 grayscale-50 rounded-md ' src="https://images.unsplash.com/photo-1503467913725-8484b65b0715?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
     </div>
    
    </div>
  )
}

export default PortfolioWorkExperience