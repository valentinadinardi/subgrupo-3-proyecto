if(sessionStorage.getItem("usuarioEstaLogueado") == "confirmado") {
    /* Primero obtengo el item con la clave "usuarioEstaLogueado" y me fijo si tiene el valor que yo le asigné 
al loguear al usuario. Si los datos son los que yo le asigné, se va a desplegar toda la página, dando acceso al usuario. Sino entra en el else*/

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

    //Tarea 1 -------------------------

    const inputElement = document.getElementById("uname");


    // Obtiene el valor ingresado en el campo de entrada de texto
    const inputValue = inputElement.value;

    console.log(inputValue);
    
    // Almacena el valor en el localStorage bajo la clave "userName"
    localStorage.setItem("userName", inputValue);

    const contenedor = document.getElementById('user');

    // Obtiene el dato almacenado en el localStorage bajo la clave "userData"
    const storedData = localStorage.getItem("userName");

    // Comprueba si hay un dato almacenado en el localStorage
    if (storedData) {
      // Si hay un dato almacenado, actualiza el contenido del elemento para mostrar el dato
      contenedor.textContent = storedData;
    } else {
      // Si no hay un dato almacenado, muestra un mensaje indicando que no hay datos
      contenedor.textContent = "No hay datos almacenados.";
  }
 
});} 

else { 
   /*Si entra al else es porque los datos no se pudo obtener la clave "usuarioEstaLogueado" o esta no tiene el valor "confirmado"*/ 
    window.location.href = "login.html";
}