let formData = document.getElementById("form")
formData.addEventListener("submit",userData)
let lsData = JSON.parse(localStorage.getItem("checkout")) || []

function userData(ele)
{ 
    ele.preventDefault()
    let fname = document.getElementById("f_name").value
    let lname = document.getElementById("l_name").value
    let address = document.getElementById("address").value
    let states = document.getElementById("states").value
    let zip = document.getElementById("zip").value
    let city = document.getElementById("city").value
    let assign_items = {fname,lname,address,states,zip,city}
    lsData.push(assign_items)
    localStorage.setItem("checkout",JSON.stringify(lsData))
    location.href="./billingpage.html"
}
