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

//==========================================timer===================================================//

function timer() {
    let displayHours = document.querySelector(".timer__hours");
    let displayMinutes = document.querySelector(".timer__minutes");
    let displaySeconds = document.querySelector(".timer__seconds");
    // let countDownDate = new Date(
    //     Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000
    // );

    let countDownDate = new Date(Date.parse(new Date()) + 5 * 60 * 60 * 1000);

    let x = setInterval(function() {
        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (seconds <= 9) {
            seconds = "0" + seconds;
        }

        if (minutes <= 9) {
            minutes = "0" + minutes;
        }

        if (hours <= 9) {
            hours = "0" + hours;
        }

        displayHours.innerHTML = hours;
        displayMinutes.innerHTML = minutes;
        displaySeconds.innerHTML = seconds;

        if (distance < 0) {
            alert("Your soul is mine!");
        }
    }, 1000);
}
timer();

//======================================Validate form=====================================//

function validateForm() {
    let form = document.querySelector(".order");
    let button = form.querySelector(".order__button");
    let name = form.querySelector(".order__name");
    let tel = form.querySelector(".order__tel");
    let region = form.querySelector(".order__region-content");
    let city = form.querySelector(".order__city-content");
    let fields = form.querySelectorAll(".field");
    let confirm = form.querySelector(".confirm");

    button.classList.add("button__gray");

    button.addEventListener("click", function() {
        let errors = form.querySelectorAll(".error");
        for (let elem of errors) {
            elem.classList.remove("order__red");
        }
        for (let el of fields) {
            if (!el.value) {
                let div = document.createElement("div");
                div.className = "error";
                div.classList.add("order__red");
                el.parentNode.insertBefore(div, el);
                div.appendChild(el);
            } else {
                if (confirm.checked) {
                    button.classList.remove("button__gray");
                }
            }
        }
        // let red = form.getElementsByClassName("order__red");
        // if (red.length <= 0)
    });
}
validateForm();

//=======================================================city add================================//

function cityAdd() {
    let city = document.querySelector("#order__city");
    let inp = document.createElement("input");
    let orderOption = document.querySelector("#order__city-content");

    inp.className = "newCity";
    inp.type = "text";
    inp.style.padding = "2.2rem 0 1rem 0.3rem";

    inp.style.borderBottom = "0.06rem solid var(--main)";
    inp.style.width = "18.8rem";
    inp.placeholder = "Добавить город";
    city.addEventListener("click", function func() {
        city.appendChild(inp);

        city.removeEventListener("click", func);
    });
    inp.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            let newOption = new Option(inp.value, inp.value);
            orderOption.append(newOption);
            inp.blur();
            orderOption.focus();
        }
    });
}
cityAdd();