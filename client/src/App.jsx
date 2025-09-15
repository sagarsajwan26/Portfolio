import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PortfolioLayout from './pages/Portfolio/PortfolioLayout'
import PortfolioSkillsDetailPage from './pages/Portfolio/components/PortfolioSkillsDetailPage'
import PortfolioProjectsList from './pages/Portfolio/components/Project/PortfolioProjectsList'
import PortfolioSingleProject from './pages/Portfolio/components/Project/PortfolioSingleProject'
import PortfolioContactDetailPage from './pages/Portfolio/components/Contact/PortfolioContactDetailPage'
import PortfolioContactPage from './pages/Portfolio/components/PortfolioContactPage'
import AdminAuth from './pages/Admin/AdminAuth'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PortfolioLayout/>}/>
      <Route path='/sagarsajwan/skills' element={<PortfolioSkillsDetailPage/>}/>
      <Route path ='/sagarsajwan/projects' element={ <PortfolioProjectsList />} />
       <Route path='/sagarsajwan/projects/:id' element={<PortfolioSingleProject/>}/>
        <Route path='/sagarsajwan/contact' element={<PortfolioContactDetailPage/>}/>
        <Route path='/sagarsajwan/contact' element={<PortfolioContactPage/>}/>
   

   {/* admin  */}
      <Route path='/admin/auth' element={<AdminAuth/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App