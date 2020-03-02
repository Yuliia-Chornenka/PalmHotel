class MenuItem {
    constructor(img, name, ingredients, price) {
        this._img = img;
        this._name = name;
        this._ingredients = ingredients;
        this._price = price
    }

    render(container) {

        const restaurantMenuExample = document.createElement("div");
        restaurantMenuExample.classList.add('restaurant-menu-example');

        const itemImg = document.createElement("img");
        itemImg.src = this._img;
        itemImg.alt = this._name;
        itemImg.classList.add('restaurant-menu-example-img');

        const restaurantMenuExampleDscription = document.createElement("div");
        restaurantMenuExampleDscription.classList.add('restaurant-menu-example-description');

        restaurantMenuExampleDscription.innerHTML = `<p class="restaurant-menu-example-name">${this._name}</p>
            <p class="restaurant-menu-example-ingredients">${this._ingredients}</p>`;

        const price = document.createElement("p");
        price.innerText = this._price;
        price.classList.add('restaurant-menu-example-price');

        restaurantMenuExample.appendChild(itemImg);
        restaurantMenuExample.appendChild(restaurantMenuExampleDscription);
        restaurantMenuExample.appendChild(price);

        container.appendChild(restaurantMenuExample);
    }
}


const radioMenu = document.getElementsByName("menu");
if (radioMenu[0].checked) {
    createMenu();
}

for (let i = 0; i < radioMenu.length; i++) {
    radioMenu[i].addEventListener('change', createMenu);
}

function createMenu() {
    for (let i = 0; i < radioMenu.length; i++) {
        const radioLabelMenu = document.getElementsByClassName('filter-btn-menu');
        radioLabelMenu[i].classList.remove('filter-btn-active');
        if (radioMenu[i].checked) {
            radioLabelMenu[i].classList.add('filter-btn-active');
            const sortByPrice = document.getElementById('sort-by-price');
            sortByPrice.selected = true;
        }
    }

    const restaurantContainerMain = document.getElementById('restaurant-container-main-dish');
    const restaurantContainerDessert = document.getElementById('restaurant-container-dessert');
    const restaurantContainerDrinks = document.getElementById('restaurant-container-drinks');

    if (radioMenu[0].checked) {

        restaurantContainerMain.style.display = 'flex';
        restaurantContainerDessert.style.display = 'none';
        restaurantContainerDrinks.style.display = 'none';

        if (restaurantContainerMain.childElementCount === 0) {
            restaurantContainerMain.style.justifyContent = 'space-between';  /*To display the menu correctly after an error*/
            restaurantContainerMain.style.textAlign = 'left';
            restaurantContainerMain.innerText = '';

            const menuData = {
                method: 'GET',
                url: 'http://localhost:3000/menu?category=main',
                headers: {'Content-Type': 'application/json'}
            };

            axios(menuData)
                .then(function (response) {
                    for (let i = 0; i < response.data.length; i++) {
                        const main = new MenuItem(response.data[i].img, response.data[i].name, response.data[i].ingredients, response.data[i].price);
                        main.render(restaurantContainerMain);
                    }
                })
                .catch(function (error) {
                    document.getElementsByClassName('restaurant-section')[0].style.minHeight = '320px';
                    restaurantContainerMain.style.justifyContent = 'center';
                    restaurantContainerMain.style.textAlign = 'center';
                    restaurantContainerMain.innerText = `${error.message}: Sorry, something went wrong and we can't load main menu. We are working on it.`;
                });
        }
    }

    if (radioMenu[1].checked) {
        restaurantContainerMain.style.display = 'none';
        restaurantContainerDessert.style.display = 'flex';
        restaurantContainerDrinks.style.display = 'none';

        if (restaurantContainerDessert.childElementCount === 0) {
            restaurantContainerDessert.style.justifyContent = 'space-between';
            restaurantContainerDessert.style.textAlign = 'left';
            restaurantContainerDessert.innerText = '';

            const menuData = {
                method: 'GET',
                url: 'http://localhost:3000/menu?category=dessert',
                headers: {'Content-Type': 'application/json'}
            };

            axios(menuData)
                .then(function (response) {
                    for (let i = 0; i < response.data.length; i++) {
                        const dessert = new MenuItem(response.data[i].img, response.data[i].name, response.data[i].ingredients, response.data[i].price);
                        dessert.render(restaurantContainerDessert);
                    }
                })
                .catch(function (error) {
                    document.getElementsByClassName('restaurant-section')[0].style.minHeight = '320px';
                    restaurantContainerDessert.style.justifyContent = 'center';
                    restaurantContainerDessert.style.textAlign = 'center';
                    restaurantContainerDessert.innerText = `${error.message}: Sorry, something went wrong and we can't load main menu. We are working on it.`;
                });
        }

    }

    if (radioMenu[2].checked) {
        restaurantContainerMain.style.display = 'none';
        restaurantContainerDessert.style.display = 'none';
        restaurantContainerDrinks.style.display = 'flex';

        if (restaurantContainerDrinks.childElementCount === 0) {
            restaurantContainerDrinks.style.justifyContent = 'space-between';
            restaurantContainerDrinks.style.textAlign = 'left';
            restaurantContainerDrinks.innerText = '';

            const menuData = {
                method: 'GET',
                url: 'http://localhost:3000/menu?category=drinks',
                headers: {'Content-Type': 'application/json'}
            };

            axios(menuData)
                .then(function (response) {
                    for (let i = 0; i < response.data.length; i++) {
                        const drinks = new MenuItem(response.data[i].img, response.data[i].name, response.data[i].ingredients, response.data[i].price);
                        drinks.render(restaurantContainerDrinks);
                    }
                })
                .catch(function (error) {
                    document.getElementsByClassName('restaurant-section')[0].style.minHeight = '320px';
                    restaurantContainerDrinks.style.justifyContent = 'center';
                    restaurantContainerDrinks.style.textAlign = 'center';
                    restaurantContainerDrinks.innerText = `${error.message}: Sorry, something went wrong and we can't load main menu. We are working on it.`;
                });
        }
    }
}



/*Sort*/
function menuSortAndSearch(menuData) {
    const restaurantContainerMain = document.getElementById('restaurant-container-main-dish');
    const restaurantContainerDessert = document.getElementById('restaurant-container-dessert');
    const restaurantContainerDrinks = document.getElementById('restaurant-container-drinks');

    const restaurantMenuErrorSort = document.getElementsByClassName('restaurant-menu-error-sort')[0];
    axios(menuData)
        .then(function (response) {
            if (restaurantMenuErrorSort) {
                restaurantMenuErrorSort.style.visibility = 'hidden';
            }
            if (radioMenu[0].checked) {
                restaurantContainerMain.innerHTML = '';
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].category === 'main') {
                        const main = new MenuItem(response.data[i].img, response.data[i].name, response.data[i].ingredients, response.data[i].price);
                        main.render(restaurantContainerMain);
                    }
                }
            } else if (radioMenu[1].checked) {
                restaurantContainerDessert.innerHTML = '';
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].category === 'dessert') {
                        const dessert = new MenuItem(response.data[i].img, response.data[i].name, response.data[i].ingredients, response.data[i].price);
                        dessert.render(restaurantContainerDessert);
                    }
                }
            } else if (radioMenu[2].checked) {
                restaurantContainerDrinks.innerHTML = '';
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].category === 'drinks') {
                        const drinks = new MenuItem(response.data[i].img, response.data[i].name, response.data[i].ingredients, response.data[i].price);
                        drinks.render(restaurantContainerDrinks);
                    }
                }
            }
        })
        .catch(function (error) {
            restaurantMenuErrorSort.style.visibility = 'visible';
        });
}


const restaurantSort = document.getElementById('restaurant-sort');
restaurantSort.onchange = function () {
    const menuDataLow = {
        method: 'GET',
        url: 'http://localhost:3000/menu?_sort=price&_order=asc',
        headers: {'Content-Type': 'application/json'}
    };

    const menuDataHigh = {
        method: 'GET',
        url: 'http://localhost:3000/menu?_sort=price&_order=desc',
        headers: {'Content-Type': 'application/json'}
    };

    const menuDataDefault = {
        method: 'GET',
        url: 'http://localhost:3000/menu',
        headers: {'Content-Type': 'application/json'}
    };

    switch (this.value) {
        case 'low':
            menuSortAndSearch(menuDataLow);
            break;

        case 'high':
            menuSortAndSearch(menuDataHigh);
            break;
        case 'default':
            menuSortAndSearch(menuDataDefault);
            break;
    }
};


/*Search*/
document.getElementById('menu-search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const searchValue = document.getElementById('menu-search-value').value;
    const getSearch = {
        method: 'GET',
        url: `http://localhost:3000/menu?name_like=${searchValue}`,
        headers: {'Content-Type': 'application/json'}
    };
    menuSortAndSearch(getSearch);
});






