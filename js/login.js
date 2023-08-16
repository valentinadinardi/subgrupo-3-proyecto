 // Al autenticarse
fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'usuario', password: 'contraseña' }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.token) {
      localStorage.setItem('token', data.token);
       // Redirige al usuario a la página de inicio
      window.location.href = 'index.html';
    }
  })
  .catch(error => { 
    console.error('Error en la autenticación:', error);
}); 

