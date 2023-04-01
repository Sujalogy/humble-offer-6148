let storageData = JSON.stringify(localStorage.getItem("productdesc"))
let cartData = JSON.parse(localStorage.getItem("cartData")) || []
let imgDiv1 = document.getElementById("img1_div")
let imgDiv2 = document.getElementById("img2_div")

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
let price = document.createElement("h2")
let division = document.createElement("div")
division.className +="price_div"
price.className += "priceVal"
let comp_value = document.createElement("p")
comp_value.className += "comp_value"
let color = document.createElement("p")
let size = document.createElement("p")
let btn = document.createElement("button")
btn.className +="buttonEl"

cate.innerText = `${storageData.category}`;
title.innerText = `${storageData.desc}`;
color.innerText = "Color: " + `${storageData.color}`;
size.innerText ="Size: " + `${storageData.size}`
price.innerText = `${storageData.price}`
comp_value.innerText = "Comp.value: $"+ `${storageData.comp-price}`;
btn.innerText = "Add to bag"
btn.addEventListener("click",buttonClick)
function buttonClick(){
    cartData.push(storageData)
    location.href="./checkoutpage.html"
   
}


division.append(price,comp_value)

descriptionDiv.append(cate,title,division,color,size,btn)


//  drop down js
const dropdowns=document.querySelectorAll(".dropdown")

//  loop through all dropdown elements
dropdowns.forEach(dropdown=>{
    // get inner elements from each dropdown
    const account=  document.querySelectorAll(".dropdown")
    const select = dropdown.querySelector(".select")
    const caret = dropdown.querySelector(".caret")
    const menu = dropdown.querySelector(".menu")
    const options= dropdown.querySelectorAll(".menu li")
    const selected = dropdown.querySelector(".selected")
    
    // We are using this method in order to have multiple dropdown menus on the page work

//     //  add a click event to the select element
//     select.addEventListener("click",()=>{
//         //  Add the clicked select styles to the select element 
//         select.classList.toggle("select-clicked")
//         // account[0].style.marginBottom="100px"
//     //  Add the rotate styles to the caret element
//         caret.classList.toggle("caret-rotate")
//         // Add the open styles to the menu element
//         menu.classList.toggle("menu-open")
//         // account[0].style.marginBottom="1px"
//         account[0].classList.toggle("select-dropdown")
//     })

    

//     //  loop through all option elements
//     options.forEach(option =>{

//         option.addEventListener("click",()=>{
//             selected.innerText=option.innerText;
//             account[0].classList.remove("select-dropdown")
//             select.classList.remove("select-clicked")
//             // account[0].style.marginBottom="0px"
//             caret.classList.remove("caret-rotate")
//             menu.classList.remove("menu-open")
//              options.forEach(option=>{
//                 option.classList.remove("active")
//              })
//              option.classList.add("active")
//         })
//     })
// })