// src/pages/Login.jsx
import React from 'react';
import './Login.css'; // Importa el CSS que vamos a crear

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Iniciar Sesión</h2>
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
