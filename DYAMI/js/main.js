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

/***************************************/

const header = document.querySelector("header")

const bgChange = () => {
    if(window.pageYOffset > 0) {
        header.classList.add("header--white")
    } else {
        header.classList.remove("header--white")
    }
}

window.addEventListener("scroll", bgChange)