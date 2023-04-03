let cartData = JSON.parse(localStorage.getItem("cartData")) || []

total()

//  total function is showing how many product added in beg
function total(){
  let sum = cartData.length;
  console.log(sum);
  
  let total = document.getElementById("cart-total");
  total.textContent = sum
  console.log(total.textContent);
}
// let sum = cartData.length
// console.log(sum)
// let span = document.getElementsByClassName("spanEl")
// let total = document.getElementById("cart-total");
// total.textContent= sum
// console.log(total.textContent)
// total.append(span)

CardDataDisplay(cartData)

function CardDataDisplay(data){
  
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
    let tom = subtotal+7
    localStorage.setItem("Estimated-Total",JSON.stringify(tom))
    subtotalCp.innerText=subtotal
    console.log(cart.innerText);

    tr.append(item,quantity,price)
    tbody.append(tr)
    
  })
}
//  Order Summary functionality

function OrderSummary(){
  // let cartData=JSON.parse(localStorage.getItem("cartData"))||[]
  let subtotalCp= document.getElementById("subtotal");
  subtotalCp.innerHTML=""
  let cart= document.getElementById("cart");
  cart.innerHTML=""
    let subtotal = 0
    cartData.forEach((el)=>{
          subtotal+= (+el.price)*(+el.quantity)
          console.log(el.price,el.quantity)
    })
    subtotalCp.innerText=subtotal
    cart.innerText=subtotal+7
    let tom = subtotal+7
    subtotalCp.innerText = subtotal
    localStorage.setItem("Estimated-Total",JSON.stringify(tom))

}
//  go to  checkoutout page
let checkout = document.getElementById("checkout")

checkout.addEventListener("click",()=>{
  window.location.href="./checkoutpage.html"
})

