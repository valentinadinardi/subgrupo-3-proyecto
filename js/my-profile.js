// Espera hasta que el contenido de la página esté completamente cargado
/*document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el elemento donde se mostrará el dato del localStorage
    const dataElement = document.getElementById("user");

    // Obtiene el dato almacenado en el localStorage bajo la clave "userData"
    const storedData = localStorage.getItem("uname");
  
    // Comprueba si hay un dato almacenado en el localStorage
    if (storedData) {
