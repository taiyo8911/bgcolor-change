function display(x) {
    let btn = document.querySelector(`#btn${x}`);
    let box = document.querySelector('#box');

    let btnToggleclass = function (el) {
        el.classList.toggle('main');
    }
    btnToggleclass(box);
    box.textContent = btn.innerText;
}