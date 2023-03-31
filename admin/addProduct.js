let addProductForm = document.getElementById("form");
// let productsArray = JSON.parse(localStorage.getItem("products")) || [];

addProductForm.addEventListener("submit", function(e){
    e.preventDefault();

    let productId = document.getElementById("product-id").value;
    let productImg1 = document.getElementById("img-1").value;
    let productImg2 = document.getElementById("img-2").value;
    let productCategory = document.getElementById("category").value;
    let productDesc = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let compPrice = document.getElementById("comp-price").value;
    let productSize = document.getElementById("size").value;
    let productColor = document.getElementById("color").value;

    
    addProduct(productId, productImg1, productImg2, productCategory, productDesc, price, compPrice, productSize, productColor);
    // productsArray.push(productObj);
    
    // localStorage.setItem("products", JSON.stringify(productsArray));
});

function addProduct(productId, productImg1, productImg2, productCategory, productDesc, price, compPrice, productSize,productColor){

    let productObj = {
        "id" : productId,
        "img1" : productImg1,
        "img2" : productImg2,
        "category" : productCategory,
        "desc" : productDesc,
        "price" : price,
        "comp-price" : compPrice,
        "size" : productSize,
        "color" : productColor,
    };

    fetch(`http://127.0.0.1:3000/api/women`, {
        method : 'POST',
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify(productObj)
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
}