// src/pages/Register.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './Login.css'; // Reutilizando el mismo CSS

function Register() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Crear Cuenta</h2>
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="password" placeholder="Confirmar contraseña" required />
        <button type="submit">Registrarme</button>

        <p className="link-register">
          ¿Ya tienes una cuenta? <Link to="/">Inicia sesión</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
