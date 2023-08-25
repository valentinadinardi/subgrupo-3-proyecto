/*función que recibe un array con los datos, y los muestra en pantalla a través del uso del DOM.
 (Arregle la función para mostrar la lista de productos en el HTML, agregandolé un 
 products) 
*/
let productsArray = [];

// Aquí el elemento HTML en donde se mostrará la lista de productos
const productListElement = document.getElementById("product-list-container");

// Verifica si el usuario está logueado
if (sessionStorage.getItem("usuarioEstaLogueado") == "confirmado") {
    // Obtiene el identificador de categoría almacenado en localStorage
    let catID = localStorage.getItem("catID");

    // Aquí verifica si el identificador es válido
    if (catID) {
        // Construí la URL para obtener los productos de las diferentes categorías
        let productsURL = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`;

        // Realiza la solicitud de datos utilizando la URL actualizada
        
        fetch(productsURL)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                // Asigna los productos obtenidos al array productsArray
                productsArray = data.products;

                // Llama a la función para mostrar la lista de productos en el HTML
                showProductsList(productsArray);
            })
            .catch(function(error) {
                console.log("Error al cargar los productos:", error);
            });
    } else {
        console.log("Identificador de categoría no válido");
    }

    /* Función que recibe un array con los datos y los muestra en pantalla a través del uso del DOM.
       Aquí arregle la función para mostrar la lista de productos en el HTML, 
       agregandole un products*/
    function showProductsList(productsArray) {
        let htmlContentToAppend = "";

        
        for (let i = 0; i < productsArray.length; i++) {
            let product = productsArray[i];

            
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="${product.image}" alt="product image" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <div class="mb-1">
                                <h4>${product.name} - USD ${product.cost}</h4>
                                <p>${product.description}</p>
                            </div>
                            <small class="text-muted">${product.soldCount} vendidos</small>
                        </div>
                    </div>
                </div>
            </div>`;
        }

        // Inserta el contenido HTML construido en el elemento productListElement
        productListElement.innerHTML = htmlContentToAppend;
    }

    //Obtener el item definido en login.js con la key userName
    let storedData = localStorage.getItem("userName");

    //Obtenemos los elementos con id user para mostrar el usuario en el html
    let mostrarUser = document.getElementsByClassName("user");

    //Agregamos el nombre de usuario al html
    for (let i = 0; i < mostrarUser.length; i++) {
        mostrarUser[i].textContent = storedData;
    }
} else {
    window.location.href = "login.html";
}
