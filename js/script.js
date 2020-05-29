'use strict';
window.addEventListener('DOMContentLoaded', () => {


const inputSearch = document.querySelector('.search'),
      https = 'https://api.weatherbit.io/v2.0/current?city=',
      key = '&lang=ru&key=304b9c8efaa34b618a7ec269925f94da',
      wrapper = document.querySelector('.wrapper');


function getData() {
    let value = inputSearch.value;

    fetch(`${https}${value}${key}`)
        .then(res => res.json())
        .then(data => {
            const cityWeather = data.data;
            getWeather(cityWeather);
        })
        .then(city => {

        })
        .catch(() => {

        })
        .finally(() => {

        });
}
function getWeather(data) {
    data.forEach(data => {
        const cityName = data.city_name,
              cityList = document.createElement('li');
            
        wrapper.append(cityList);
        cityList.classList.add('srch_city');
        cityList.innerText = cityName;
    });
  
}



inputSearch.addEventListener('input', getData);






    
});