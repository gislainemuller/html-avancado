function apresentarSubmenu(event){
    let botaoDoclick = event.target;
    let idSubmenu =  botaoDoclick.getAttribute("data-submenu");
    let ul = document.getElementById(idSubmenu);
    ul.classList.toggle("hidden-items");
}



const botoesMenu = document.getElementsByClassName("toggle-button");
for (let index = 0; index < botoesMenu.length; index++) {
    const botaoMenu = botoesMenu [index];

    botaoMenu.addEventListener("click", apresentarSubmenu)


}
