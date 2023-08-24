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

    
 //Obtenemos el item definido en login.js con la key userName
 let storedData = localStorage.getItem("userName");

 //Obtenemos los elementos con id user para mostrar el usuario en el html
 let mostrarUser = document.getElementsByClassName("user");

 //Para verificar que se está guardando el nombre de usuario
 console.log(storedData);

 //Agregamos el nombre de usuario al html
  //mostrarUser.textContent(storedData);
 // Agregamos el nombre de usuario al html
 for (let i = 0; i < mostrarUser.length; i++) {
    mostrarUser[i].textContent = storedData;
}
});}

else { 
   /*Si entra al else es porque los datos no se pudo obtener la clave "usuarioEstaLogueado" o esta no tiene el valor "confirmado"*/ 
    window.location.href = "login.html";
}