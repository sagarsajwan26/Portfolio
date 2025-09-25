import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ArrayEditor from './ArrayEditor'
import EditImage from './EditImage'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from "react-router";
import {toast} from 'react-toastify'
import Input from '../../../../Components/input/Input'
import { fetchProjectById, handleStringProjectData } from '../../../../store/projects/projectThunk'
import Button from '../../../../Components/input/Button'
const AdminEditProject = () => {

  const {projectId} = useParams()
  const {singleProject} = useSelector(state=> state.project)
  
  
  

  const [project, setProject] = useState()
  const [loading, setLoading] = useState(false)
  const [editObjectData, setEditObjectData] = useState(true)
  const [editfeatures, setEditFeatures] = useState(false)
  const [editTechnologies, seteditTechnologies] = useState(true)
  const [editChallenges, seteditChallenges] = useState(false)
  const [editlessonsLearned, seteditlessonsLearned] = useState(false)
  const [editscreenshots, seteditscreenshots] = useState(false)
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGM2YmRlZTRhNjM0MzNhMzVmNjc0ZjEiLCJpYXQiOjE3NTgyNTc2ODIsImV4cCI6MTc1ODM0NDA4Mn0.t897NkAVAIMjxXOLm34n4p2gUUbdUK0g-jAW-mSD0o8'
  const [projectObjectDetails, setprojectObjectDetails] = useState({
    projectTitle: '',
    description: '',
    role: '',
    duration: '',
    teamSize: '',
    isActive: true,
    repositoryUrl: '',
    liveDemoUrl: ''
  })
  const [features, setFeatures] = useState([])
  const [technologies, settechnologies] = useState([])
  const [challenges, setchallenges] = useState([])
  const [lessonsLearned, setlessonsLearned] = useState([])
  const [screenshots, setscreenshots] = useState([])
  const dispatch = useDispatch()
const fetchProject = async () => {
  try {
    const res = await dispatch(fetchProjectById(projectId))
    const details = res.payload
    setProject(details)

    setprojectObjectDetails({
      projectTitle: details?.projectTitle || '',
      description: details?.description || '',
      role: details?.role || '',
      duration: details?.duration || '',
      teamSize: details?.teamSize || '',
      isActive: details?.isActive ?? true,
      repositoryUrl: details?.repositoryUrl || '',
      liveDemoUrl: details?.liveDemoUrl || ''
    })

    settechnologies(details?.technologies || [])
    setFeatures(details?.features || [])
    setchallenges(details?.challenges || [])
    setlessonsLearned(details?.lessonsLearned || [])
    setscreenshots(details?.screenshots || [])
  } catch (error) {
    console.error("Failed to fetch project:", error)
  }
}

  useEffect(() => {
    fetchProject()
  }, [])
  const handleToogle = async checked => {
   
    
    dispatch(handleStringProjectData({projectId,isActive: checked})).then(res=> {
      console.log(res)
    }
    )
    // try {
    //   const res = await axios.put(
    //     'http://localhost:3000/api/v1/project/editObjectdata/68c9a926f2aeef0c1962c493',
    //     { isActive: checked },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         'Content-Type': 'application/json'
    //       }
    //     }
    //   )
    //   setprojectObjectDetails(prev => ({
    //     ...prev,
    //     isActive: checked
    //   }))
    // } catch (error) {
    //   console.log(error)
    // }
  }

  const handleEditObjectDataChange = e => {
    const { id, type, value, checked } = e.target
    if (id == 'isActive') return handleToogle(checked)
    setprojectObjectDetails(prev => ({
      ...prev,
      [id]: value
    }))
  }
  const handleUpdateData = async e => {
    e.preventDefault()
    try {
      
    await dispatch(handleStringProjectData({...projectObjectDetails,projectId})).then(res=>{
     
     
      if(res.meta.requestStatus==="fulfilled"){
        toast.success('your data has been updated')
      }
      else {
      
        
        toast.error(res.payload.mesage)
      }
    })

   
    } catch (error) {
      console.log(error.message)
    }
  }


  const deleteProject= async(image)=>{
    try {
    
      const res= await axios.delete(`http://localhost:3000/api/v1/project/deleteProjectImage/68c9aa1b81f38bced52fcffe/${image._id}/${image.public_id}`,{
        headers:{
          'Authorization':`Bearer ${token}`,
          'Content-Type':"application/json"
        }
      })
      console.log(res);
      
      
    } catch (error) {
      console.log(error);
      
    }
  }


 
  if (!project) return <div>loading</div>
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white rounded shadow-md  text-gray-800 mt-[12vh] '>
      <div>
        <form onSubmit={handleUpdateData} className='relative'>
          {editObjectData ? (
            <>
              <button type='button' onClick={() => setEditObjectData(false)}>
                {' '}
                Close
              </button>
             
              <label className="relative inline-flex items-center cursor-pointer">
  <input  
   name=''
                id='isActive'
               
                onChange={handleEditObjectDataChange} 
  type="checkbox" 
  value={projectObjectDetails.isActive} 
  className="sr-only peer" />
  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600
                  after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
                  after:bg-white after:border-gray-300 after:border after:rounded-full 
                  after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full 
                  peer-checked:after:border-white"></div>
  <span className="ml-3 text-sm font-medium text-gray-900">Toggle Switch</span>
</label>


              <Input 
              
                type='text'
                id='projectTitle'
                value={projectObjectDetails.projectTitle}
                onChange={handleEditObjectDataChange} />
              
              <Input 
               type='text'
                id='description'
                value={projectObjectDetails.description}
                onChange={handleEditObjectDataChange}
              />
              <Input  type='text'
                id='role'
                value={projectObjectDetails.role}
                onChange={handleEditObjectDataChange} />
              <Input      type='text'
                id='duration'
                value={projectObjectDetails.duration}
                onChange={handleEditObjectDataChange} />
              <Input   type='text'
                id='teamSize'
                value={projectObjectDetails.teamSize}
                onChange={handleEditObjectDataChange} />
             
               <Input     type='text'
                id='repositoryUrl'
                value={projectObjectDetails.repositoryUrl}
                onChange={handleEditObjectDataChange} />
             
              <Input   type='text'
                id='liveDemoUrl'
                value={projectObjectDetails.liveDemoUrl}
                onChange={handleEditObjectDataChange} />


              <Button label="Update Data" type='submit' />
             
            </>
          ) : (
            <div>
              <button type='button' onClick={() => setEditObjectData(true)}>
                {' '}
                Edit
              </button>
            
            </div>
          )}
        </form>
      </div>

     <ArrayEditor value={technologies} projectId={projectId} id='technologies' onChange={(e)=> settechnologies(e.target.value.split(','))}  />
     <ArrayEditor value={features} projectId={projectId} id='features' onChange={(e)=> setFeatures(e.target.value.split(','))}  />
     <ArrayEditor value={challenges} projectId={projectId} id='challenges' onChange={(e)=> setchallenges(e.target.value.split(','))}  />
     <ArrayEditor value={lessonsLearned} projectId={projectId} id='lessonsLearned' onChange={(e)=> setlessonsLearned(e.target.value.split(','))}  />

     
     {
      editscreenshots ?( <div 
      className='flex gap-[5vw]'
      >

         {screenshots?.map((image) => (
        <EditImage token={token} image={image} />
          ))}
          


      </div> ) :(
          <div className='mb-4'>
        <strong>Screenshots:</strong>
        <div className='grid grid-cols-2 gap-4 mt-2'>
          {screenshots?.map((image,idx) => (
            <div key={idx} className='border rounded p-2'>
              <img
                src={image.url}
                alt={image.caption}
                className='w-full h-40 object-cover rounded'
              />
              <p className='mt-1 text-center text-sm'>{image.caption}</p>
              <button onClick={()=>deleteProject(image)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div> 
      )
     }
     

     
      
    </div>
  )
}

export default AdminEditProject