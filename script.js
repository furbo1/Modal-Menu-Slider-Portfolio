const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const menuClose = document.getElementById('menu-close');

//Open Menu
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
    toggle.style.display = 'none';
    menuClose.style.display = 'block';

});

//Close Menu
menuClose.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
    toggle.style.display = 'block';
    menuClose.style.display = 'none';

});

//Open Modal
open.addEventListener('click', () => modal.classList.add("show-modal"));

//Close Modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e => {
    e.target == modal ? modal.classList.remove('show-modal') : false;
})