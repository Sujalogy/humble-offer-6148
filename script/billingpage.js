let formData = document.getElementById("form")
let lsData = JSON.parse(localStorage.getItem("checkout"))
let form_div = document.getElementById("form_div")
let unorder = document.getElementById("unorder")

let division = document.getElementById("division")
let ul = document.getElementById("unorder_list")

  let li1=document.createElement("li")
  let li2=document.createElement("li")
  let li3=document.createElement("li")
  let li4=document.createElement("li")
  let li5=document.createElement("li")
  let li6=document.createElement("li")
  let li7=document.createElement("li")

  li1.innerText= lsData.fname
  li2.innerText= lsData.lname
  li3.innerText= lsData.address
  li4.innerText= lsData.city
  li5.innerText= lsData.select
  li6.innerText= lsData.zip
  li7.innerText= lsData.states
  
  let fullName = lsData.fname + " " +lsData.lname
  let userAddress = lsData.city +","+lsData.select+","+lsData.zip
  ul.append(fullName,li3,userAddress,li7)

  let unorder_label = document.getElementById("unorder_label")
  let line1=document.createElement("li")
  let line2=document.createElement("li")
  let line3=document.createElement("li")
  let line4=document.createElement("li")
  let line5=document.createElement("li")
  let line6=document.createElement("li")
  let line7=document.createElement("li")

  line1.innerText= lsData.fname
  line2.innerText= lsData.lname
  line3.innerText= lsData.address
  line4.innerText= lsData.city
  line5.innerText= lsData.select
  line6.innerText= lsData.zip
  line7.innerText= lsData.states
  
  let fullNam = lsData.fname + " " +lsData.lname
  let userAddres = lsData.city +","+lsData.select+","+lsData.zip
  unorder_label.append(fullNam,line3,userAddres,line7)
  

localStorage.setItem("checkout",JSON.stringify(lsData))




function showDropdown() {
  var dropdown = document.getElementById("dropdown");
  var otherDropdown = document.getElementById("dropdown1");
  dropdown.style.display = "block";
  otherDropdown.style.display = "none";
  otherDropdown.style.color = red;

}

function showDropdown1() {
  var dropdown = document.getElementById("dropdown1");
  var otherDropdown = document.getElementById("dropdown");
  dropdown.style.display = "block";
  otherDropdown.style.display = "none";
}

function showDropdown2() {
  var dropdown = document.getElementById("dropdown2");
  var otherDropdown = document.getElementById("dropdown1");
  dropdown.style.display = "block";
  otherDropdown.style.display = "none";
}


let payment = document.getElementById("payment_id")

economy()

function economy()
{
  let li1 = document.createElement("li")
  let li2 = document.createElement("li")
  let li3 = document.createElement("li")

  li1.innerText = "Economy Ground"
  li2.innerText = "Delivered In 3 - 7 Business Days."
  li3.innerText = "$5.00"

  payment.append(li1,li2,li3)
}

let storageData = JSON.stringify(localStorage.getItem("productdesc"))
let cartData = JSON.parse(localStorage.getItem("cartData")) || []
let imgDiv1 = document.getElementById("img1_div")

let image1  = document.createElement("img")
image1.className+="image1"


image1.setAttribute("src",`${storageData.img1}`)


imgDiv1.append(image1)


let descriptionDiv = document.getElementById("description")

let title = document.createElement("h4")
let price = document.createElement("h4")
price.className += "priceVal"

let color = document.createElement("p")
let size = document.createElement("p")

title.innerText = `${storageData.desc}`;
color.innerText = "Color: " + `${storageData.color}`;
size.innerText ="Size: " + `${storageData.size}`
price.innerText = `${storageData.price}`


descriptionDiv.append(title,color,size,)
