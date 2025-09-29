import React from 'react'

const SingleProjectGallery = ({gallery}) => {
  console.log(gallery);
  
  return (
    <div className='mt-8 md:mt-12 lg:mt-[10vh] py-8 md:py-12'> 
      <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center mb-8 md:mb-12'>Project Gallery</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0'>
        {
          gallery.map((image, index) => (
            <div key={index} className='relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'>
              <img 
                className='w-full h-48 md:h-64 lg:h-80 xl:h-96 object-cover transition-transform duration-300 group-hover:scale-105'
                src={image.url}
                alt={image.caption || `Project image ${index + 1}`}
              />
              
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300'></div>
              
              {image.caption && (
                <div className='absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300'>
                  <p className='text-white text-sm md:text-base font-medium leading-relaxed'>
                    {image.caption}
                  </p>
                </div>
              )}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SingleProjectGallery