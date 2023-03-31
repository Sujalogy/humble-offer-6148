let orderN=document.querySelector(".order-no")
orderN.innerHTML="Your order no is" + " "+Math.floor(Math.random() * 10000001)+"."; 
let img=document.querySelector(".img")
img.addEventListener("click",()=>{
    window.location.assign("http://127.0.0.1:5500/rotten-snakes-6255/homepage/index.html")
})