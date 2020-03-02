const navbarBurgerWrapper = document.getElementsByClassName('navbar-burger-wrapper')[0];
const dropdownMenu = document.getElementsByClassName('dropdown-menu')[0];
const navbarBurgerLineFirst = document.getElementsByClassName('navbar-burger-line-first')[0];
const navbarBurgerLineSecond = document.getElementsByClassName('navbar-burger-line-second')[0];
const navbarBurgerLineThird = document.getElementsByClassName('navbar-burger-line-third')[0];

navbarBurgerWrapper.addEventListener('click', ()=> {
    dropdownMenu.style.display = 'block';
    navbarBurgerLineSecond.style.display = 'none';

    navbarBurgerLineFirst.style.transform = 'translateY(5px) rotate(45deg)';
    navbarBurgerLineFirst.style.transition = '0.5s';

    navbarBurgerLineThird.style.transform = 'translateY(-2px) rotate(-45deg)';
    navbarBurgerLineThird.style.transition = '0.5s';
});

const dropdownMenuLink = document.getElementsByClassName('dropdown-menu-link');
for (let i=0; i<dropdownMenuLink.length; i++) {
    dropdownMenuLink[i].addEventListener('click', ()=> {
        dropdownMenu.style.display = 'none';
        navbarBurgerLineSecond.style.display = 'block';
        navbarBurgerLineFirst.style.transform = 'translateY(0) rotate(0)';
        navbarBurgerLineThird.style.transform = 'translateY(0) rotate(0)';
    })
}