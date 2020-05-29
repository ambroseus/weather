'use strict';
window.addEventListener('DOMContentLoaded', () => {


const inputSearch = document.querySelector('.search'),
      main = document.querySelector('.main'),
      https = 'https://api.weatherbit.io/v2.0/current?city=',
      key = '&lang=ru&key=304b9c8efaa34b618a7ec269925f94da',
      wrapper = document.querySelector('.wrapper');


function getData() {
    let value = inputSearch.value;
    fetch(`${https}${value}${key}`)
        .then(res => res.json())
        .then(data => {
            const cityWeather = data.data;
            wrapper.innerHTML = '';
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
              cityData = data,
              cityList = document.createElement('li');
        console.log(cityData);
            
        wrapper.append(cityList);
        cityList.classList.add('srch_city');
        cityList.innerText = cityName;
        cityList.addEventListener('click', () => {
            console.log('click');
            main.innerHTML = `
                <div class="card">
                <p class="city">${data.city_name}/${data.country_code}</p>
                <p class="temp">${data.temp}&degС</p>
                <img class="img" src="img/clouds.png" alt="someImg">
                <p class="subs">${data.weather.description}</p>
                </div>
            `;


        });
    });
  
}



inputSearch.addEventListener('input', getData);






    
});