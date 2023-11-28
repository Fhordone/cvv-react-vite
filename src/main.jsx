import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./pages/App"
import "./styles/index.css"
import { createHashRouter, RouterProvider } from 'react-router-dom'

import ListarPacientes from "./pages/Pacientes/ListarPacientes"
import AgregarPaciente from "./pages/Pacientes/AgregarPaciente"
import EditarPaciente from "./pages/Pacientes/EditarPaciente"
import DetallePaciente from "./pages/Pacientes/DetallePaciente"
import Dashboard from "./pages/Dashboard"
import Menu from "./pages/Resources/Menu"
import Login from "./pages/Login"


const router = createHashRouter([
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/listarpaciente",
    element: <ListarPacientes />
  },
  {
    path: "/crearpaciente",
    element: <AgregarPaciente />
  },
  {
    path: "/editarpaciente",
    element: <EditarPaciente />
  },
  {
    path: "/detallepaciente",
    element: <DetallePaciente />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/", 
    element: <Menu />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <RouterProvider router={router} />
  </React.StrictMode>
)
