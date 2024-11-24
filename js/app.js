import config from '/.config.js';

const container = document.querySelector('section.container');
const moduleTemplate = document.querySelector('.module__weather')

const getForecastDay = (currentDate) => {
    const daysOfWeek = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    const date = new Date(currentDate);
    const dayIndex = date.getDay();

    return daysOfWeek[dayIndex];
}

const getDayConditionIcon = (code) => {

}

const createModule = async function (APIKey) {
    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=auto:ip&days=5
        `);
        const data = await response.json();
        console.log(data);

        const module = moduleTemplate.cloneNode(true);
        module.removeAttribute('hidden')

        // Get necessary elements:
        const cityNameLabel = module.querySelector('.city__name');
        const temperatureLabel = module.querySelector('.temperature__value');
        const pressureLabel = module.querySelector('.pressure__value');
        const humidityLabel = module.querySelector('.humidity__value');
        const windSpeedLabel = module.querySelector('.wind-speed__value');
        const forecastList = module.querySelector('ul.weather__forecast');

        // Show API data:
        cityNameLabel.innerText = data.location.name
        temperatureLabel.innerText = data.current.temp_c
        pressureLabel.innerText = data.current.pressure_mb + " hPa"
        humidityLabel.innerText = data.current.humidity + "%"
        windSpeedLabel.innerText = data.current.wind_kph + " kph"

        // Forecast:
        const forecastDays = data.forecast.forecastday
        for ( let i = 0; i < forecastDays.length; i++) {
            const day = forecastDays[i];
            console.log(day.day.condition.text)
            const dayName = getForecastDay(day.date);
            const avgTemp = day.day.avgtemp_c;

            const newLi = document.createElement('li')
            newLi.innerHTML = `
                <li>
                  <span class="day">${dayName}</span> <img src="assets/icons/fog.svg"/>
                  <span class="temperature"><span class="temperature__value">${avgTemp}</span>&deg;C</span>
                </li>
            `

            forecastList.append(newLi);
        }

        // Update HTML:
        container.append(module);

    } catch (error) {
        console.log(error);
    }

}

createModule(config.WeatherAPIKey);
