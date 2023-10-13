import './../styles/Login.css'

export default function Login() {
    return(
        <article>
            <div className="login-container">
      <div className="left-section">
        <img src="/src/images/fotologin.webp" alt="Imagen de inicio de sesión" />
      </div>
      <div className="right-section">
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Nombre de usuario</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Iniciar Sesión</button>
          <a>¿Olvidaste tu contraseña?</a>
        </form>
        {/* Redirección: <Link to="/contact">Contáctanos</Link> */}
      </div>
    </div>
        </article>
    );
}