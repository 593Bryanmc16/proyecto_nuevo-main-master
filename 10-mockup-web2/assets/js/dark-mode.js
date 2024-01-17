document.addEventListener("DOMContentLoaded", ()=>{
    // change Icons when button is clicked
    let switcher = document.querySelector(".switcher__btn");
    let lightBulb = document.querySelector(".switcher__icon-dark");
    let dark = document.querySelector(".switcher__icon-light");


    switcher.addEventListener("click", ()=>{
        let head = document.head;

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./assets/css/dark.css";
        link.id = "theme-dark";

        let theme_dark = document.querySelector("#theme-dark")
        if(theme_dark){
            head.removeChild(theme_dark);
            dark.style.display = "none"
            lightBulb.style.display = "block"
        }else{
            head.appendChild(link)
            dark.style.display = "block"
            lightBulb.style.display = "none"
        }
    })
});