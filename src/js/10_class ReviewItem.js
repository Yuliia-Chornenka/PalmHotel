class ReviewItem {
    constructor(rate, text, name) {
        this._rate = rate;
        this._text = text;
        this._name = name;
    }

    render(container) {

        const reviewWrapper = document.createElement("div");
        reviewWrapper.classList.add('review-wrapper');

        const reviewRate = document.createElement("p");
        reviewRate.innerText = this._rate;
        reviewRate.classList.add('review-rate');

        const reviewText = document.createElement("p");
        reviewText.innerText = this._text;
        reviewText.classList.add('review-text');

        const reviewName = document.createElement("p");
        reviewName.innerText = this._name;
        reviewName.classList.add('review-name');

        reviewWrapper.appendChild(reviewRate);
        reviewWrapper.appendChild(reviewText);
        reviewWrapper.appendChild(reviewName);

        container.appendChild(reviewWrapper);
    }
}


const formReviewWrapper = new Form('review-form');
formReviewWrapper.render(modalWindowReview);

const formReview = new addReviewForm();
formReview.render();

const formReviewSubmit = document.getElementById('review-form');
formReviewSubmit.addEventListener('submit', (event) => {
    event.preventDefault();

    const rate = document.getElementById('review-selection').value;
    const description = document.getElementById('review-textarea').value;
    const name = document.getElementById('name-input-review').value;


    const reviewData = {
        rate,
        description,
        name
    };

    const reviewOptions = {
        method: 'POST',
        url: 'http://localhost:3000/review',
        data: JSON.stringify(reviewData),
        headers: { 'Content-Type': 'application/json' }
    };

    axios(reviewOptions)
        .then(function (response) {
            if (response.status === 201) {
                document.getElementById('review-form').reset();
                modalWindowReview.close();

                const reviewContainer = document.getElementsByClassName('review-container')[0];
                const newReview = new ReviewItem(response.data.rate, response.data.description, response.data.name);
                newReview.render(reviewContainer);

                reviewSlider();
            }
        })
        .catch(function (error) {
            const errorLogin = document.getElementById('error-review');
            errorLogin.style.visibility = 'visible';
        });
});


const getReviews = {
    method: 'GET',
    url: 'http://localhost:3000/review',
    headers: { 'Content-Type': 'application/json' }
};

axios(getReviews)
    .then(function (response) {
        const reviewContainer = document.getElementsByClassName('review-container')[0];
        for (let i = 0; i < response.data.length; i++) {
            const review = new ReviewItem(response.data[i].rate, response.data[i].description, response.data[i].name);
            review.render(reviewContainer);
        }
        reviewSlider();
    })
    .catch(function (error) {
        document.getElementById('review-search-form').style.display = 'none';
        const reviewContainer = document.getElementsByClassName('review-carousel')[0];
        reviewContainer.style.textAlign = 'center';
        reviewContainer.innerHTML = `<p>Sorry, something went wrong and we can't load the reviews. We are working on it.<br><b>${error.message}</b></p>`;
    });


function reviewSlider() {
    let width = 290;
    let count = 3;

    if (window.matchMedia("(min-width: 320px) and (max-width: 639px) ").matches) {
        count = 1;
        width = 280;
    } else if (window.matchMedia("(min-width: 640px) and (max-width: 960px)").matches) {
        count = 2;
        width = 280;
    } else if (window.matchMedia("(min-width: 961px)").matches) {
        count = 3;
        width = 290;
    }

    let reviewItem = document.querySelectorAll('.review-wrapper');
    const reviewContainer = document.getElementsByClassName('review-container')[0];
    let position = 0;

    document.getElementsByClassName('review-arrow-back')[0].addEventListener('click', () => {
        position += width * count;
        position = Math.min(position, 0);
        reviewContainer.style.transform = `translateX(${position}px)`;
    });

    document.getElementsByClassName('review-arrow-next')[0].addEventListener('click', () => {
        position -= width * count;
        position = Math.max(position, -width * (reviewItem.length - count));
        reviewContainer.style.transform = `translateX(${position}px)`;
    });
}


/* Search */
document.getElementById('review-search-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const reviewContainer = document.getElementsByClassName('review-container')[0];
    const searchValue = document.getElementById('review-search-value').value;
    const getSearch = {
        method: 'GET',
        url: `http://localhost:3000/review?q=${searchValue}`,
        headers: { 'Content-Type': 'application/json' }
    };

    axios(getSearch)
        .then(function (response) {
            reviewContainer.innerHTML = '';
            reviewContainer.style.transform = `translateX(0px)`;

            if (response.data.length === 0) {
                document.getElementById('review-search-not-found').style.visibility = 'visible';
            }

            for (let i = 0; i < response.data.length; i++) {
                const review = new ReviewItem(response.data[i].rate, response.data[i].description, response.data[i].name);
                review.render(reviewContainer);
                document.getElementById('review-search-not-found').style.visibility = 'hidden';
            }
            reviewSlider();
        })
        .catch(function (error) {
            reviewContainer.style.transform = `translateX(0px)`;
            reviewContainer.style.textAlign = 'center';
            reviewContainer.innerHTML = `<p>Sorry, something went wrong and you can't search right now. We are working on it.<br><b>${error.message}</b></p>`;
        });
});

