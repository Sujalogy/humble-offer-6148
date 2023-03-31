const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

//show sidebar
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
});

//close sidebar
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
});

// Orders.forEach((order) => {
//     const tr = document.createElement("tr");
//     const tbody = document.querySelector("table tbody");

//     const trContent = `
//                             <td>${order.id}</td>
//                             <td>${order.desc}</td>
//                             <td class="success">Success</td>
//                             <td class="danger">Pending</td>
//                         `;

//     tr.innerHTML = trContent;
//     tbody.append(tr);
// })