let formData = document.getElementById("form")
formData.addEventListener("submit",userData)
let lsData = JSON.parse(localStorage.getItem("checkout"))

function userData(ele)
{ 
    ele.preventDefault()
    let fname = document.getElementById("f_name").value
    let lname = document.getElementById("l_name").value
    let address = document.getElementById("address").value
    let states = document.getElementById("states").value
    let select = document.getElementById("select").value
    let zip = document.getElementById("zip").value
    let city = document.getElementById("city").value
    let assign_items = {fname,lname,address,states,select,zip,city}
    // lsData.push(assign_items)
    localStorage.setItem("checkout",JSON.stringify(assign_items))
    location.href="./billingpage.html"

}



const economyEl = document.getElementById('economy');
const standardEl = document.getElementById('standard');
const businessEl = document.getElementById('business');
const overnightEl = document.getElementById('overnight');

const handleShippingMethod = () => {
  if (economyEl.checked) {
    localStorage.setItem('shippingMethod', 'Economy Ground: $5.00');
  } else if (standardEl.checked) {
    localStorage.setItem('shippingMethod', 'Standard Ground: $8.00');
  } else if (businessEl.checked) {
    localStorage.setItem('shippingMethod', '2 Business Days: $13.00');
  } else if (overnightEl.checked) {
    localStorage.setItem('shippingMethod', 'Overnight: $25.00');
  }
};

economyEl.addEventListener('click', handleShippingMethod);
standardEl.addEventListener('click', handleShippingMethod);
businessEl.addEventListener('click', handleShippingMethod);
overnightEl.addEventListener('click', handleShippingMethod);


// totalPrice()
 
// function totalPrice() {
//   let total = 0;
//   let storageData = JSON.parse(localStorage.getItem("cartData"));

//   for (let i = 0; i < storageData.length; i++) {
//     total += Number(storageData[i].price);
//   }
//   let subtotalCp= document.getElementById("subtotal");
//   subtotalCp.innerText = `$ ${total}`
 
// }
// estimatedTotal()
 
// function estimatedTotal() {
//   let total = 0;
//   let cartData = JSON.parse(localStorage.getItem("cartData"));

//   for (let i = 0; i < cartData.length; i++) {
//     total += Number(cartData[i].price);
//   }
//   let estimate= document.getElementById("estimated_total");
//   estimate.innerText =`${total+5+2.92}` 
 
// }
let ls=JSON.parse(localStorage.getItem("Estimated-Total")) 
let estimate= document.getElementById("estimated_total");
estimate.innerText=ls
