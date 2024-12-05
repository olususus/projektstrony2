document.addEventListener("DOMContentLoaded", () => {
  const totalOrders = document.getElementById("total-orders");
  const currentOrderNumber = document.getElementById("current-order-number");
  const orderDetails = document.getElementById("order-details");

  // Symulacja danych zamówień
  const orders = [
    { id: 1, items: ["Drwal", "Fries"], status: "Completed" },
    { id: 2, items: ["Pizza", "Soda"], status: "In Progress" },
  ];

  totalOrders.innerText = orders.length;
  currentOrderNumber.innerText = orders[orders.length - 1].id;

  if (orders[orders.length - 1].status !== "Completed") {
    orderDetails.innerHTML = `
      <p><strong>Order #${orders[orders.length - 1].id}</strong></p>
      <p>Items: ${orders[orders.length - 1].items.join(", ")}</p>
      <p>Status: ${orders[orders.length - 1].status}</p>
    `;
  } else {
    orderDetails.innerHTML = `<p>No active orders.</p>`;
  }
});
