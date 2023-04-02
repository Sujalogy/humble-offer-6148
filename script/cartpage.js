
let cartData = JSON.parse(localStorage.getItem("cartData")) || []

total()


//  total function is showing how many product added in beg
function total()
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
}

CardDataDisplay(cartData)

function CardDataDisplay(data)
{
  
  let tbody = document.querySelector("tbody")
  let subtotal=0
  let subtotalCp= document.getElementById("subtotal");
  let cart= document.getElementById("cart");
  tbody.innerHTML=""
  
   data.forEach((el,index)=>{
    let tr= document.createElement("tr")
    let item = document.createElement("td")
    let quantity = document.createElement("td")
    let price = document.createElement("td")

    let MainDiv = document.createElement("div")
    MainDiv.classList.add("MainDiv")
    let ItemDiv = document.createElement("div")
    ItemDiv.classList.add("ItemDiv")
    let QuantityDiv = document.createElement("div")
    QuantityDiv.classList.add("QuantityDiv")

    let img = document.createElement("img")
    img.src = el.img1
    ItemDiv.append(img)

    let titleEl = document.createElement("h5")
    titleEl.innerText = el.desc
    let color = document.createElement("p")
    let size = document.createElement("p")
    color.innerText = "Color : " + el.color;
    size.innerText = "Size : " + el.size;

    QuantityDiv.append(titleEl, color, size)
    MainDiv.append(ItemDiv, QuantityDiv)
    item.append(MainDiv)

    // first portion complete

    //  second portion quantity

    let select_quantity = document.createElement("select")
    select_quantity.classList.add("selectQuantity")
    let option1 = document.createElement("option")
    let option2 = document.createElement("option")
    let option3 = document.createElement("option")
    let option4 = document.createElement("option")
    let option5 = document.createElement("option")
    let option6 = document.createElement("option")

    option1.innerText = "1"
    option2.innerText = "2"
    option3.innerText = "3"
    option4.innerText = "4"
    option5.innerText = "5"
    option6.innerText = "6"

    option1.value = "1"
    option2.value = "2"
    option3.value = "3"
    option4.value = "4"
    option5.value = "5"
    option6.value = "6"


    select_quantity.append(option1, option2, option3, option4, option5, option6)
    console.log(select_quantity)
    // =======================create remove functionality
    let remove=document.createElement("td")
    remove.addEventListener("click",()=>{
      let Deleted = cartData.filter((element,ind)=>{
        return index!=ind
      })
      cartData=Deleted
      localStorage.setItem("cartData",JSON.stringify(cartData))
      CardDataDisplay(cartData)
      total()
    })
    remove.innerText="Remove"
    //  ====================remove part complete

    quantity.append(select_quantity,remove)
    //  second portion complete  for select





    //  third part for price 
    let priceEle = document.createElement("h3")
    let compprice = document.createElement("p")

    priceEle.innerText = "$ " + el.price;
    compprice.innerText = "Comp-Value : " + el["comp-price"];

    price.classList.add("price")
    price.append(priceEle, compprice)


    //  adding price in subtotal
   
    select_quantity.addEventListener("change",(e)=>{
      e.preventDefault()
      // console.log(select_quantity.value);

      let TENSI= select_quantity.value
      el.quantity=TENSI
      localStorage.setItem("cartData",JSON.stringify(cartData))
      OrderSummary()

      
       
    })
    
  let t =  Number(el.price)*Number(el.quantity)
    subtotal+= t
    cart.textContent =subtotal+7;
    
    subtotalCp.innerText=subtotal
    console.log(cart.innerText);

    tr.append(item,quantity,price)
    tbody.append(tr)
    
  })
}

//  Order Summary functionality

function OrderSummary()
{
  let subtotalCp= document.getElementById("subtotal");
  subtotalCp.innerText = `$${total}`
 
}

//  go to  checkoutout page
let checkout = document.getElementById("checkout")

checkout.addEventListener("click",()=>{
  window.location.href="./checkoutpage.html"
})
