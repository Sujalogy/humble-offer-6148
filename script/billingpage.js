let formData = document.getElementById("form")
// formData.addEventListener("submit",userData)
let lsData = JSON.parse(localStorage.getItem("checkout")) || []

// function userData(ele)
// { 
//     ele.preventDefault()
//     let fname = document.getElementById("f_name").value
//     let lname = document.getElementById("l_name").value
//     let address = document.getElementById("address").value
//     let states = document.getElementById("states").value
//     let zip = document.getElementById("zip").value
//     let city = document.getElementById("city").value
//     let assign_items = {fname,lname,address,states,zip,city}
//     lsData.push(assign_items)
   
// }

let division = document.getElementById("division")
let ul = document.getElementById("unorder_list")
for(let i=0;i<lsData.length;i++)
{
  let li1=document.createElement("li")
  let li2=document.createElement("li")
  let li3=document.createElement("li")
  let li4=document.createElement("li")
  let li5=document.createElement("li")
  let li6=document.createElement("li")
  let li7=document.createElement("li")

  li1.innerText= lsData[i].fname
  li2.innerText= lsData[i].lname
  li3.innerText= lsData[i].address
  li4.innerText= lsData[i].city
  li5.innerText= lsData[i].select
  li6.innerText= lsData[i].zip
  li7.innerText= lsData[i].states
  
  ul.append(li1,li2,li3,li4,li5,li6,li7)
  division.append(ul)


}
localStorage.setItem("checkout",JSON.stringify(lsData))