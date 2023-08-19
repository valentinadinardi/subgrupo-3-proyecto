//array donde se cargarán los datos recibidos:
let categoriesArray = [];


// URL de la API que contiene la colección de productos en formato JSON
const apiUrl = "https://japceibal.github.io/emercado-api/cats_products/101.json";


const productListElement = document.getElementById("product-list-container");




//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM
function showCategoriesList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let products = array[i];
        console.log(array[i])

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
        
                <div class="col-3">
                    <img src="` + products.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ products.name +`</h4> 
                        <p> `+ products.description +`</p> 
                        </div>
                        <small class="text-muted">` +products.soldCount  + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("product-list-container").innerHTML = htmlContentToAppend; 
    }
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(apiUrl).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data.products;
            console.log(categoriesArray)
            showCategoriesList(categoriesArray);
        }
    });
});