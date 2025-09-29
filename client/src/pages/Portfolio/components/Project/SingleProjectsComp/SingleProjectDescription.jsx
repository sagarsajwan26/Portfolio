import React from 'react'
import Button from '../../../../../Components/input/Button'

const SingleProjectDescription = ({project}) => {
  return (
     <div className='grid grid-cols-1 lg:grid-cols-2 bg-[#F9FAFB] p-4 md:p-6 lg:p-8 gap-6 lg:gap-8 rounded-2xl' >
      <div className='col-span-1 order-2 lg:order-1 px-2 md:px-4 lg:px-6 flex flex-col justify-between' >
       <div>
         <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-5 leading-tight' >
         {project.projectTitle}
        </h1>
        <p className='text-sm md:text-base lg:text-lg tracking-wide font-light leading-relaxed text-gray-700' > {project.description}</p>
       </div>
        <div className='flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-5 mt-6 md:mt-8' >
          <Button 
            label='Live Demo' 
            className='text-white bg-black hover:text-black hover:bg-white px-6 py-3 text-sm md:text-base rounded-full transition-all duration-300'
          />
          <Button 
            label='View Code' 
            className='text-black bg-white hover:text-white hover:bg-black px-6 py-3 text-sm md:text-base rounded-full transition-all duration-300 border border-black'
          />
        </div>
      </div>
      <div className='col-span-1 order-1 lg:order-2 px-2 md:px-6 lg:px-10' >
        <img 
          className='w-full h-48 md:h-64 lg:h-80 xl:h-96 object-cover rounded-xl shadow-lg'
          src={project.screenshots[0].url} 
          alt={project.projectTitle}
        />
      </div>
     

      </div>
  )
}

export default SingleProjectDescription