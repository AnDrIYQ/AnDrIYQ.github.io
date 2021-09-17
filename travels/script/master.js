// Preloader
window.addEventListener('load', () => {
    document.querySelector('#preloader').style.transition = "opacity .5s";
    document.querySelector('#preloader').style.pointerEvents = "none";
    document.querySelector('#preloader').style.opacity = 0;
});

function preloaderInit() {
    let value = document.getElementById('loading-value');
    let percents = 0;
    let promises = [];

    let imagesLoaded = 0;

    let imagesCount = document.querySelectorAll('img')?.length;

    // Set percents for images
    document.querySelectorAll('img').forEach(image => {
        promises.push(new Promise((resolve, reject) => {
            let proxyImage = new Image();
        
            proxyImage.addEventListener("load", function () {
              resolve();
            });
        
            proxyImage.src = image.src;
        }));
        Promise.all(promises).then(() => {
            imagesLoaded += 1;
            percents = parseInt((imagesLoaded / imagesCount) * 100);
            value.textContent = percents + "%";
        })
    })
}

preloaderInit();

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

    // Notifications function
function Notify(text) {
    document.querySelector('#not-text').textContent = text;
    document.querySelector('#notification').style.pointerEvents = "all";
    document.querySelector('#notification').style.opacity = 1;
    setTimeout(() => {
        document.querySelector('#notification').style.pointerEvents = "none";
        document.querySelector('#notification').style.opacity = 0;
    }, 2500);
}

    // Handler Submit form
document.querySelector('form').addEventListener('submit', (event) => {
    // Stop default form behaviour
    event.preventDefault();

    // Disable submit button
    document.querySelector('form button').disabled = true;

    // Take input data
    let phone = event.target.phone.value;

    // Request to server
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
        // Notify about result
        const body = await response.json();
        if (body.message === 'success') {
            // Success result
            Notify("Успішно відправлено! Ми з вами зв'яжемось");
        } else {
            // Error result
            Notify("Упс! щось пішло не так, спробуйте ще раз");
        }
        // Make input empty
        event.target.phone.value = "";
        // Enable button
        document.querySelector('form button').disabled = false;
    })
})