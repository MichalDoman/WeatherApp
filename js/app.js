import config from '/.config.js';

const container = document.querySelector('section.container');
const addCityBtn = document.querySelector('#add-city')
const formTemplate = document.querySelector('.module__form')
const moduleTemplate = document.querySelector('.module__weather')

const getForecastDay = (currentDate) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(currentDate);
    const dayIndex = date.getDay();

    return daysOfWeek[dayIndex];
}

const getDayConditionIcon = async (code) => {
    try {
        const response = await fetch("../weather_conditions.json")
        const weatherConditions = await response.json();
        const conditionItem = weatherConditions.find((item) => item.code === code);

        return conditionItem.icon;
    } catch (error) {
        console.log(error);
    }
}

const createModule = async function (APIKey, city="auto:ip") {
    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${city}&days=5
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
            const dayName = getForecastDay(day.date);
            const avgTemp = day.day.avgtemp_c;
            const icon =  await getDayConditionIcon(day.day.condition.code)

            const newLi = document.createElement('li')
            newLi.innerHTML = `
                <li>
                  <span class="day">${dayName}</span> <img src="assets/icons/${icon}"/>
                  <span class="temperature"><span class="temperature__value">${avgTemp}</span>&deg;C</span>
                </li>
            `

            forecastList.append(newLi);
        }

        // Add events for buttons:
        const closeBtn = module.querySelector('.btn--close');
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.closest('.module__weather').remove();
        })

        // Update HTML:
        container.append(module);

    } catch (error) {
        console.log(error);
    }
}

const getFormModule = () => {
    const formModule = formTemplate.cloneNode(true);
    formModule.removeAttribute('hidden');
    addCityBtn.disabled = true;

    // Close button functionality:
    const closeBtn = formModule.querySelector('.btn--close');
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.closest('.module__form').remove();
        addCityBtn.disabled = false;
    });

    // Submit button functionality
    const submitBtn = formModule.querySelector('form button');
    const input = formModule.querySelector('input');

    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            await createModule(config.WeatherAPIKey, input.value);
            closeBtn.click()
        } catch (error) {
            alert("Wrong city name!")
        }

    })

    container.prepend(formModule);
}

const main = async () => {
    addCityBtn.addEventListener('click', (e) => {
        e.preventDefault();
        getFormModule();
    })

    await createModule(config.WeatherAPIKey);
}

await main();
