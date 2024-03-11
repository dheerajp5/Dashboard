import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App.jsx'
import ErrorPage from './pages/errorPage.jsx'
import Dashboard from './pages/dashboard.jsx';
import Holiday from './pages/holiday';
import TimeTracker from './pages/timeTracker.jsx';
import Attendance from './pages/atendance.jsx';
import Leave from './pages/leave.jsx';
import './index.css';



const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    errorElement : <ErrorPage />,
    children : [
      {
        path: '/time-tracker',
        element: <TimeTracker />
      },
      {
        path: '/holiday',
        element: <Holiday />
      },
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/attendence',
        element: <Attendance />
      },
      {
        path: '/leave',
        element: <Leave />
      },
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
