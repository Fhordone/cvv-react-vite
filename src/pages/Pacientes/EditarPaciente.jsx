export default function EditarPaciente(){
    return (
        <div className="box-general">
            <h1 className='tittle-text'>Detalle del paciente</h1>
            <div className='box-content'>
                <div className='box-user'>
                    <div className='box-user-content'>
                        <img src="/src/images/perfil.webp" className="photo-perfil" alt="Foto de perfil" />
                        <h4>Paolo Guerrero</h4>
                        <div className='user-information'>
                            <p>DNI: 15985432</p>
                            <p>Tipo: Paciente</p>
                            <p>Estado: Activo</p>
                            <p>Fecha de Registro: 27/05/2023</p>
                        </div>
                    </div>
                </div>
                <div className='box-formulario'>
                <h3 className="Subtittle">Información General</h3>
                    <div className="form-group">
                        <div className="form-column">
                            <label className="Texto-input">Nombres</label>
                            <input type="text" className="input-form" />
                        </div>
                        <div className="form-column">
                            <label className="Texto-input">Fecha de Nacimiento</label>
                            <input type="text" className="input-form" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-column">
                            <label className="Texto-input">Apellidos</label>
                            <input type="text" className="input-form" />
                        </div>
                        <div className="form-column">
                            <label className="Texto-input">Genero</label>
                            <input type="text" className="input-form" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-column">
                            <label className="Texto-input">Email</label>
                            <input type="text" className="input-form" />
                        </div>
                        <div className="form-column">
                            <label className="Texto-input">Teléfono</label>
                            <input type="text" className="input-form" />
                        </div>
                    </div>
                    <h3 className="Subtittle">Ubicación</h3>
                    <div className="form-group">
                        <div className="form-column">
                            <label className="Texto-input">Pais</label>
                            <input type="text" className="input-form" />
                        </div>
                        <div className="form-column">
                            <label className="Texto-input">Provincia</label>
                            <input type="text" className="input-form" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-column">
                            <label className="Texto-input">Distrito</label>
                            <input type="text" className="input-form" />
                        </div>
                        <div className="form-column">
                            <label className="Texto-input">Código Postal</label>
                            <input type="text" className="input-form" />
                        </div>
                    </div>
                    <button className="btn-formulario">Actualizar</button>
                </div>
                
            </div>
            
        </div>
    )
}