import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '@/App'
import './index.css'
import ErrorPage from './errorpage/page'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<App />} />
        <Route path="/errorpage" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
