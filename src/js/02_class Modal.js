class Modal {
    constructor(id, header) {
        this._id = id;
        this._header = header;
    }

    render() {
        const modal = document.createElement("dialog");
        modal.id = this._id;
        let title = document.createElement("div");
        title.innerHTML = `<h2 class="modal-title">${this._header}</h2><span class="close-btn modal-close" id="modal-close">&#10006;</span>`;
        modal.prepend(title);
        document.body.prepend(modal);
    };
}


/*Modal for Registration*/
const modalRegister = new Modal("modal-window-register", `Register`);
modalRegister.render();

const modalWindowRegister = document.getElementById('modal-window-register');
const registerBtn = document.getElementById('register-btn');

registerBtn.addEventListener('click', () => {
    dialogPolyfill.registerDialog(modalWindowRegister);
    modalWindowRegister.showModal();
    const errorRegistration = document.getElementById('error-registration');
    const shortPassword = document.getElementById('short-password-error');
    const emailExist = document.getElementById('email-exist-error');
    if (errorRegistration) {
        errorRegistration.style.visibility = 'hidden';
    }
    if (shortPassword) {
        shortPassword.style.visibility = 'hidden';
    }
    if (emailExist) {
        emailExist.style.visibility = 'hidden';
    }
});


/*Modal for Login*/
const modalLogin = new Modal("modal-window-login", `Login`);
modalLogin.render();

const modalWindowLogin = document.getElementById('modal-window-login');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', () => {
    dialogPolyfill.registerDialog(modalWindowLogin);
    modalWindowLogin.showModal();
    const errorLogin = document.getElementById('error-login-data');
    if (errorLogin) {
        errorLogin.style.visibility = 'hidden';
    }
});


/*Modal for adding Review*/
const modalReview = new Modal("modal-window-review", `Add a Review`);
modalReview.render();

const modalWindowReview = document.getElementById('modal-window-review');
const reviewAddBtn = document.getElementsByClassName('btn review-add-btn')[0];

reviewAddBtn.addEventListener('click', () => {
    dialogPolyfill.registerDialog(modalWindowReview);
    modalWindowReview.showModal();
    const errorReview = document.getElementById('error-review');
    if (errorReview) {
        errorReview.style.visibility = 'hidden';
    }
    document.getElementById('name-input-review').value = window.localStorage.userName;
});


/*Modal for search and book villas*/
const modalSearchBook = new Modal("modal-window-search-book", `Available Villas`);
modalSearchBook.render();
const modalWindowSearchBook = document.getElementById('modal-window-search-book');


const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => {

    document.getElementsByClassName('search-form-error-date')[0].style.visibility = 'hidden';

    const checkIn = new Date(document.getElementById('check-in').value);
    const checkOut = new Date(document.getElementById('check-out').value);
    const nightsToStay = (checkOut - checkIn) / 1000 / 60 / 60 / 24;

    const checkPossibleMin = new Date();
    const checkPossibleMax = new Date("January 01, 2021");
    const checkInBook = new Date(checkIn);
    const checkOutBook = new Date(checkOut);

    if (nightsToStay <= 0 || checkInBook-checkPossibleMin<0 || checkPossibleMax-checkInBook<0 || checkOutBook-checkPossibleMin<0 || checkPossibleMax-checkOutBook<0) {
        document.getElementsByClassName('search-form-error-date')[0].style.visibility = 'visible';
        return;
    }


    dialogPolyfill.registerDialog(modalWindowSearchBook);
    modalWindowSearchBook.showModal();

    const errorSearchBook = document.getElementsByClassName('error-search-book');
    for (let i = 0; i < errorSearchBook.length; i++) {
        if (errorSearchBook[i]) {
            modalWindowSearchBook.removeChild(errorSearchBook[i]);
        }
    }


    const selectGuests = document.getElementById('select-guests').value;
    const villasDataGuests = {
        method: 'GET',
        url: `http://localhost:3000/villas?quantityGuests=${selectGuests}`,
        headers: { 'Content-Type': 'application/json' }
    };

    axios(villasDataGuests)
        .then(function (response) {
            for (let i = 0; i < response.data.length; i++) {
                const villaItem = new BookingVillaItem(response.data[i].img, response.data[i].name, response.data[i].quantityVillas, response.data[i].quantityGuests, response.data[i].pricePerNight, nightsToStay);
                villaItem.render(modalWindowSearchBook);
            }

            const submitBooking = document.getElementsByClassName('modal-book-villas-btn-submit');
            for (let i = 0; i < submitBooking.length; i++) {
                submitBooking[i].addEventListener('click', () => {
                    const parent = submitBooking[i].closest('.modal-book-villas-wrapper');
                    const villasId = parent.querySelector('.quantity').innerText;

                    const bookVilla = {
                        method: 'GET',
                        url: `http://localhost:3000/villas/${villasId}`,
                        headers: { 'Content-Type': 'application/json' }
                    };

                    axios(bookVilla)
                        .then(function (response) {
                            const checkIn = document.getElementById('check-in').value;
                            const month = checkIn.slice(5,7);
                            const indexFrom = checkIn.slice(8);
                            const monthArray = response.data.quantityPerDay[month];

                            const newArray = monthArray.splice(indexFrom, nightsToStay);

                            if (newArray.indexOf(0)>=0) {
                                alert('Sorry, all villas are booked for these dates. Please choose another date, or villa.');
                                return;
                            }

                            for (let i=0; i<newArray.length; i++) {
                                const minus = newArray[i]-1;
                                const result = monthArray.splice(indexFrom, 0, minus);
                            }

                            const villasData = {
                                method: 'PUT',
                                url: `http://localhost:3000/villas/${response.data.id}`,
                                data: {
                                    name: response.data.name,
                                    img: response.data.img,
                                    quantityVillas: response.data.quantityVillas,
                                    quantityGuests: response.data.quantityGuests,
                                    pricePerNight: response.data.pricePerNight,
                                    quantityPerDay: response.data.quantityPerDay
                                },
                                headers: { 'Content-Type': 'application/json' }
                            };

                            axios(villasData)
                                .then(function (response) {
                                    if(response.status===200) {
                                        alert('Сongratulations, you have successfully booked a villa! 💛🌹✅ Our manager will call you as soon as possible');
                                        modalWindowSearchBook.close();
                                        const modalBookVillasWrapper = document.getElementsByClassName('modal-book-villas-wrapper');
                                        for (let i = 0; i < modalBookVillasWrapper.length; i++) {
                                            if (modalBookVillasWrapper[i]) {
                                                modalBookVillasWrapper[i].style.display = 'none';
                                            }
                                        }
                                    }
                                })
                                .catch(function (error) {
                                    const errorSearchBook = document.createElement('p');
                                    errorSearchBook.innerHTML = `Sorry, something went wrong and we can't book villa for you right now. We are working on it.<br><b>${error.message}</b>`;
                                    errorSearchBook.classList.add('error-search-book');
                                    errorSearchBook.style.color = 'red';
                                    errorSearchBook.style.textAlign = 'center';
                                    modalWindowSearchBook.prepend(errorSearchBook);
                                });
                        })
                        .catch(function (error) {
                            const errorSearchBook = document.createElement('p');
                            errorSearchBook.innerHTML = `Sorry, something went wrong and we can't book villa for you right now. We are working on it.<br><b>${error.message}</b>`;
                            errorSearchBook.classList.add('error-search-book');
                            errorSearchBook.style.color = 'red';
                            errorSearchBook.style.textAlign = 'center';
                            modalWindowSearchBook.prepend(errorSearchBook);
                        });
                })
            }
        })
        .catch(function (error) {
            const errorSearchBook = document.createElement('p');
            errorSearchBook.innerHTML = `Sorry, something went wrong and we can't show you available villas right now.<br> We are working on it.<br><b>${error.message}</b>`;
            errorSearchBook.classList.add('error-search-book');
            errorSearchBook.style.color = 'red';
            errorSearchBook.style.textAlign = 'center';
            modalWindowSearchBook.appendChild(errorSearchBook);
        });
});


const closeModal = document.getElementsByClassName('modal-close');
closeModal[3].addEventListener('click', () => {
    modalWindowRegister.close();
});
closeModal[2].addEventListener('click', () => {
    modalWindowLogin.close();
});
closeModal[1].addEventListener('click', () => {
    modalWindowReview.close();
});

closeModal[0].addEventListener('click', () => {
    modalWindowSearchBook.close();

    const modalBookVillasWrapper = document.getElementsByClassName('modal-book-villas-wrapper');
    for (let i = 0; i < modalBookVillasWrapper.length; i++) {
        if (modalBookVillasWrapper[i]) {
            modalBookVillasWrapper[i].style.display = 'none';
        }
    }
});




