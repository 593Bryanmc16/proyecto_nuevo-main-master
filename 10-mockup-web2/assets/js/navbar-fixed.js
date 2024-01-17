document.addEventListener("DOMContentLoaded", (event)=>{
    //Navbar-menu
    let navbar_menu= document.querySelector(".menu__navbar");

    window.addEventListener("scroll", ()=>{
        let scroll =  parseInt(window.scrollY);

        if(scroll > 120){
            navbar_menu.classList.add("menu__navbar--fixed");
        }else{
            navbar_menu.classList.remove("menu__navbar--fixed");
        }
    })
})