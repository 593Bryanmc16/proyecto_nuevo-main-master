document.addEventListener("DOMContentLoaded", (event)=>{

    // select two main elements
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu= document.querySelector(".menu-mobile");

    // function to show and hide side menu
    const showHiddenMenu= ()=>{
        let show= document.querySelector(".menu-mobile--show");

        if(show){
            mobile_menu.classList.remove("menu-mobile--show");
        }else{
            mobile_menu.classList.add("menu-mobile--show");
        }
    }
    // button to open and close the side menu
    mobile_btn.addEventListener('click', showHiddenMenu);

    // to close the side menu when the screen size is above 1000px
    window.addEventListener("resize", ()=>{
        let window_width = parseInt(document.body.clientWidth);
        let show= document.querySelector(".menu-mobile--show");
        if(window_width >= 985){
            mobile_menu.classList.remove("menu-mobile--show");
        }
    })

    // button close the side menu (X)close
    let mobile_close= document.querySelector(".menu-mobile__close");
    mobile_close.addEventListener("click", showHiddenMenu );

    // open and close sub-menu
    let menu_item= document.querySelectorAll(".menu-mobile__item");
    
    menu_item.forEach(item =>{

        item.addEventListener("click", (event)=>{
            let submenu = item.lastElementChild;
            console.log(submenu)

            if(submenu.className === "menu-mobile__submenu-mobile"){
                if(submenu.style.display === "flex"){
                    submenu.style.display = "none";
                }else{
                    submenu.style.display = 'flex';
                }
            }
        });
    });
});