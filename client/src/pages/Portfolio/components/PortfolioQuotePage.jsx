import React from 'react'

const PortfolioQuotePage = () => {
  return (
    <div className='h-screen my-[10vw] px-[10vw]  py-[10vw] relative' >
       <span className='absolute left-[50%] top-[100%] opacity-[40%]' >
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
     <div className='text-[10vw] text-center uppercase tracking-normal font-[Urbanist] font-semibold ' > I Was </div>



     <div className='flex items-center justify-center -mt-[5vw] ' >
       <span className='text-[10vw] text-center uppercase  tracking-normal font-[Besley] font-semibold text-[#807c7c]' >Created</span> 
       <div className='h-[10vw] w-[15vw] overflow-hidden' >  
        <img 
        className='h-full w-full object-cover' 
       
        src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
         </div>
     <div
     className='flex items-center justify-center -mt-[5vw]'
     >
       <div className='h-[10vw] w-[15vw] overflow-hidden ' >
        
      <img  
       className='h-full w-full object-cover'
      src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div> <span 
      className='text-[10vw] text-center uppercase  tracking-normal font-[Urbanist] font-semibold'
      >to create</span> </div>
    </div>
  )
}

export default PortfolioQuotePage