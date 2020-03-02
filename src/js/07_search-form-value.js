const checkIn = document.getElementById('check-in');
const checkOut = document.getElementById('check-out');
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
let date = '';

if(month.toString().length===1 && day.toString().length===1) {
    date = `${year}-${'0'+month}-${'0'+day}`
} else if (day.toString().length===1) {
    date = `${year}-${month}-${'0'+day}`
}  else if (month.toString().length===1) {
    date = `${year}-${'0'+month}-${day}`
} else {
    date = `${year}-${month}-${day}`
}

const maxDay = new Date("December 31, 2020");
const yearMax = maxDay.getFullYear();
const monthMax = maxDay.getMonth() + 1;
const dayMax = maxDay.getDate();
const dateMax = `${yearMax}-${monthMax}-${dayMax}`;


checkIn.value = date;
checkIn.min = date;
checkIn.max = dateMax;

checkOut.value = date;
checkOut.min = date;
checkOut.max = dateMax;