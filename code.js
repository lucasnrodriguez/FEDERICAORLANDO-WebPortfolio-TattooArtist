
//GALERÍA
const enlaces = document.querySelectorAll(".gallery-list .item")
const darkBox = document.querySelector(".darkbox")
const bigImg = document.querySelector(".big-img")
const cerrar = document.querySelector(".close-button")

enlaces.forEach((cadaEnlace, i) => {
    enlaces[i].addEventListener("click", (e) => {
        e.preventDefault()
        let ruta = cadaEnlace.querySelector(".item-img").src
        console.log(ruta)

        darkBox.classList.add("activo")
        bigImg.setAttribute("src", ruta)

    })
})

//cerrar ventana haciendo click en cualquier parte
darkBox.addEventListener("click", () => {
    darkBox.classList.remove("activo")

})

//cerrar ventana con ESC
document.addEventListener("keyup", function (event) {
    var codigo = event.keyCode || event.which;
    if (codigo == 27) {
        darkBox.classList.remove("activo")
    }
}, false);

//Barra de navegación con scroll
document.addEventListener("scroll", function () {
    var header = document.querySelector(".header")
    header.classList.toggle("activo", window.scrollY > 900)
})


// CAROUSEL
new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: ".carousel__indicadores",
    arrows: {
        prev: ".carousel__anterior",
        next: ".carousel__siguiente"
    },
    responsive: [
        {
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            // screens greater than >= 1028px
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }
    ]
});



