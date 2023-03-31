let productsContainer = document.getElementById("products-container");
let productsArray = JSON.parse(localStorage.getItem("products")) || [];

displayProducts(productsArray);

function displayProducts(data){
    productsContainer.innerHTML = "";

    data.forEach((product, index) => {
        let productCard = document.createElement("div");
        productCard.setAttribute("class", "product-card");

        let productImg = document.createElement("img");
        productImg.setAttribute("class", "product-img");

        let productDesc = document.createElement("h4");
        productDesc.setAttribute("class", "product-desc");

        let productCategory = document.createElement("h5");
        productCategory.setAttribute("class", "product-category");

        let productPrice = document.createElement("p");
        productPrice.setAttribute("class", "product-price");

        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.setAttribute("class", "remove-btn");

        removeButton.addEventListener("click", function(){
            data.splice(index, 1);
            localStorage.setItem("products", JSON.stringify(data));
            displayProducts(productsArray);
        })

        productImg.src = product.img1;
        productDesc.innerText = product.desc;
        productPrice.innerText = `$${product.price}`;
        
        productsContainer.append(productCard);
    });
}