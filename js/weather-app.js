const apiKey = "e62a70c5f0f52a2e1ae9ca2f6a802633";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtb = document.querySelector('.search button');

const weaterIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        let data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

        if (data.weather[0].main == 'Clouds') {
            weaterIcon.src = '/img/weather-app/clouds.png';
        }
        else if (data.weather[0].main == 'Clear') {
            weaterIcon.src = '/img/weather-app/clear.png';
        }
        else if (data.weather[0].main == 'Rain') {
            weaterIcon.src = '/img/weather-app/rain.png';
        }
        else if (data.weather[0].main == 'Drizzle') {
            weaterIcon.src = '/img/weather-app/drizzle.png';
        }
        else if (data.weather[0].main == 'Mist') {
            weaterIcon.src = '/img/weather-app/mist.png';
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }

}

searchBtb.addEventListener('click', () => {
    checkWeather(searchBox.value);
});