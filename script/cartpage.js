
let cartData = JSON.parse(localStorage.getItem("cartData")) || [ 
  {
  id: "001",
  img1: "https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dw4b9d789d/86741608_198_main.jpg?sw=478&sh=557&sm=fit&sfrm=jpg",
  img2: "https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dw11ed06bb/86741608_198_alt1.jpg?sw=478&sh=557&sm=fit&sfrm=jpg",
  category: "Limited Edition",
  desc: "Low-Rise Flare Cargo Pants",
  price: 35.00,
  compprice: "64.95",
  size: "S",
  color: "green"
},
{
  id: "001",
  img1: "https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dw4b9d789d/86741608_198_main.jpg?sw=478&sh=557&sm=fit&sfrm=jpg",
  img2: "https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dw11ed06bb/86741608_198_alt1.jpg?sw=478&sh=557&sm=fit&sfrm=jpg",
  category: "Limited Edition",
  desc: "Low-Rise Flare Cargo Pants",
  price: 35.00,
  compprice: "64.95",
  size: "S",
  color: "green"
},
{
  id: "001",
  img1: "https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dw4b9d789d/86741608_198_main.jpg?sw=478&sh=557&sm=fit&sfrm=jpg",
  img2: "https://www.aeropostale.com/dw/image/v2/BBSG_PRD/on/demandware.static/-/Sites-master-catalog-aeropostale/default/dw11ed06bb/86741608_198_alt1.jpg?sw=478&sh=557&sm=fit&sfrm=jpg",
  category: "Limited Edition",
  desc: "Low-Rise Flare Cargo Pants",
  price: 35.00,
  compprice: "64.95",
  size: "S",
  color: "green"
}
]

// let sum = cartData.length

// console.log(sum)
// let span = document.getElementsByClassName("spanEl")

// let total = document.getElementById("cart-total");
// total.textContent= sum
// console.log(total.textContent)
// total.append(span)

let sum = cartData.length;
console.log(sum);

let total = document.getElementById("cart-total");
total.textContent = sum + " "+"items";
console.log(total.textContent);

let parentEl = document.getElementById("total");
for (let i = 0; i < cartData.length; i++) {
  let itemEl = document.createElement("span");
  itemEl.textContent = cartData[i].name;
  parentEl.appendChild(itemEl);
}

let checkoutButton = document.getElementById("checkout")
checkoutButton.addEventListener("click",checkoutBtn)
function checkoutBtn(){
    location.href= "./checkoutpage.html"
}


let img_div = document.getElementById("img1_div")
function DisplayData() {
  img_div.innerHTML = "";
 cartData.forEach((product) => {


let image = document.createElement("img")
image.setAttribute("src",product.img1)
image.className+="imageEl"
  console.log("Sagar")
img_div.append(image)
 })
}
DisplayData()

let title_div = document.getElementById("title")
function display() {
 title_div.innerHTML = "";
for(let i=0;i<cartData.length;i++)
{
let titleEl = document.createElement("h2")
let color = document.createElement("p")
let size = document.createElement("p")

titleEl.innerText =cartData[i].desc ;
color.innerText = "Color : " + cartData[i].color;
size.innerText = "Size : " + cartData[i].size;

title_div.append(titleEl,color,size)
}
}
display()

let quantity_div = document.getElementById("quantityEl")
for(let i=0;i<cartData.length;i++)
{
let select_quantity = document.createElement("select")
select_quantity.className+="select_quantity"
let option1 = document.createElement("option")
let option2 = document.createElement("option")
let option3 = document.createElement("option")
let option4 = document.createElement("option")
let option5 = document.createElement("option")
let option6 = document.createElement("option")
let remove = document.createElement("button")
remove.className += "removeEl"

option1.innerText = "1"
option2.innerText = "2"
option3.innerText = "3"
option4.innerText = "4"
option5.innerText = "5"
option6.innerText = "6"
remove.innerText = "Remove"

  remove.addEventListener("click", () => {
    cartData=cartData.filter((ele)=>{
      return ele.id!==cartData.id
    })
    localStorage.setItem("cartData",JSON.stringify(cartData))
    DisplayData()
  });
  select_quantity.append(option1,option2,option3,option4,option5,option6)
quantity_div.append(select_quantity,remove)

}



let price_div = document.getElementById("priceEl")
function display_price() {
  // title_div.innerHTML = "";
for(let i=0;i<cartData.length;i++)
{
let priceEle = document.createElement("h3")
let compprice = document.createElement("p")

priceEle.innerText = "$ " +cartData[i].price ;
compprice.innerText = "Comp-Value : " + cartData[i].compprice;


price_div.append(priceEle,compprice)
}
}
display_price()


totalPrice()
 
function totalPrice() {
  let total = 0;
  let cartData = JSON.parse(localStorage.getItem("cartData"));

  for (let i = 0; i < cartData.length; i++) {
    total += Number(cartData[i].price);
  }
  let subtotalCp= document.getElementById("subtotal");
  subtotalCp.innerText = `$${total}`
 
}
 