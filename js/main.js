const Collaps = document.querySelector(".Collaps");
const sidebar = document.querySelector(".sidebar");
Collaps.addEventListener("click", () => {
    console.log("clicked");
    sidebar.classList.toggle("-translate-x-full");
})
