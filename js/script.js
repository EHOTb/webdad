let orderArrow = document.querySelector(".order__options-arrow");
let order__options = document.querySelector("order__options-contents");

orderArrow.addEventListener("click", func);

function func() {
    order__options.style.display = "none";
}