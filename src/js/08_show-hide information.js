const aboutInformation = document.getElementsByClassName('about-information')[0];
const showMoreButtonInput = new Input('button', '', "", "Show more", '', 'show-more-btn', 'btn show-more-btn');
showMoreButtonInput.render(aboutInformation);

const aboutInformationSecondParagraph = document.getElementsByClassName('about-information-second-paragraph')[0];
const showMoreButton = document.getElementById('show-more-btn');

showMoreButton.addEventListener('click', () => {
    aboutInformationSecondParagraph.style.display = 'block';
    showMoreButton.style.display = 'none';

    const hideButtonInput = new Input('button', '', "", "Hide", '', 'hide-btn', 'btn show-more-btn');
    hideButtonInput.render(aboutInformation);

    const hideButton = document.getElementById('hide-btn');
    hideButton.addEventListener('click', () => {
        aboutInformationSecondParagraph.style.display = 'none';
        showMoreButton.style.display = 'block';

        const aboutInformation = document.getElementsByClassName('about-information')[0];
        aboutInformation.removeChild(hideButton);
    });
});