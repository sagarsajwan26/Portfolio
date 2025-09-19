import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PortfolioLayout from './pages/Portfolio/PortfolioLayout'
import PortfolioSkillsDetailPage from './pages/Portfolio/components/PortfolioSkillsDetailPage'
import PortfolioProjectsList from './pages/Portfolio/components/Project/PortfolioProjectsList'
import PortfolioSingleProject from './pages/Portfolio/components/Project/PortfolioSingleProject'
import PortfolioContactDetailPage from './pages/Portfolio/components/Contact/PortfolioContactDetailPage'
import PortfolioContactPage from './pages/Portfolio/components/PortfolioContactPage'
import AdminAuth from './pages/Admin/AdminAuth'
import AdminLayout from './layout/admin/AdminLayout'
import {ToastContainer} from 'react-toastify'
import ProjectAdding from './test/ProjectAdding'
import ProjectById from './test/ProjectById'

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
      <Route path='/admin/homepage' element={<AdminLayout/>}/>
    </Routes>
    </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App