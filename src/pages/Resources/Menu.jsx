import './../../styles/Menu.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleUser, faXmark } from '@fortawesome/free-solid-svg-icons';
export default function Menu() {
    const [subMenus, setSubMenus] = useState({
        usuarios: false,
        citas: false,
        configuracion: false,
    });

    const toggleSubMenu = (menuKey) => {
        setSubMenus((prevSubMenus) => ({
            ...prevSubMenus,
            [menuKey]: !prevSubMenus[menuKey],
        }));
    };
    return (
        <article>
            <div class="menu">
                <div class="menu-desplegable">
                    <label for="btn-menu-desplegable" class="fa-solid fa-bars">
                        <FontAwesomeIcon icon={faBars} />
                    </label>
                </div>
                <div class="logo">
                    <img src="/src/images/logo.png" alt="Logo" />
                </div>
                <a class="profile-button" href="#">
                    Profile 
                    <label class="icon-profile">
                        <FontAwesomeIcon icon={faCircleUser} />
                    </label>
                </a>
            </div>
            <input type="checkbox" id="btn-menu-desplegable" />
            <div class="container-menu-desplegable">
                <div class="contenido-menu-desplegable">
                    <nav>
                    <a className='option-menu' href="#/dashboard">Dashboard</a>
                        <a className='option-menu' href="#" onClick={() => toggleSubMenu('usuarios')}>
                            Usuarios
                        </a>
                        {subMenus.usuarios && (
                            <div className="submenu">
                                <a className='option-submenu' href="#">Pacientes</a>
                                <a className='option-submenu' href="#">Médicos</a>
                            </div>
                        )}
                        <a className='option-menu' href="#" onClick={() => toggleSubMenu('citas')}>
                            Citas
                        </a>
                        {subMenus.citas && (
                            <div className="submenu">
                                <a className='option-submenu' href="#">Reservar cita</a>
                                <a className='option-submenu' href="#">Resultados</a>
                            </div>
                        )}
                        <a className='option-menu' href="#" onClick={() => toggleSubMenu('configuracion')}>
                            Configuración
                        </a>
                        {subMenus.configuracion && (
                            <div className="submenu">
                                <a className='option-submenu' href="#">Pruebas</a>
                                <a className='option-submenu' href="#">Opción 2</a>
                            </div>
                        )}
                        <a className='option-menu' href="#">Cerrar Sesión</a>
                    </nav>
                    <label for="btn-menu-desplegable" class="fa-solid fa-xmark">
                        <FontAwesomeIcon icon={faXmark} />
                    </label>
                </div>
            </div>
        </article>
    )
}