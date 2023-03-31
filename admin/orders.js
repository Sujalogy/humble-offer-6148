const Orders = JSON.parse(localStorage.getItem("cart-data")) || [];

Orders.forEach((order) => {
    const tr = document.createElement("tr");
    const tbody = document.querySelector("table tbody");

    const trContent = `
                            <td>${order.id}</td>
                            <td>${order.desc}</td>
                            <td class="success">Success</td>
                            <td class="danger">Pending</td>
                        `;

    tr.innerHTML = trContent;
    tbody.append(tr);
})