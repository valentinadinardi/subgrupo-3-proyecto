
document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos el ID del producto guardado en el almacenamiento local
    const productId = localStorage.getItem("prodID");
  
    // Verificamos si se ha guardado un ID de producto
    if (productId) {
      // Construimos la URL para obtener la información del producto
      const productURL = `https://japceibal.github.io/emercado-api/products/${productId}.json`;
  
      // Realizamos la solicitud GET para obtener la información del producto mediante un fetch
      fetch(productURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (productData) {
          // Accedemos a los campos de información del producto (guiado por la API)
          const productName = productData.name;
          const productDescription = productData.description;
          const productCost = productData.cost;
          const productCurrency = productData.currency;
          const productSoldCount = productData.soldCount;
          const productCategory = productData.category;
          const productImages = productData.images;
          const relatedProducts = productData.relatedProducts;
  
          // Mostramos la información del producto en el HTML que para eso añadimos el container
          const productInfoContainer = document.getElementById("product-info-container");
          productInfoContainer.innerHTML = `
            <h1 class="text-start">${productName}</h1>
            <hr/>
            <p class="text-start"><strong> Precio:</strong></p>
            <p class="text-start"> ${productCurrency} ${productCost} </p>

            <p class="text-start"><strong> Descripción:</strong></p>
            <p class="text-start"> ${productDescription}</p>

            <p class="text-start"><strong> Categoría:</strong></p>
            <p class="text-start">${productCategory}</p>

            <p class="text-start"><strong> Cantidad de vendidos:</strong></p>
            <p class="text-start">${productSoldCount}</p>

            <p class="text-start"><strong> Imágenes ilustrativas </strong></p>
            
            <div>
              <h4>Imágenes del Producto</h4>
                 <div class="row">
                    ${productImages.map(image => `
                    <div class="col-md-3">
                      <img src="${image}" alt="Imagen del Producto" class="img-fluid">
                    </div>
                    `).join("")}
                  </div>

                  <h4>Productos Relacionados</h4>
                   <ul>
                     ${relatedProducts.map(relatedProduct => `<li>${relatedProduct.name}</li>`).join("")}
                   </ul>
            </div>

          `;
        })
        .catch(function (error) {
          console.error("Error al obtener la información del producto:", error);
        });
    } else {
      console.error("No se encontró un ID de producto en el almacenamiento local.");
    }
});

//join("") se utiliza para unir todos los fragmentos HTML en una sola cadena de texto.//
//map es un método de JavaScript que se utiliza para iterar sobre cada elemento del array//
  