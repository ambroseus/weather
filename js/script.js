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
            
        })
        .then(city => {

        })
        .catch(() => {

        })
        .finally(() => {

        });
   
}



inputSearch.addEventListener('input', getData);






    
});