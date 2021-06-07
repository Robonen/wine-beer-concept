const d = document;

const body = d.querySelector('body');
const btn = d.querySelector('button.hamburger_btn');
const menu = d.querySelector('header > .mobile_menu');


btn.addEventListener('click', e => {
    const isOpen = btn.classList.contains('opened');

    if (!isOpen) {
        btn.classList.add('opened');
        body.style.overflow = 'hidden';
        menu.style.visibility = 'visible';
        menu.classList.add('mobile_menu_opened');
    } else {
        menu.classList.remove('mobile_menu_opened');
        body.style.overflow = 'visible';
        btn.classList.remove('opened');
        setTimeout(() => {
            menu.style.visibility = 'hidden';
        }, 1000);
    }

    btn.setAttribute('aria-expanded', isOpen);
});
