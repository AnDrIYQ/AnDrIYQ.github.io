// Preloader
window.addEventListener('load', () => {
    document.querySelector('#preloader').style.transition = "opacity .5s";
    document.querySelector('#preloader').style.pointerEvents = "none";
    document.querySelector('#preloader').style.opacity = 0;
});


// Phone validation


// Scrolls  
function scrollINIT(toTOP_ID) {
    document.querySelector(toTOP_ID)
        .addEventListener('click', () => document.body.scrollIntoView({block: "start", behavior: "smooth"}))
    Array.from(document.querySelectorAll(`a`)).map((link) => {
        link.addEventListener('click', (event) => {
            if (event.target.href && event.target.href.includes('#')) {
                event.preventDefault();
                let id = event.target.href.split('#')[1];
                if (id) {
                    document.querySelector('#' + id).scrollIntoView({block: "center", behavior: "smooth"})
                }
            }
        })
    })
}
scrollINIT('#to-top');