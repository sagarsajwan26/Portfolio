import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../../Components/input/Button'
import Input from '../../../../Components/input/Input'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import { sendMail } from '../../../../store/contact/contactThunk'
import Loading from '../../../../Components/loading/Loading'
import { getPortfolioDetails } from '../../../../store/portfolio/portfolioThunk'
const PortfolioContactDetailPage = () => {
  const {user} = useSelector(state=> state.user)

    const { data } = useSelector(state=> state.portfolio) 

const dispatch = useDispatch()
 useEffect(()=>{
     dispatch(getPortfolioDetails())
   },[])

    if(!data) {
      return <Loading />
    }
    
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [subject, setsubject] = useState('')
  const [message, setmessage] = useState('')
  const [loading, setLoading] = useState(false)

    const socialData= data?.portfolio?.owner?.socialLinks


const handleSendMessage=async e=>{
  e.preventDefault()
  if(!firstName || !subject || !message || !email) toast.error(`Fields cannot be empty`)

  setLoading(true)


  try {
    await dispatch(sendMail({firstName,lastName, email, subject, message})).then(res=>{
      if(res.meta.requestStatus =='fulfilled'){
        toast.success(res?.payload || "Your message has been sent")
      }else{
        toast.error("Internal server Error")
      }
      
      
    })
  } catch (error) {
    toast.error('Internal server error',error.message)
    
  }finally{
    setLoading(false)
  }
}
  return (
    <div className='min-h-screen font-[Urbanist] pt-[5vh] relative'>
      <button  
        onClick={() => navigate('/')}
        className="absolute bg-white text-black px-[1.5vw] py-[1vh] flex items-center justify-center rounded-full text-xl font-semibold border-black hover:bg-black hover:text-white border-2 transition-all duration-300 ease-in-out cursor-pointer gap-2 left-10 top-10"
      >
        <svg
          className="fill-current transition-colors duration-300 ease-in-out"
          width="25px"
          height="25px"
          viewBox="0 0 92 92"
        >
          <path
            d="M84,46c0,2.2-1.8,4-4,4H21.6l18.1,18.2c1.6,1.6,1.6,4.1,0,5.7C39,74.6,38,75,36.9,75c-1,0-2.1-0.4-2.8-1.2l-24.9-25c-1.6-1.6-1.6-4.1,0-5.6l24.9-25c1.6-1.6,4.1-1.6,5.7,0c1.6,1.6,1.6,4.1,0,5.7L21.6,42H80C82.2,42,84,43.8,84,46z"
          />
        </svg>
      </button>

      <div className='px-[10vw]'>
        <h1 className='text-7xl text-center font-bold mb-5'>Get In Touch</h1>
        <p className='text-2xl text-center font-medium leading-[0.9] w-[60%] mx-auto mb-[5vh]'>
          Let's collaborate and bring your ideas to life. I'm always excited to work on new projects and challenges.
        </p>

        <div className='grid grid-cols-2 gap-[5vw] mt-[8vh]'>
          <div className='space-y-8'>
            <div>
              <h2 className='text-4xl font-bold mb-6 text-[#424040]'>Contact Information</h2>
              <div className='space-y-4 text-lg'>
                <div className='flex items-center gap-4'>
                  <span className='font-semibold text-gray-600'>Email:</span>
                  <span>sagarsajwan26@gmail.com</span>
                </div>
                <div className='flex items-center gap-4'>
                  <span className='font-semibold text-gray-600'>Phone:</span>
                  <span>+91 7454823359</span>
                </div>
                <div className='flex items-center gap-4'>
                  <span className='font-semibold text-gray-600'>Location:</span>
                  <span>123 Anywhere St. Any City, ST 12345</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-2xl font-semibold mb-4 text-[#424040]'>Follow Me</h3>
              <div className='flex gap-4'>
              <Link className='link-primary' to={socialData?.instagram} >Instagram</Link>
              <Link className='link-primary' to={socialData?.facebook} >Facebook</Link>
              <Link className='link-primary' to={socialData?.github} >Github</Link>
              <Link className='link-primary' to={socialData?.linkedin} >Linkedin</Link>
              <Link className='link-primary' to={socialData?.twitter} >Twitter</Link>
               
              </div>
            </div>
          </div>

          <div className='bg-[#F9FAFB] p-8 rounded-lg'>
            <h2 className='text-3xl font-bold mb-6 text-[#424040]'>Send Message</h2>
            <form 
            onSubmit={handleSendMessage}
            className='space-y-6'>
              <div className='grid grid-cols-2 gap-4'>
                <Input 
                required
                value={firstName}
                onChange={(e)=> setfirstName(e.target.value)}
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4"
                />
                <Input 
                required
                   value={lastName}
                onChange={(e)=> setlastName(e.target.value)}
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4"
                />
              </div>
              <Input 
              required
                 value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg py-3 px-4"
              />
              <Input 
              required
                 value={subject}
                onChange={(e)=> setsubject(e.target.value)}
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg py-3 px-4"
              />
              <textarea 
              required
                 value={message}
                onChange={(e)=> setmessage(e.target.value)}
                placeholder="Your Message"
                rows="6"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 resize-none"
              />
              <Button 
              type='submit'
              disabled={loading}
                label={loading ? "Sending...":"Send Message"}
                className='w-full rounded-lg bg-black text-white hover:bg-gray-800 py-3'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioContactDetailPage