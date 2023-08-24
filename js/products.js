//array donde se cargarán los datos recibidos:
let categoriesArray = [];

// URL de la API que contiene la colección de productos en formato JSON
const apiUrl = "https://japceibal.github.io/emercado-api/cats_products/101.json";

const productListElement = document.getElementById("product-list-container");

if(sessionStorage.getItem("usuarioEstaLogueado") == "confirmado") {



//función que recibe un array con los datos, y los muestra en pantalla a través del uso del DOM
function showCategoriesList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let products = array[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="${products.image}" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                            <h4>${products.name} - USD ${products.cost}</h4>
                            <p>${products.description}</p>
                        </div>
                        <small class="text-muted">${products.soldCount} vendidos</small>
                    </div>
                </div>
            </div>
        </div>`;
    }

    productListElement.innerHTML = htmlContentToAppend; 
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(apiUrl).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data.products;
            showCategoriesList(categoriesArray);
        }
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
});} else {
    window.location.href = "login.html";
}
