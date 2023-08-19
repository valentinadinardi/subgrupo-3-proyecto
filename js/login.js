//  // Al autenticarse
// fetch('/api/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ username: 'usuario', password: 'contraseña' }),
//   })
//   .then(response => response.json())
//   .then(data => {
//     if (data.token) {
//       localStorage.setItem('token', data.token);
//        // Redirige al usuario a la página de inicio
//       window.location.href = 'index.html';
//     }
//   })
//   .catch(error => { 
//     console.error('Error en la autenticación:', error);
// }); 


 /* En index.html tengo un form con el id loginform. Voy a obtener este elemento por su id y 
 le agrego el Event Listener de la acción submit que tiene el login. */
document.getElementById("loginform").addEventListener("submit", (e) => {
  e.preventDefault();
  /* El prevent default lo que hace es impedir que el navegador realice acciones por default, ya que quiero que realice las acciones en las próximas lineas.*/
  sessionStorage.setItem("usuarioEstaLogueado", "confirmado");
  window.location.href = "index.html";    
});
/* SessionStorage me permite almacenar información en la sesión a la que despues vamos a poder acceder en otras partes del código utilizando 
una clave, en este caso "usuarioEstaLogueado". Se le asigna el valor "confirmado" y después en el código voy a buscar que este sea 
el valor que tiene la clave para ver si está logueado o no.*/