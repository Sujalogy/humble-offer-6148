let storageData = JSON.parse(localStorage.getItem("productdesc"))
let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
let imgDiv1 = document.getElementById("img1_div")
let imgDiv2 = document.getElementById("img2_div")
// console.log(storageData)

let image1  = document.createElement("img")
image1.className+="image1"
let image2 =  document.createElement("img")
image2.className+="image2"

image1.setAttribute("src",`${storageData.img1}`)
image2.setAttribute("src",`${storageData.img2}`)

imgDiv1.append(image1)
imgDiv2.append(image2)


let descriptionDiv = document.getElementById("description")

let cate = document.createElement("p")
cate.className += "cate"
let title = document.createElement("h2")
title.className+="pleaseDo"
let price = document.createElement("h2")
let division = document.createElement("div")
division.className +="price_div"
price.className += "priceVal"
let comp_value = document.createElement("p")
comp_value.className += "comp_value"
let color = document.createElement("p")
color.className+="color"
let size = document.createElement("p")
size.className+="size"
let btn = document.createElement("button")
btn.className +="buttonEl"

cate.innerText = `${storageData.category}`;
title.innerText = `${storageData.desc}`;
color.innerText = "Color: " + `${storageData.color}`;
size.innerText ="Size: " + `${storageData.size}`
price.innerText = `${storageData.price}`
comp_value.innerText = "Comp.value: $"+ `${((storageData.price)*1.3).toFixed(2)}`;
btn.innerText = "Add to bag"
btn.addEventListener("click",buttonClick)
function buttonClick(){
    cartData.push(storageData)
    location.href="./cartpage.html"
}


division.append(price,comp_value)

descriptionDiv.append(cate,title,division,color,size,btn)

