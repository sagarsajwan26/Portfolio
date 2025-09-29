import React from 'react'

const SingleProjectOverview = ({project}) => {
  return (
    <div className='font-[Urbanist] py-8 md:py-12 lg:py-[5vh] px-4 md:px-8 lg:px-[6vw] bg-white'> 
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center'>Project Overview</h1>
      
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8'>
        <div className='lg:col-span-2 space-y-6 md:space-y-8'>
          <div>
            <h4 className='text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#424040]'>Challenges</h4>
            <div className='space-y-2 md:space-y-3'>
              {project.challenges.map((challenge, index) => (
                <p key={index} className='text-sm md:text-base leading-relaxed text-gray-700 pl-3 md:pl-4 border-l-2 border-gray-200'>{challenge}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className='text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#424040]'>Key Features</h4>
            <div className='space-y-2 md:space-y-3'>
              {project.features.map((feature, index) => (
                <p key={index} className='text-sm md:text-base leading-relaxed text-gray-700 pl-3 md:pl-4 border-l-2 border-gray-200'>{feature}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className='text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#424040]'>What I Learned</h4>
            <div className='space-y-2 md:space-y-3'>
              {project.lessonsLearned.map((learning, index) => (
                <p key={index} className='text-sm md:text-base leading-relaxed text-gray-700 pl-3 md:pl-4 border-l-2 border-gray-200'>{learning}</p>
              ))}
            </div>
          </div>
        </div>

        <div className='lg:col-span-1 space-y-6 md:space-y-8'>
          <div className='bg-[#F9FAFB] p-4 md:p-6 rounded-lg'>
            <h4 className='text-lg md:text-xl font-semibold mb-4 md:mb-6 text-[#424040]'>Project Info</h4>
            <div className='space-y-3 md:space-y-4'>
              <div className='border-b border-gray-200 pb-2 md:pb-3'>
                <p className='text-xs md:text-sm text-gray-500 uppercase tracking-wide'>Year</p>
                <h5 className='text-base md:text-lg font-medium'>{project.year || 2025}</h5>
              </div>
              <div className='border-b border-gray-200 pb-2 md:pb-3'>
                <p className='text-xs md:text-sm text-gray-500 uppercase tracking-wide'>Duration</p>
                <h5 className='text-base md:text-lg font-medium'>{project.duration || "3 months"}</h5>
              </div>
              <div className='border-b border-gray-200 pb-2 md:pb-3'>
                <p className='text-xs md:text-sm text-gray-500 uppercase tracking-wide'>Team</p>
                <h5 className='text-base md:text-lg font-medium'>{project.teamSize || "Solo"}</h5>
              </div>
              <div>
                <p className='text-xs md:text-sm text-gray-500 uppercase tracking-wide'>Role</p>
                <h5 className='text-base md:text-lg font-medium'>{project.role || 'Full Stack Developer'}</h5>
              </div>
            </div>
          </div>

          <div>
            <h4 className='text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#424040]'>Technologies Used</h4>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((technology, index) => (
                <span key={index} className='px-2 md:px-3 py-1 text-xs md:text-sm rounded-full border-2 border-[#3331314e] bg-white hover:bg-gray-50 transition-colors'>
                  {technology.split(' ')[0]}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default SingleProjectOverview