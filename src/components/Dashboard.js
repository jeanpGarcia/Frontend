import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div>
      <h2>Panel de Control</h2>
      <p>¡Has iniciado sesión correctamente!</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
}

export default Dashboard;