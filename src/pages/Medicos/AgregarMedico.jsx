export default function AgregarMedico(){
    return (
        <div className="box-general">
        <h1 className='tittle-text'>Crear Medico</h1>
        <div className='box-crear-formulario'>
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
                    <button className="btn-formulario">Registrar Paciente</button>
                </div>
                </div>
    );
}