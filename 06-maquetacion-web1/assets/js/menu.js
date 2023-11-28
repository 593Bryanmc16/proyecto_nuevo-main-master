document.addEventListener("DOMContentLoaded",(event)=>{

    let button= document.querySelector('.layout__menu-toggle');
    let burgerIcon= document.querySelector('.layout__menu-toggle > :first-child');
    let xIcon= document.querySelector('.layout__menu-toggle > :last-child');
    let aside= document.querySelector('.layout__aside');

    button.addEventListener('click',(event)=>{
        let visible= document.querySelector('.layout__aside--visible');
        // let hidden= document.querySelector('.layout__aside--hidden')

        if(!visible){
            aside.classList.add('layout__aside--visible');
            burgerIcon.style.opacity = 0;
            xIcon.style.opacity = 1;
        }
        else if(visible){
            aside.classList.remove('layout__aside--visible');
            burgerIcon.style.opacity = 1;
            xIcon.style.opacity = 0;
        }
    })
    window.addEventListener('resize', ()=>{
        let size= parseInt(document.body.clientWidth);
        if(size <= 1060){
            aside.classList.remove('layout__aside--visible');
            burgerIcon.style.opacity = 1;
            xIcon.style.opacity = 0;
        }
    });
});
