import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./pages/App"
import "./styles/index.css"
import { createHashRouter, RouterProvider } from 'react-router-dom'

import Login from "./pages/Login"
import ListarPacientes from "./pages/Pacientes/ListarPacientes"
import AgregarPaciente from "./pages/Pacientes/AgregarPaciente"
import EditarPaciente from "./pages/Pacientes/EditarPaciente"
import DetallePaciente from "./pages/Pacientes/DetallePaciente"


const router = createHashRouter([
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
    path: "/", 
    element: <Login />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
