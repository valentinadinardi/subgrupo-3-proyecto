//array donde se cargarán los datos recibidos:
let categoriesArray = [];

// URL de la API que contiene la colección de productos en formato JSON
const apiUrl = "https://japceibal.github.io/emercado-api/cats_products/101.json";

const productListElement = document.getElementById("product-list-container");

if(sessionStorage.getItem("usuarioEstaLogueado") == "confirmado");



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
});

//aca agrego la funcionalidad para los inputs ascendente y descendiente

const ORDER_ASC_BY_NAME = document.getElementById("sortAsc");
const ORDER_DESC_BY_NAME = document.getElementById("sortDesc");
const ORDER_BY_PROD_COUNT = document.getElementById("sortByCount");
let currentCategoriesArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;
let categoriesArrays = resultObj.data.products;
showCategoriesList(categoriesArrays);

/*if(ORDER_DESC_BY_NAME.checked){
    sortProduct(ORDER_DESC_BY_NAME, categoriesArray)
}*/

    function sortProduct(criteria, array){
        let result = [];
        if (criteria === ORDER_ASC_BY_NAME)
        {
            result = array.sort(function(a, b) {
                if ( a.name < b.name ){ return -1; }
                if ( a.name > b.name ){ return 1; }
                return 0;
            });
        }else if (criteria === ORDER_DESC_BY_NAME){
            result = array.sort(function(a, b) {
                if ( a.name > b.name ){ return -1; }
                if ( a.name < b.name ){ return 1; }
                return 0;
            });
        }else if (criteria === ORDER_BY_PROD_COUNT){
            result = array.sort(function(a, b) {
                let aCount = parseInt(a.productCount);
                let bCount = parseInt(b.productCount);
    
                if ( aCount > bCount ){ return -1; }
                if ( aCount < bCount ){ return 1; }
                return 0;
            });
        }
        return result;
        };  

    
    
    function setCatID(id) {
        localStorage.setItem("catID", id);
        window.location = "products.html"
    }
