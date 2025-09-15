import React from 'react'
import Button from '../../../Components/input/Button'
import { useNavigate } from 'react-router-dom'

const PortfolioContactPage = () => {
  const navigate= useNavigate()
  return (
    <div className='h-screen my-[10vw] py-[10vw] px-[10vw] grid grid-cols-2 gap-[3vw] font-[Urbanist] ' >
<div className='flex flex-col items-start  justify-between ' >
  
     <div className=''>
       <h4 
       className='text-[2.5vw] font-bold mb-5 uppercase text-[#4f4b4b]'
       > Sagar sajwan</h4>
      <h1 className='text-[7vw] font-bold leading-[0.8] ' >
        Work <br />
        with me
      </h1>
     </div>

    
       
       
        <div  
        className='text-xl font-[Besley] '
        >
            <p>123 Any where St. Any City , st 12345</p>
            <p>+91 7454823359</p>
            <p>sagarsajwan26@gmail.com</p>

            <Button 
            onClick={()=> navigate('/sagarsajwan/contact')}
            className='mt-5 rounded-full hover:bg-black hover:text-white' label='Contact'  />
        </div>
</div>

<div className=' w-[60%] ' >
  <img 
  className='h-full w-full object-cover rotate-6 grayscale-50'
  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div> 
     
    </div>
  )
}

export default PortfolioContactPage