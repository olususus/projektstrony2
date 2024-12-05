document.addEventListener("DOMContentLoaded", function () {
  fetch("items/food.json")
    .then((response) => response.json())
    .then((data) => {
      const menuContainer = document.getElementById("menu");

      data.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("food-item");

        itemElement.innerHTML = `
          <img src="images/${item.image}" alt="${item.name}">
          <div class="food-info">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Weight:</strong> ${item.weight}</p>
          </div>
        `;

        menuContainer.appendChild(itemElement);
      });
    })
    .catch((error) => console.error("Error loading food items:", error));
});

document.addEventListener("DOMContentLoaded", function () {
  const breadcrumbText = document.querySelector(".breadcrumb-text");

  const path = window.location.pathname.split("/");
  const page = path[path.length - 1];

  let breadcrumbContent = "";

  if (page === "index.html") {
    breadcrumbContent = "Dashboard > Main";
  } else if (page === "pages/food.html") {
    breadcrumbContent = "Food > Menu";
  } else if (page === "pages/bills.html") {
    breadcrumbContent = "Bills > Payment";
  }

  breadcrumbText.textContent = breadcrumbContent;
});
