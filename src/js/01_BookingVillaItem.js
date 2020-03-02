class BookingVillaItem {
    constructor(img, name, quantityVillas, quantityGuests, pricePerNight, quantityNights) {
        this._img = img;
        this._name = name;
        this._quantityVillas = quantityVillas;
        this._quantityGuests = quantityGuests;
        this._pricePerNight = pricePerNight;
        this._quantityNights = quantityNights;
    }

    render(container) {
        const modalBookVillasWrapper = document.createElement("div");
        modalBookVillasWrapper.classList.add('modal-book-villas-wrapper');

        const modalBookVillasPhotoWrapper = document.createElement("div");
        modalBookVillasPhotoWrapper.classList.add('modal-book-villas-photo-wrapper');

        const modalBookVillasPhoto = document.createElement("img");
        modalBookVillasPhoto.src = this._img;
        modalBookVillasPhoto.alt = this._name;
        modalBookVillasPhoto.classList.add('modal-book-villas-photo');

        const modalBookVillasName = document.createElement("a");
        modalBookVillasName.href = '#';
        modalBookVillasName.innerText = this._name;
        modalBookVillasName.classList.add('modal-book-villas-name');

        const modalBookVillasDescriptionWrapper = document.createElement("div");
        modalBookVillasDescriptionWrapper.classList.add('modal-book-villas-description-wrapper');


        modalBookVillasDescriptionWrapper.innerHTML = `<img src="img/villas/house-icon.png" alt="house-icon" class="modal-book-villas-description-icon">
        <span class="modal-book-villas-description-text"> <span class="quantity">${this._quantityVillas}</span> villas</span>
            <img src="img/villas/people-icon.png" alt="people-icon" class="modal-book-villas-description-icon modal-book-villas-description-icon-third">
        <span class="modal-book-villas-description-text">${this._quantityGuests} guests</span>
        <p class="modal-book-villas-description-text">Price per night: <span class="modal-book-villas-price"> $ ${this._pricePerNight}</span></p>
        <p class="modal-book-villas-description-text">Subtotal: <span class="modal-book-villas-subtotal"> ${this._quantityNights} night(s) * $ ${this._pricePerNight} = ${this._quantityNights * this._pricePerNight}$</span></p>
        <p class="modal-book-villas-description-discount">In case of summer discount, our manager will call you back and you will get it!</p>
        <p class="modal-book-villas-btn"><button class="btn modal-book-villas-btn-submit">Book now</button></p>`;

        modalBookVillasPhotoWrapper.appendChild(modalBookVillasPhoto);
        modalBookVillasPhotoWrapper.appendChild(modalBookVillasName);

        modalBookVillasWrapper.appendChild(modalBookVillasPhotoWrapper);
        modalBookVillasWrapper.appendChild(modalBookVillasDescriptionWrapper);

        container.appendChild(modalBookVillasWrapper);
    }
}


