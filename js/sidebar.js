document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar nav ul li a");
  const currentPath = window.location.pathname;

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (currentPath.endsWith(href) && href !== "#") {
      link.classList.add("active");
    }
  });
});

const hamburgerBtn = document.getElementById("hamburger-btn");
const sidebar = document.querySelector(".sidebar");

hamburgerBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
