const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//show sidebar
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
});

//close sidebar
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
});

Orders.forEach((order) => {
    const tr = document.createElement("tr");
    const tbody = document.querySelector("table tbody");

    const trContent = `
                            <td>${order.productName}</td>
                            <td>${order.productId}</td>
                            <td>${order.paymentStatus}</td>
                            <td class="${order.shipping === 'Declined' ? 'danger' :
                             order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                            <td class="primary"></td>
                        `;

    tr.innerHTML = trContent;
    tbody.append(tr);
})