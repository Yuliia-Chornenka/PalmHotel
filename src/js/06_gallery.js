const getImgs1 = {
    method: 'GET',
    url: 'http://localhost:3000/img?_page=1&_limit=8',
    headers: {'Content-Type': 'application/json'}
};

const getImgs2 = {
    method: 'GET',
    url: 'http://localhost:3000/img?_page=2&_limit=8',
    headers: {'Content-Type': 'application/json'}
};

const getImgs3 = {
    method: 'GET',
    url: 'http://localhost:3000/img?_page=3&_limit=8',
    headers: {'Content-Type': 'application/json'}
};

const getImgs4 = {
    method: 'GET',
    url: 'http://localhost:3000/img?_page=4&_limit=8',
    headers: {'Content-Type': 'application/json'}
};

const getImgs5 = {
    method: 'GET',
    url: 'http://localhost:3000/img?_page=5&_limit=8',
    headers: {'Content-Type': 'application/json'}
};


function getImgs(data) {
    axios(data)
        .then(function (response) {
            const galleryContainer = document.getElementsByClassName('gallery-container')[0];
            for (let i = 0; i < response.data.length; i++) {
                const galleryImg = document.createElement("img");
                galleryImg.src = response.data[i].url;
                galleryImg.alt = response.data[i].name;
                galleryImg.classList.add('gallery-img');
                if (response.data[i].className) {
                    galleryImg.classList.add(response.data[i].className);
                }
                galleryContainer.appendChild(galleryImg);
            }
        })
        .catch(function (error) {
            const galleryContainer = document.getElementsByClassName('gallery-container')[0];
            galleryContainer.style.minHeight = '100px';
            galleryContainer.innerHTML = `<p>Sorry, something went wrong and we can\'t load the photos. We are working on it.<br><b>${error.message}</b></p>`;
        });
}


const radioGallery = document.getElementsByName("gallery");
if (radioGallery[0].checked) {
    getImgs(getImgs1);
}

for (let i = 0; i < radioGallery.length; i++) {
    radioGallery[i].addEventListener('change', () => {

        const galleryImgDescription = document.querySelectorAll('.gallery-img-description');
        for (let i = 0; i < galleryImgDescription.length; i++) {
            if (galleryImgDescription[i]) {
                document.body.removeChild(galleryImgDescription[i]);
            }
        }

        const radioLabelGallery = document.getElementsByClassName('filter-btn-gallery');
        const galleryContainer = document.getElementsByClassName('gallery-container')[0];
        galleryContainer.innerHTML = '';

        if (radioGallery[0].checked) {
            radioLabelGallery[0].classList.add('filter-btn-active');
            radioLabelGallery[1].classList.remove('filter-btn-active');
            radioLabelGallery[2].classList.remove('filter-btn-active');
            radioLabelGallery[3].classList.remove('filter-btn-active');
            radioLabelGallery[4].classList.remove('filter-btn-active');
            getImgs(getImgs1);

        } else if (radioGallery[1].checked) {
            radioLabelGallery[1].classList.add('filter-btn-active');
            radioLabelGallery[0].classList.remove('filter-btn-active');
            radioLabelGallery[2].classList.remove('filter-btn-active');
            radioLabelGallery[3].classList.remove('filter-btn-active');
            radioLabelGallery[4].classList.remove('filter-btn-active');
            getImgs(getImgs2);

        } else if (radioGallery[2].checked) {
            radioLabelGallery[2].classList.add('filter-btn-active');
            radioLabelGallery[0].classList.remove('filter-btn-active');
            radioLabelGallery[1].classList.remove('filter-btn-active');
            radioLabelGallery[3].classList.remove('filter-btn-active');
            radioLabelGallery[4].classList.remove('filter-btn-active');
            getImgs(getImgs3);

        } else if (radioGallery[3].checked) {
            radioLabelGallery[3].classList.add('filter-btn-active');
            radioLabelGallery[0].classList.remove('filter-btn-active');
            radioLabelGallery[1].classList.remove('filter-btn-active');
            radioLabelGallery[2].classList.remove('filter-btn-active');
            radioLabelGallery[4].classList.remove('filter-btn-active');
            getImgs(getImgs4);

        } else if (radioGallery[4].checked) {
            radioLabelGallery[4].classList.add('filter-btn-active');
            radioLabelGallery[0].classList.remove('filter-btn-active');
            radioLabelGallery[1].classList.remove('filter-btn-active');
            radioLabelGallery[2].classList.remove('filter-btn-active');
            radioLabelGallery[3].classList.remove('filter-btn-active');
            getImgs(getImgs5);
        }
    });
}


const galleryContainer = document.getElementsByClassName('gallery-container')[0];
galleryContainer.addEventListener('click', (event) => {
    let target = event.target;
    if (target.tagName !== 'IMG') return;

    function getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset,
            width: box.width,
            height: box.height
        };
    }

    function createMessageUnder(elem, html) {
        let message = document.createElement('div');
        message.classList.add('gallery-img-description');
        document.body.appendChild(message);

        let coords = getCoords(elem);
        message.style.left = coords.left + "px";
        message.style.top = coords.top + "px";
        message.style.height = coords.height + "px";
        message.style.width = coords.width + "px";
        message.innerHTML = html;

        return message;
    }

    createMessageUnder(target, `<h4 class="gallery-img-description-title">${target.alt}</h4><span class="gallery-img-description-close close-btn">&#10006;</span>`);

    const galleryImgDescriptionClose = document.getElementsByClassName('gallery-img-description-close');
    for (let i = 0; i < galleryImgDescriptionClose.length; i++) {
        galleryImgDescriptionClose[i].addEventListener('click', (event) => {
            let message = event.target.parentNode;
            try {
                document.body.removeChild(message);
            } catch (e) {

            }
        });
    }
});





