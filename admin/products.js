let productsContainer = document.getElementById("product-container");
// let productsArray = JSON.parse(localStorage.getItem("products")) || [];

window.addEventListener("load", function(e){
    e.preventDefault();

    fetchProducts();
});

function fetchProducts(){
    fetch(`http://127.0.0.1:3000/api/product`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        displayProducts(data);
    })
}

// displayProducts(productsArray);

function displayProducts(data){
    productsContainer.innerHTML = "";

    data.forEach((product, index) => {
        let productCard = document.createElement("div");
        productCard.setAttribute("class", "product-card");

        let productImg = document.createElement("img");
        productImg.setAttribute("class", "product-img");
        productImg.src = product.img1;

        let productDesc = document.createElement("h3");
        productDesc.setAttribute("class", "product-desc");
        productDesc.innerText = product.desc;

        let productCategory = document.createElement("h5");
        productCategory.setAttribute("class", "product-category");
        productCategory.innerText = product.category;
        
        let productPrice = document.createElement("p");
        productPrice.setAttribute("class", "product-price");
        productPrice.innerText = `$${product.price}`;

        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.setAttribute("class", "remove-btn");

        removeButton.addEventListener("click", function(){
            removeProduct(product.id);
            // data.splice(index, 1);
            // localStorage.setItem("products", JSON.stringify(data));
            // displayProducts(productsArray);
        })

        productCard.append(productImg, productDesc, productCategory, productPrice, removeButton);
        productsContainer.append(productCard);
    });
}

function removeProduct(productid){
    fetch(`https://mock-api-template-zsq1.onrender.com/product/${productid}`, {
        method : 'DELETE',
        headers : {
            'Content-type' : 'application/json'
        }
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
}