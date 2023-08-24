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