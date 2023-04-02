let container=document.getElementById("container")
// Filter && Sort Section JS Start

let observer = new ResizeObserver(onresize)
    observer.observe(document.querySelector(".containerFS #container"))

    const breakpoints = [
        [2080, 6],
        [1500, 5],
        [1200, 4],
        [900, 3],
        [700, 2],
        [450, 1]
    ]

    function onresize([{contentRect, target}]){
        let {width} = contentRect

        let cols = 0
        for(let [point, col] of breakpoints){
            if(width <= point) cols = col
            else break
        }
        if(target.style.getPropertyValue("--cols") == cols) return
        target.style.setProperty("--cols", cols)
    }

// filter product data by size start

let smallSize=document.getElementById("filterS")
let mediumSize=document.getElementById("filterM")
let largeSize=document.getElementById("filterL")
let extralargeSize=document.getElementById("filterXL")

smallSize.addEventListener("click",filterFunctionS)
mediumSize.addEventListener("click",filterFunctionM)
largeSize.addEventListener("click",filterFunctionL)
extralargeSize.addEventListener("click",filterFunctionXL)

function filterFunctionS(){
    fetch('http://127.0.0.1:3000/api/women')
    .then(response => response.json())
    .then((data)=>{
        data=data.filter((item)=>{
            return item.size==="S"
        })
        console.log(data.length)
        display(data)
    })
    .catch(error => console.error(error));
}
function filterFunctionM(){
    fetch('http://127.0.0.1:3000/api/women')
    .then(response => response.json())
    .then((data)=>{
        data=data.filter((item)=>{
            return item.size==="M"
        })
        console.log(data.length)
        display(data)
    })
    .catch(error => console.error(error));
}
function filterFunctionL(){
    fetch('http://127.0.0.1:3000/api/women')
    .then(response => response.json())
    .then((data)=>{
        data=data.filter((item)=>{
            return item.size==="L"
        })
        console.log(data.length)
        display(data)
    })
    .catch(error => console.error(error));
}
function filterFunctionXL(){
    fetch('http://127.0.0.1:3000/api/women')
    .then(response => response.json())
    .then((data)=>{
        data=data.filter((item)=>{
            return item.size==="XL"
        })
        console.log(data.length)
        display(data)
    })
    .catch(error => console.error(error));
}
//filter product data by size Ends

//filter product data by color Start

let colorBlack=document.getElementById("colorBlack")
let colorGreen=document.getElementById("colorGreen")
let colorBlue=document.getElementById("colorBlue")
let colorViolet=document.getElementById("colorViolet")
let colorGolden=document.getElementById("colorGolden")
let colorRed=document.getElementById("colorRed")

colorBlack.addEventListener("click",filterFunctionBlack)
colorGreen.addEventListener("click",filterFunctionGreen)
colorBlue.addEventListener("click",filterFunctionBlue)
colorViolet.addEventListener("click",filterFunctionViolet)
colorGolden.addEventListener("click",filterFunctionGolden)
colorRed.addEventListener("click",filterFunctionRed)

function filterFunctionBlack(){
    fetch('http://127.0.0.1:3000/api/women')
    .then(response => response.json())
    .then((data)=>{
        data=data.filter((item)=>{
            return item.color==="black"
        })
        console.log(data.length)
        display(data)
    })
    .catch(error => console.error(error));
}
function filterFunctionGreen(){
    fetch('http://127.0.0.1:3000/api/women')
    .then(response => response.json())
    .then((data)=>{
        data=data.filter((item)=>{
            return item.color==="green"
        })
        console.log(data.length)
        display(data)
    })
    .catch(error => console.error(error));
}
function filterFunctionBlue(){
    fetch('http://127.0.0.1:3000/api/women')
    .then(response => response.json())
    .then((data)=>{
        data=data.filter((item)=>{
            return item.color==="blue"
        })
        console.log(data.length)
        display(data)
    })
    .catch(error => console.error(error));
}
function filterFunctionViolet(){
    fetch('http://127.0.0.1:3000/api/women')
    .then(response => response.json())
    .then((data)=>{
        data=data.filter((item)=>{
            return item.color==="voilet"
        })
        console.log(data.length)
        display(data)
    })
    .catch(error => console.error(error));
}
function filterFunctionGolden(){
    fetch('http://127.0.0.1:3000/api/women')
    .then(response => response.json())
    .then((data)=>{
        data=data.filter((item)=>{
            return item.color==="golden"
        })
        console.log(data.length)
        display(data)
    })
    .catch(error => console.error(error));
}
function filterFunctionRed(){
    fetch('http://127.0.0.1:3000/api/women')
    .then(response => response.json())
    .then((data)=>{
        data=data.filter((item)=>{
            return item.color==="red"
        })
        console.log(data.length)
        display(data)
    })
    .catch(error => console.error(error));
}
//filter product data by color End

//sort product data Start
let sortNew=document.getElementById("sortNew")
let sortPriceLow=document.getElementById("sortPriceLow")
let sortPriceHigh=document.getElementById("sortPriceHigh")

sortNew.addEventListener("click",sortNewP)
sortPriceLow.addEventListener("click",sortPriceLowP)
sortPriceHigh.addEventListener("click",sortPriceHighP)

function sortNewP(){
    fetch('http://127.0.0.1:3000/api/women')
    .then(response => response.json())
    .then((data)=>{
        data=data.filter((item)=>{
            return item.category==="New!"
        })
        console.log(data.length)
        display(data)
    })
    .catch(error => console.error(error));
}
function sortPriceLowP(){
    fetch('http://127.0.0.1:3000/api/women')
    .then(response => response.json())
    .then((data)=>{
        data=data.sort((a,b)=>b.price-a.price)
        console.log(data.length)
        display(data)
    })
    .catch(error => console.error(error));
}
function sortPriceHighP(){
    fetch('http://127.0.0.1:3000/api/women')
    .then(response => response.json())
    .then((data)=>{
        data=data.sort((a,b)=>a.price-b.price)
        console.log(data.length)
        display(data)
    })
    .catch(error => console.error(error));
}


//sort product data End

// Filter && Sort Section JS End

// Product Section JS Start
let cartData=JSON.parse(localStorage.getItem("cartData"))||[]
let cartDataSS=JSON.parse(localStorage.getItem("cartDataSS"))||[]

async function getData(){
    fetch('http://127.0.0.1:3000/api/women')
    // http://127.0.0.1:3000/api/women
    .then(response => response.json())
    .then(data => display(data))
    .catch(error => console.error(error));
}
getData()

function display(data){
    container.innerHTML=""
    data.forEach((item)=>{
        let card=document.createElement("div")
        card.classList.add("card")
        let bigImg=document.createElement("img")
        bigImg.classList.add("big-img")
        bigImg.setAttribute("src",`${item.img1}`)
        let categ=document.createElement("div")
        categ.classList.add("category-section")
        let categP=document.createElement("p")
        categP.textContent=`${item.category}`
        let categA=document.createElement("a")
        categA.setAttribute("href","#")
        let categAimg=document.createElement("img")
        categAimg.setAttribute("src","./images/categAimg.png")

        categAimg.addEventListener("click",()=>{
            cartData.push(item)
            localStorage.setItem("cartData",JSON.stringify(cartData))
            cartDataSS.push(item)
            sessionStorage.setItem("cartDataSS",JSON.stringify(cartDataSS))
            // console.log(cartData)
        })

        let descA=document.createElement("a")
        descA.setAttribute("href","#")
        let descAP=document.createElement("p")
        descAP.textContent=`${item.desc}`

        descAP.addEventListener("click",()=>{
            localStorage.setItem("productdesc",JSON.stringify(item))
            window.location.href = 'description.html';
            //add code to send to prod-desc page
        })

        let priceS=document.createElement("div")
        priceS.classList.add("price-section")
        let priceSp1=document.createElement("p")
        priceSp1.textContent=`Price: $ ${item.price}`
        priceSp1.style.marginRight="10px"
        let priceSp2=document.createElement("p")
        priceSp2.textContent=`Comp Price:$ ${(item.price*1.3).toFixed(2)}`
        let color=document.createElement("p")
        color.textContent=`${item.color}`
        

        priceS.append(priceSp1,priceSp2)
        descA.append(descAP)
        categA.append(categAimg)
        categ.append(categP,categA)
        card.append(bigImg,categ,descA,priceS,color)
        container.append(card)
    })
}
// Product Section JS End

// Search funtionality Start

// Select the search input element and product list container
const searchInput = document.querySelector("#searchforData");
const productList = document.querySelector("#container");

// Add event listener for the search input
searchInput.addEventListener("input", () => {
    // Get the search query from the input value
    const searchQuery = searchInput.value.toLowerCase();

    // Call the API endpoints for each category and search for matching products
    const apiEndpoints = [
        "https://mock-api-template-zsq1.onrender.com/women",
        "https://mock-api-template-zsq1.onrender.com/men",
        "https://mock-api-template-zsq1.onrender.com/jeans",
        "https://mock-api-template-zsq1.onrender.com/collection"
    ];

    // Use Promise.all() to fetch data from all API endpoints simultaneously
    Promise.all(apiEndpoints.map(endpoint => fetch(endpoint)))
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(data => {
            // Flatten the array of products into a single array
            const products = data.flat();

            // Filter the products based on the search query
            const filteredProducts = products.filter(product => {
                const desc = product.desc.toLowerCase();
                const category = product.category.toLowerCase();
                return desc.includes(searchQuery) || category.includes(searchQuery);
            });

            // Render the filtered products in the product list container

            display(filteredProducts)
            // productList.innerHTML = "";
            // filteredProducts.forEach(product => {
            //     const productElement = document.createElement("div");
            //     productElement.innerHTML = `
            //         <h2>${product.name}</h2>
            //         <p>${product.desc}</p>
            //         <img src="${product.image}">
            //     `;
            //     productList.appendChild(productElement);
            // });
        })
        .catch(error => console.log(error));
});


// Search funtionality End


