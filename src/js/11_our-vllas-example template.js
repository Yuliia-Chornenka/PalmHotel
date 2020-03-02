const ourVillasTemplate = document.getElementById('our-villas-template');
const ourVillasContainer = document.getElementsByClassName('our-villas-container')[0];
const radioVillas = document.getElementsByName("villa");


if (radioVillas[0].checked) {
    check();
}

for (let i=0; i<radioVillas.length; i++) {
    radioVillas[i].addEventListener('change', check);
}


function check(){
    const image = ourVillasTemplate.content.querySelectorAll("img");
    const tagP = ourVillasTemplate.content.querySelectorAll("p");
    const name = ourVillasTemplate.content.querySelectorAll("a");
    const tagSpanIcons = ourVillasTemplate.content.querySelectorAll("span");
    const tagUl =ourVillasTemplate.content.querySelectorAll('ul');

    for (let i=0; i<radioVillas.length; i++) {
        const radioLabel = document.getElementsByClassName('filter-btn');
        radioLabel[i].classList.remove('filter-btn-active');
        if (radioVillas[i].checked) {
            radioLabel[i].classList.add('filter-btn-active');
        }
    }

    if(radioVillas[0].checked){
        ourVillasContainer.innerHTML = '';

        image[0].src = "img/villas/aqua-villas/2-jacuzzi.jpg";
        tagP[0].innerText = "$ 550";
        name[0].innerHTML = "Aqua Villa <small>with</small> Jacuzzi";
        tagSpanIcons[0].innerText = "10 villas";
        tagSpanIcons[1].innerHTML = "84 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "2 guests";
        tagUl[1].innerHTML = "&#10004; Ocean view bathroom with spa bath";
        tagUl[2].innerHTML = "&#10004; Direct access to the lagoon";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));

        image[0].src = "img/villas/beach-villas/1.jpg";
        tagP[0].innerText = "$ 300";
        name[0].innerText = "Beach Villa";
        tagSpanIcons[0].innerText = "24 villas";
        tagSpanIcons[1].innerHTML = "72 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "2 guests";
        tagUl[1].innerHTML = "&#10004; Private terrace with outdoor seating";
        tagUl[2].innerHTML = "&#10004; Open air shower and bathroom";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));

        image[0].src = "img/villas/beach-villas/3-family.png";
        tagP[0].innerText = "$ 400";
        name[0].innerText = "Beach Villa Family";
        tagSpanIcons[0].innerText = "16 villas";
        tagSpanIcons[1].innerHTML = "98 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "5 guests";
        tagUl[1].innerHTML = "&#10004; Private terrace with outdoor seating";
        tagUl[2].innerHTML = "&#10004; Open air shower and bathroom";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));

        image[0].src = "img/villas/ocean-front-villas/2-jacuzzi.jpg";
        tagP[0].innerText = "$ 450";
        name[0].innerHTML = "Ocean Front Villa <small>with</small> Jacuzzi";
        tagSpanIcons[0].innerText = "15 villas";
        tagSpanIcons[1].innerHTML = "80 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "2 guests";
        tagUl[1].innerHTML = "&#10004; Private terrace with outdoor seating";
        tagUl[2].innerHTML = "&#10004; Private pathway to the beach";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));

        image[0].src = "img/villas/aqua-villas/3-family.jpg";
        tagP[0].innerText = "$ 600";
        name[0].innerText = "Aqua Villa Family";
        tagSpanIcons[0].innerText = "4 villas";
        tagSpanIcons[1].innerHTML = "102 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "6 guests";
        tagUl[1].innerHTML = "&#10004; Ocean view bathroom with spa bath";
        tagUl[2].innerHTML = "&#10004; Direct access to the lagoon";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));

        image[0].src = "img/villas/ocean-front-villas/1.jpg";
        tagP[0].innerText = "$ 400";
        name[0].innerText = "Ocean Front Villa";
        tagSpanIcons[0].innerText = "20 villas";
        tagSpanIcons[1].innerHTML = "75 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "2 guests";
        tagUl[1].innerHTML = "&#10004; Private terrace with outdoor seating";
        tagUl[2].innerHTML = "&#10004; Private pathway to the beach";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));

        image[0].src = "img/villas/aqua-villas/1.jpg";
        tagP[0].innerText = "$ 500";
        name[0].innerText = "Aqua Villa";
        tagSpanIcons[0].innerText = "18 villas";
        tagSpanIcons[1].innerHTML = "78 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "3 guests";
        tagUl[1].innerHTML = "&#10004; Ocean view bathroom with spa bath";
        tagUl[2].innerHTML = "&#10004; Direct access to the lagoon";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));

        image[0].src = "img/villas/beach-villas/2-jacuzzi.jpg";
        tagP[0].innerText = "$ 350";
        name[0].innerHTML = "Beach Villa <small>with</small> Jacuzzi";
        tagSpanIcons[0].innerText = "14 villas";
        tagSpanIcons[1].innerHTML = "76 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "2 guests";
        tagUl[1].innerHTML = "&#10004; Private terrace with outdoor seating";
        tagUl[2].innerHTML = "&#10004; Open air shower and bathroom";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));

        image[0].src = "img/villas/ocean-front-villas/3-family.jpg";
        tagP[0].innerText = "$ 500";
        name[0].innerText = "Ocean Front Villa Family";
        tagSpanIcons[0].innerText = "12 villas";
        tagSpanIcons[1].innerHTML = "94 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "4 guests";
        tagUl[1].innerHTML = "&#10004; Private terrace with outdoor seating";
        tagUl[2].innerHTML = "&#10004; Private pathway to the beach";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));

    } else if (radioVillas[1].checked) {
        ourVillasContainer.innerHTML = '';

        image[0].src = "img/villas/aqua-villas/1.jpg";
        tagP[0].innerText = "$ 500";
        name[0].innerText = "Aqua Villa";
        tagSpanIcons[0].innerText = "18 villas";
        tagSpanIcons[1].innerHTML = "78 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "3 guests";
        tagUl[1].innerHTML = "&#10004; Ocean view bathroom with spa bath";
        tagUl[2].innerHTML = "&#10004; Direct access to the lagoon";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));

        image[0].src = "img/villas/aqua-villas/2-jacuzzi.jpg";
        tagP[0].innerText = "$ 550";
        name[0].innerHTML = "Aqua Villa <small>with</small> Jacuzzi";
        tagSpanIcons[0].innerText = "10 villas";
        tagSpanIcons[1].innerHTML = "84 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "2 guests";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));

        image[0].src = "img/villas/aqua-villas/3-family.jpg";
        tagP[0].innerText = "$ 600";
        name[0].innerText = "Aqua Villa Family";
        tagSpanIcons[0].innerText = "6 villas";
        tagSpanIcons[1].innerHTML = "102 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "6 guests";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));
    }

    else if (radioVillas[2].checked) {
        ourVillasContainer.innerHTML = '';

        image[0].src = "img/villas/beach-villas/1.jpg";
        tagP[0].innerText = "$ 300";
        name[0].innerText = "Beach Villa";
        tagSpanIcons[0].innerText = "24 villas";
        tagSpanIcons[1].innerHTML = "72 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "2 guests";
        tagUl[1].innerHTML = "&#10004; Private terrace with outdoor seating";
        tagUl[2].innerHTML = "&#10004; Open air shower and bathroom";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));

        image[0].src = "img/villas/beach-villas/3-family.png";
        tagP[0].innerText = "$ 400";
        name[0].innerText = "Beach Villa Family";
        tagSpanIcons[0].innerText = "16 villas";
        tagSpanIcons[1].innerHTML = "98 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "5 guests";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));

        image[0].src = "img/villas/beach-villas/2-jacuzzi.jpg";
        tagP[0].innerText = "$ 350";
        name[0].innerHTML = "Beach Villa <small>with</small> Jacuzzi";
        tagSpanIcons[0].innerText = "14 villas";
        tagSpanIcons[1].innerHTML = "76 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "2 guests";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));
    }

    else if (radioVillas[3].checked) {
        ourVillasContainer.innerHTML = '';

        image[0].src = "img/villas/ocean-front-villas/1.jpg";
        tagP[0].innerText = "$ 400";
        name[0].innerText = "Ocean Front Villa";
        tagSpanIcons[0].innerText = "20 villas";
        tagSpanIcons[1].innerHTML = "75 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "2 guests";
        tagUl[1].innerHTML = "&#10004; Private terrace with outdoor seating";
        tagUl[2].innerHTML = "&#10004; Private pathway to the beach";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));

        image[0].src = "img/villas/ocean-front-villas/2-jacuzzi.jpg";
        tagP[0].innerText = "$ 450";
        name[0].innerHTML = "Ocean Front Villa <small>with</small> Jacuzzi";
        tagSpanIcons[0].innerText = "15 villas";
        tagSpanIcons[1].innerHTML = "80 m<sup>2</sup>";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));

        image[0].src = "img/villas/ocean-front-villas/3-family.jpg";
        tagP[0].innerText = "$ 500";
        name[0].innerText = "Ocean Front Villa Family";
        tagSpanIcons[0].innerText = "12 villas";
        tagSpanIcons[1].innerHTML = "94 m<sup>2</sup>";
        tagSpanIcons[2].innerText = "4 guests";
        ourVillasContainer.appendChild(ourVillasTemplate.content.cloneNode(true));
    }
}









