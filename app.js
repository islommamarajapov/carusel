const slider = document.querySelector('.slider');

function activate(event) {
    const item = document.querySelectorAll(".item");
    event.target.matches(".next") && slider.append(item[0]);
    event.target.matches(".prev") && slider.prepend(item[item.length - 1]);
}

document.addEventListener("click", activate, false);