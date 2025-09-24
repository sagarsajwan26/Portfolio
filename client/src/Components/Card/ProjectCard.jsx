import React, { useState } from 'react'
import Button from '../input/Button'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import {FaTrash }  from 'react-icons/fa6'
import { FaEdit } from "react-icons/fa";

const ProjectCard = ({project}) => {
  const [isAuth,setIsAuth ] = useState(false)
  const navigate = useNavigate()
   return (
     
       <div  onClick={()=>navigate(`/sagarsajwan/projects/${project.projectTitle}`)} className='relative p-4 border-2 border-[#433d3d38] hover:scale-[104%] transition-all ease-in-out duration-300 ' > 

       {
        isAuth && (
           <span className='absolute top-3 right-3 flex gap-2 ' >
           <Button 
         label=''
         icon= {<FaEdit />}
         className='rounded-full h-10 w-10  hover:text-green-400 hover:bg-black '
         />
         <Button 
         label=''
         icon= {<FaTrash />}
         className='rounded-full  flex items-center justify-center  h-10 w-10   hover:text-red-400 hover:bg-black '
         />
        </span>
        )
       }
                  <div className='w-full  ' >
                    <img  
                    className='h-[30vh] w-full object-cover cursor-pointer'
                    src={project.screenshots[0].url} alt={project.title} /> 
                    
                    <div>
                      <h2 className='text-xl font-semibold text-[#14141480] mt-6  mb-3' >{project.projectTitle}</h2>
                      <p className='text-md leading-[1.2] ' >{project.description.length >150 ? project.description.slice(0,150) + '...' : project.description}</p>

                      <div  className='flex gap-2 mt-3 mb-3'  >
                        {
                          project.technologies.slice(0,3).map((tech,idx)=>(
                            <span key={idx} className='px-4 py-2 text-xs rounded-full border-2 border-[#3331314e] cursor-pointer ' >{tech.split(' ')[0]}</span>
                          ))
                        }
                        {
                          project.technologies.length > 3 && (
                            <span  
                            className='px-4 py-2 text-xs rounded-full border-2 border-[#3331314e] cursor-pointer bg-[#04040415]'
                            >+{project.technologies.length -2} more</span>
                          )
                        }
                      </div>
                    </div> 

                 <div  className='flex gap-2 w-full   ' >
                     <Button  label='View Live Demo' className='text-md rounded-lg  hover:bg-black hover:text-white w-full cursor-pointer' />
                    <Button 
                      label=''
                      icon={<FaGithub />}
                      className='text-md  rounded-lg hover:bg-black hover:text-white cursor-pointer'
                    />
                      
                 </div>
                  </div>
              </div>
  )
}

export default ProjectCard