const goToTop = document.getElementById("goToTop");

const scrollCheck = () => {
    let pageYOffset = window.pageYOffset;

    if(pageYOffset !== 0) {
        goToTop.classList.add("gototop-show");
    } else {
        goToTop.classList.remove("gototop-show");
    }
}

const moveTop = () => {
    if(window.pageYOffset > 0) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

window.addEventListener("scroll", scrollCheck);
goToTop.addEventListener("click", moveTop)