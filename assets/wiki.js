window.onload = function() {
    const normal = document.querySelector(".character__type__btn");
    const normal__sprite = document.querySelector(".void__sprite");
    const crazed = document.querySelector(".character__type__cbtn");
    const crazed__sprite = document.querySelector(".cvoid__sprite");
    const old = document.querySelector(".character__type__obtn");
    const old__sprite = document.querySelector(".ovoid__sprite");
    normal.classList.add("active");
    normal__sprite.classList.add("active");
    normal.addEventListener("click", function (){
        normal.classList.add("active")
        normal__sprite.classList.add("active");
        crazed.classList.remove("active");
        old.classList.remove("active");
        crazed__sprite.classList.remove("active");
        old__sprite.classList.remove("active");
    });
    crazed.addEventListener("click", function (){
        crazed.classList.add("active")
        crazed__sprite.classList.add("active");
        normal.classList.remove("active");
        old.classList.remove("active");
        normal__sprite.classList.remove("active");
        old__sprite.classList.remove("active");
    });
    old.addEventListener("click", function (){
        old.classList.add("active")
        old__sprite.classList.add("active");
        normal.classList.remove("active");
        crazed.classList.remove("active");
        normal__sprite.classList.remove("active");
        crazed__sprite.classList.remove("active");
    });
}