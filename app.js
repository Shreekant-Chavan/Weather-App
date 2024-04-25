const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temprature = document.querySelector('.temprature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');


function checkWeather(city) {
    const api_key = "534187bd134d2b761d3fdd5716f80274";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_kay}`;
};

searchBtn.addEventListener('click', ()=> {
    checkWeather(inputBox.value);
});