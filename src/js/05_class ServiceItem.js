class ServiceItem {
    constructor(classForMoney, icon, img, alt, serviceName, description) {
        this._classForMoney = classForMoney;
        this._icon = icon;
        this._img = img;
        this._alt =alt;
        this._serviceName = serviceName;
        this._description = description;
    }

    render(container) {

        const servicesItem = document.createElement("div");
        servicesItem.classList.add('services-item');

        const servicesPriceIcon = document.createElement("div");
        servicesPriceIcon.classList.add('services-price-icon');
        servicesPriceIcon.classList.add(this._classForMoney);
        servicesPriceIcon.innerText = this._icon;

        const itemImg = document.createElement("img");
        itemImg.src = this._img;
        itemImg.alt = this._alt;
        itemImg.classList.add('services-icon');

        const servicesName = document.createElement("p");
        servicesName.classList.add('services-name');
        servicesName.innerText = this._serviceName;

        const description = document.createElement('div');
        description.classList.add('services-description');
        description.innerText = this._description;

        servicesItem.appendChild(servicesPriceIcon);
        servicesItem.appendChild(itemImg);
        servicesItem.appendChild(servicesName);
        servicesItem.appendChild(description);

        container.appendChild(servicesItem);
    }
}


const servicesContainer = document.getElementsByClassName('services-container')[0];

const service1 = new ServiceItem('free-icon', "Free", 'img/services/pool.png', 'pool-icon', 'Swimming Pool', 'Extra information about swimming pool');
const service2 = new ServiceItem('money-icon', "$", 'img/services/plane.png', 'plane-icon', 'Airport Transfer', 'Extra information about airport transfer');
const service3 = new ServiceItem('free-icon', "Free", 'img/services/car.png', 'car-icon', 'Car Parking', 'Extra information about car parking');
const service4 = new ServiceItem('money-icon', "$", 'img/services/minibar.png', 'minibar-icon', 'Minibar', 'Extra information about minibar');
const service5 = new ServiceItem('money-icon', "$", 'img/services/spa.png', 'spa-icon', 'Spa Services', 'Extra information about spa services');
const service6 = new ServiceItem('free-icon', "Free", 'img/services/sport.png', 'sport-icon', 'Sport Club', 'Extra information about sport club');
const service7 = new ServiceItem('money-icon', "$", 'img/services/excursion.png', 'castle-icon', 'Excursion', 'Extra information about excursion');
const service8 = new ServiceItem('free-icon', "Free", 'img/services/front-desk.png', 'people-icon', 'Front Desk 24/7', 'Extra information about Front Desk');
const service9 = new ServiceItem('money-icon', "$", 'img/services/diving.png', 'diving-icon', 'Diving', 'Extra information about diving');
const service10 = new ServiceItem('money-icon', "$", 'img/services/babysitter.png', 'stroller-icon', 'Babysitter', 'Extra information about babysitter');
const service11 = new ServiceItem('money-icon', "$", 'img/services/wedding.png', 'rings-icon', 'Wedding Organization', 'Extra information about wedding organization');
const service12 = new ServiceItem('money-icon', "$", 'img/services/yacht.png', 'yacht-icon', 'Rent a Yacht', 'Extra information about renting a yacht');


service1.render(servicesContainer);
service2.render(servicesContainer);
service3.render(servicesContainer);
service4.render(servicesContainer);
service5.render(servicesContainer);
service6.render(servicesContainer);
service7.render(servicesContainer);
service8.render(servicesContainer);
service9.render(servicesContainer);
service10.render(servicesContainer);
service11.render(servicesContainer);
service12.render(servicesContainer);