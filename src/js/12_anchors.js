try {
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let item of anchors) {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            const sectionId = item.getAttribute('href').substr(1);

            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
} catch (error) {
}


const submenuLink = document.getElementsByClassName('submenu-link');

submenuLink[0].addEventListener('click', ()=> {
    radioVillas[1].checked = true;
    check();
});
submenuLink[3].addEventListener('click', ()=> {
    radioVillas[1].checked = true;
    check();
});

submenuLink[1].addEventListener('click', ()=> {
    radioVillas[2].checked = true;
    check();
});
submenuLink[4].addEventListener('click', ()=> {
    radioVillas[2].checked = true;
    check();
});

submenuLink[2].addEventListener('click', ()=> {
    radioVillas[3].checked = true;
    check();
});
submenuLink[5].addEventListener('click', ()=> {
    radioVillas[3].checked = true;
    check();
});