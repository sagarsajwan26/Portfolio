import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PortfolioLayout from './pages/Portfolio/PortfolioLayout'
import PortfolioSkillsDetailPage from './pages/Portfolio/components/PortfolioSkillsDetailPage'
import PortfolioProjectsList from './pages/Portfolio/components/Project/PortfolioProjectsList'
import PortfolioSingleProject from './pages/Portfolio/components/Project/PortfolioSingleProject'
import PortfolioContactDetailPage from './pages/Portfolio/components/Contact/PortfolioContactDetailPage'
import PortfolioContactPage from './pages/Portfolio/components/PortfolioContactPage'
import AdminAuth from './pages/Admin/AdminAuth'
import {ToastContainer} from 'react-toastify'
import ProjectAdding from './test/ProjectAdding'
import ProjectById from './test/ProjectById'
import AdminHome from './pages/Admin/adminHome/AdminHome'
import AdminLayout from './pages/Admin/AdminLayout'
import PrivateRoute from './pages/privateRoutes/PrivateRoute'
import SkillAndExpertise from './pages/Admin/skill&Expertise/SkillAndExpertise'
import AdminProfile from './pages/Admin/AdminProfile/AdminProfile'
import AdminProjects from './pages/Admin/AdminProjects/AdminProjects'
import EditSkill from './pages/Admin/skill&Expertise/EditSkill'
import AddSkill from './pages/Admin/skill&Expertise/AddSkill'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/addingProjectTest' element={<ProjectAdding/>}/>
      <Route path='/ProjectById' element={<ProjectById />}/>
      
      
      
      <Route path='/' element={<PortfolioLayout/>}/>
      <Route path='/sagarsajwan/skills' element={<PortfolioSkillsDetailPage/>}/>
      <Route path ='/sagarsajwan/projects' element={ <PortfolioProjectsList />} />
       <Route path='/sagarsajwan/projects/:id' element={<PortfolioSingleProject/>}/>
        <Route path='/sagarsajwan/contact' element={<PortfolioContactDetailPage/>}/>
        <Route path='/sagarsajwan/contact' element={<PortfolioContactPage/>}/>
          


      <Route path='/admin/auth' element={<AdminAuth/>}/>
      <Route element={<PrivateRoute />}>
           <Route path='/admin/homepage' element={<AdminLayout/>}>
      <Route index element={<AdminHome />} />
      <Route path='skills' element={<SkillAndExpertise />} />
      <Route path='skill/add' element={<AddSkill />} />
       <Route path='skills/:id' element={<EditSkill />} />
      <Route path='projects' element={<AdminProjects />} />
      <Route path='profile' element={<AdminProfile />} />

      </Route>
      </Route>
   
    
    </Routes>
    </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App