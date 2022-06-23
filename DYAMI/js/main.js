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
goToTop.addEventListener("click", moveTop);

/***************************************/

const header = document.querySelector("header");
const aList = header.getElementsByTagName("a");

const bgChange = () => {
    // header의 배경색 흰색으로 바꾸기
    if(window.pageYOffset > 0) {
        header.classList.add("header--white");
    } else {
        header.classList.remove("header--white");
    }

    // 스크롤 확인 후 일정부분 지나면 padding 줄이는 클래스 붙이기
    if(window.pageYOffset > 200) {
        for(let i = 0; i < aList.length; i++){
            aList[i].classList.add("a-move");
        }
    } else {
        for(let i = 0; i < aList.length; i++) {
            aList[i].classList.remove("a-move");
        }
    }
}

window.addEventListener("scroll", bgChange)