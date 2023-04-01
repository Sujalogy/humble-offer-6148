let sum=0;
for(let i=0;i<cartData.length;i++){
    sum+=cartData[i].price
 
}

document.getElementById("cart-total").textContent=sum;



