const burger = document.querySelector("#humburger-menu");
const checkboxMenu = document.querySelector('#menu__toogle');
const ulItem = document.querySelector(".menu__box");
const closeBtn = document.createElement('button');

checkboxMenu.addEventListener('click', function() {
    ulItem.style.display = 'flex';
    closeBtn.classList.add('menu__close');
    closeBtn.addEventListener('click', function() {
        ulItem.style.display = 'none';
        ulItem.removeChild(closeBtn);
    });
    ulItem.appendChild(closeBtn);
});
