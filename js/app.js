import config from '/.config.js';

const fetchWeatherAPI = async function (APIKey) {
    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=auto:ip&days=5
    `);
        const data = await response.json();
        console.log(data);


    } catch (error) {
        console.log(error);
    }

}

fetchWeatherAPI(config.WeatherAPIKey);
