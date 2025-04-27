// src/pages/Login.jsx
import React from 'react';

function Login() {
  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form>
        <input type="email" placeholder="Correo electrónico" /><br/>
        <input type="password" placeholder="Contraseña" /><br/>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
