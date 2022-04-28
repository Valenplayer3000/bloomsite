import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import { 
  BrowserRouter, 
  Routes,
  Route 
} from 'react-router-dom'
import Home from './pages/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
