document.addEventListener("DOMContentLoaded", (event)=>{
    let menuBtn = document.querySelector('.navbar__menu-btn');
    let menuListN = document.querySelector('.navbar__list');

    menuBtn.addEventListener('click', ()=>{

        let menuListA = document.querySelector('.navbar__list--active');

        if(menuListA){
            menuListN.classList.remove("navbar__list--active");
        } else{
            menuListN.classList.add("navbar__list--active");
        }
    })

    // navbarfix

    let navbar= document.querySelector(".layout__nav");

    window.addEventListener("scroll", ()=>{
        let scroll = parseInt(window.scrollY)
        let navbarFixed = document.querySelector(".layout__nav--fixed")
        
        if(scroll >= 164){
            navbar.classList.add("layout__nav--fixed");
        }else{
            navbar.classList.remove("layout__nav--fixed");
        }
    })

    window.addEventListener("resize", ()=>{
        let width = parseInt(document.body.clientWidth);

        if(width >=614){
            menuListN.classList.remove("navbar__list--active");
        }
    })

    // navbar submenus dropdown
    let dropdownbtn = document.querySelectorAll(".navbar__dropdown");
    let navbarItem = document.querySelectorAll(".navbar__item");
    let angleUp = document.querySelector(".fa-angle-up");
    let angleDown = document.querySelector(".fa-angle-down");

    dropdownbtn.forEach(btn => {
        
        btn.addEventListener("click", ()=>{
            btn.classList.toggle("fa-angle-down");
            btn.classList.toggle("fa-angle-up");

            const parentNavItem = btn.closest(".navbar__item");
            if(parentNavItem){
                const submenu = parentNavItem.querySelector('.navbar__submenu');
                if(submenu){
                    submenu.classList.toggle("navbar__submenu--active")
                }
            }
       

        })

        // activate tittle buttons 

        let listItems= document.querySelectorAll(".list-header__item")

        listItems.forEach(item =>{

            item.addEventListener("click", ()=>{
               
                let firstTittle = document.querySelector(".list-header__title");

                if(firstTittle){
                    firstTittle.classList.remove(list-header__title)
                }

            })
        })

    });

    
        




})