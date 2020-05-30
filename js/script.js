'use strict';
window.addEventListener('DOMContentLoaded', () => {

const searchInput = document.getElementById('search-input');
const searchResult = document.getElementById('search-result');

searchInput.addEventListener("input", getData);

const key = '304b9c8efaa34b618a7ec269925f94da';
const apiUrl = value => `https://api.weatherbit.io/v2.0/current?lang=ru&key=${key}&city=${value}`;
const iconUrl = icon => `https://www.weatherbit.io/static/img/icons/${icon}.png`;


function getData(event) {
    const value = event.target.value || "";
    if (value.length < 2) return; // do not call api if input less then 2 chars

    fetch(apiUrl(value))
        .then(res => {
            if (res.status !== 200) {
                return new Promise(resolve => resolve(res.statusText));
            }
            return res.json();
        })
        .then(data => {
            //if data is string then it contains error status text (res.status !== 200) 
            if (typeof data === "string") { 
                cityWeather(null, data);
            }
            else {
                cityWeather(data.data[0]); // api response contains only 1 item in data array
            }
       }).catch(() => cityWeather(null, "Fetch error"))
}

function cityWeather(data, error) {
    console.log(data);
    if (error) {
        searchResult.innerHTML = `<span class="error">${error}</span>`;
        return;
    }
    const { city_name, country_code, temp, weather } = data;
    const { icon, description } = weather;

    const cityHtml = `<div class="city">${city_name} (${country_code})</div>`;

    const tempHtml = `<span class="temp">${temp}\u2103</span>`;
    const descHtml = `<span class="description">${description}</span>`;
    const iconHtml = `<img class="icon" src="${iconUrl(icon)}"/>`;

    const weatherHtml = `<div class="weather">${tempHtml}${descHtml}${iconHtml}</div>`;

    searchResult.innerHTML = `${cityHtml}${weatherHtml}`;
}
 
});