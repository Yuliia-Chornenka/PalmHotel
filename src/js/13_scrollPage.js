window.addEventListener('scroll', function() {
    const scrollNavbar = document.getElementsByClassName('scroll-navbar')[0];
    if(pageYOffset>200) {
        scrollNavbar.style.display = 'flex';
    } else {
        scrollNavbar.style.display = 'none';
    }
});
