// ==================================================order-hidden=============//
function orderHidden() {
    let orderArrow = document.querySelector(".order__options-arrow");
    let orderOptions = document.querySelector(".order__options-contents");

    orderArrow.addEventListener("click", orderArrowFunc);

    function orderArrowFunc() {
        orderOptions.classList.toggle("hidden");
        orderArrow.classList.toggle("rotate");
    }
}
orderHidden();

// ==================================fleet slider=======================/

function fleetSlider() {
    let fleet = document.querySelector(".fleet__cars li:first-child");

    let fleet2 = document.querySelector(".fleet__cars li:nth-child(2)");

    let fleet3 = document.querySelector(".fleet__cars li:nth-child(3)");

    // let fleetContent =

    let fleetImage = document.querySelector(".fleet__content-img img");

    fleet.addEventListener("click", function func() {
        console.log("hello");
        fleetImage.src = "./img/img/fleet-truck.jpg";
    });

    fleet2.addEventListener("click", function func() {
        console.log("hello");
        fleetImage.src = "./img/img/fleet-truck2.jpg";
    });

    fleet3.addEventListener("click", function func() {
        console.log("hello2");
        fleetImage.src = "./img/img/fleet-truck3.jpg";
    });
}
fleetSlider();
//=======================================reviews hidden==================================//
function reviewsHidden() {
    let reviewsContentText = document.querySelectorAll(".reviews__content-text");

    let reviewsContentAll = document.querySelectorAll(
        ".reviews__content-all span"
    );

    let startArr = [];

    for (let el of reviewsContentText) {
        //получим массив стартовых значений текста//
        startArr.push(el.innerHTML);
    }

    let review1 =
        "Ирина сказала что все ок!acere, itaque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, itaque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, itaque";

    let review2 =
        "Светлана сказала что Можете лучше!acere, itaque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, itaque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, itaque.Светлана сказала что Можете лучше!acere, itaque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, itaque?";

    let review3 =
        "Ольга в восторге!!!acere, itaque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, itaque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, itaque";

    let arr = [];

    arr.push(review1, review2, review3); //получим массив полных отзывов//

    for (let i = 0; i < reviewsContentAll.length; i++) {
        reviewsContentAll[i].addEventListener("click", reviews);

        function reviews() {
            this.classList.toggle("reviews__active");
            if (this.classList.contains("reviews__active")) {
                // добавим класс для  кнопки свертывания /развертываниия //
                reviewsContentText[i].innerHTML =
                    reviewsContentText[i].innerHTML.slice(0, -3) + " " + arr[i];
                this.innerHTML = "Свернуть";
            } else {
                this.innerHTML = "Читать полностью";
                reviewsContentText[i].innerHTML = startArr[i];
            }
            this.classList.toggle("reviews__showAll");
            if (this.classList.contains("reviews__showAll")) {} else {}
        }
    }
}
reviewsHidden();

// =======================================================hamburger-menu=======================//

function hamburger() {
    let button = document.querySelector(".menu__button");

    let body = document.querySelector("body");

    let menu = document.querySelector(".menu");

    let menuPoint = document.querySelector(".menu ");

    let menuBody = document.querySelector(".menu__body");

    button.addEventListener("click", function burger() {
        document.querySelector(".menu__button span").classList.toggle("active");
        menu.classList.toggle("active");
        body.classList.toggle("overflow-hidden");
        menuBody.classList.toggle("b-active");
    });
    menuPoint.addEventListener("click", function func() {
        document.querySelector(".menu__button span").classList.toggle("active");
        menu.classList.toggle("active");
        body.classList.toggle("overflow-hidden");
        menuBody.classList.toggle("b-active");
    });
    menuBody.addEventListener("click", function func() {
        document.querySelector(".menu__button span").classList.toggle("active");
        menu.classList.toggle("active");
        body.classList.toggle("overflow-hidden");
        menuBody.classList.toggle("b-active");
    });

    document.addEventListener("keydown", function(e) {
        if (e.keyCode == 27) {
            document.querySelector(".menu__button span").classList.toggle("active");
            menu.classList.toggle("active");
            body.classList.toggle("overflow-hidden");
            menuBody.classList.toggle("b-active");
        }
    });
}

hamburger();