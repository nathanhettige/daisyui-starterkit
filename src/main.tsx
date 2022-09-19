import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ThemePage from './pages/ThemePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/theme',
    element: <ThemePage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
