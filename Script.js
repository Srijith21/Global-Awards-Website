const MenuButton = document.getElementById("MenuButton");
const Sidebar = document.getElementById("Sidebar");

MenuButton.addEventListener('click', ()=>{
    Sidebar.classList.toggle("active")
})