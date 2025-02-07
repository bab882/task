import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Private from './pages/Private/Private'
import Dashboard from './pages/Private/Private/Dashboard'
import Projects from './pages/Private/Private/Projects'
import Agenda from './pages/Private/Private/Agenda'
import Profil from './pages/Private/Private/Profil'
import NotFound from './pages/NotFound'
import './App.css'

function App() {

  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/dashboard" element={<Dashboard />} />
          <Route path="/private/projects" element={<Projects />} />
          <Route path="/private/agenda" element={<Agenda />} />
          <Route path="/private/profil" element={<Profil />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
