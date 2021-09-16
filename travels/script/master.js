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

// Gallery init
Fancybox.bind("#gallery a", {
    groupAll : true, // Group all items
    on : {
      ready : (fancybox) => {
      }
    }
});

// Email Send

// Validation
document.querySelector('form input').addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[A-Za-zА-Яа-яЁё]/, '');
})

function Notify(text) {
    document.querySelector('#not-text').textContent = text;
    document.querySelector('#notification').style.pointerEvents = "all";
    document.querySelector('#notification').style.opacity = 1;
    setTimeout(() => {
        document.querySelector('#notification').style.pointerEvents = "none";
        document.querySelector('#notification').style.opacity = 0;
    }, 2500);
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('form button').disabled = true;

    let phone = event.target.phone.value;

    fetch('/php/email.php', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            phone
        })
    }).then(async (response) => {
        const body = await response.json();
        if (body.message === 'success') {
            Notify("Успішно відправлено! Ми з вами зв'яжемось");
        } else {
            Notify("Упс! щось пішло не так, спробуйте ще раз");
        }
        event.target.phone.value = "";
        document.querySelector('form button').disabled = false;
    })
})