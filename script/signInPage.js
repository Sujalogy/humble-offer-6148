let data=JSON.parse(localStorage.getItem("register"))||[]


let form =document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let email= document.getElementById("email").value
    let password= document.getElementById("password").value
    let flag=false
    data.forEach((el)=>{
        if(el.email==email&&el.password===password)
        {
            flag=true
            localStorage.setItem("login",JSON.stringify(el))
        }
    })
    if(flag)
    {
        alert("Login Successfully")
        window.location.href="./index.html"
    }
    else{
        alert("Enter correct Email Id Password")
    }


})

//  direct to register page
let registerPage= document.getElementById("createAccount")
registerPage.addEventListener("click",()=>{
    window.location.href="./register.html"
})