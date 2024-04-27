const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temprature = document.querySelector('.temprature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');


async function checkWeather(city) {
    const api_key = "534187bd134d2b761d3fdd5716f80274";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("Error");
        return;
    } else (weather_data.cod === `200`); {
        weather_body.style.display = "flex";
        location_not_found.style.display = "none";
    }

    temprature.innerHTML = `${Math.round (weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${Math.round (weather_data.wind.speed)}Km/h`;

    switch (weather_data.weather[0].main) {
        case "Clouds" :
            weather_img.src = "assets/cloud.png"
        break;
        case "Clear" : 
            weather_img.src = "assets/clear.png"
        break;
        case "Rain" :
            weather_img.src = "assets/rain.png"
        break;
        case "Mist" :
            weather_img.src = "assets/mist.png"
        break;
        case "Snow" :
            weather_img.src = "assets/snow.png"
        break;
        case "Fog" :
            weather_img.src = "assets/fog.png"
        break;
        case "Overcast" :
            weather_img.src = "assets/cloudy.png"
        break;
        case "Smoke" :
            weather_img.src = "assets/smoke.png"
        break;
        case "Haze" :
            weather_img.src = "assets/haze.png"
        break;
    }
};

searchBtn.addEventListener('click', ()=> {
    checkWeather(inputBox.value);
});