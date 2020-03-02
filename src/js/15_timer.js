let timer = setInterval(function () {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let countDown = new Date('June 01, 2020 00:00:00').getTime();

    let now = new Date().getTime();
    let distance = countDown - now;

    document.getElementById('days').innerText = Math.floor(distance / (day));
    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);


    if (distance < 0) {
     clearInterval(timer);
        const promoWrapper = document.getElementsByClassName('promo-wrapper')[0];
        document.body.removeChild(promoWrapper);
    }
}, 1000);