const form = document.querySelector('[data-js = "change-location"]');
const cityNameContainer = document.querySelector('[data-js=city-name]');
const cityWeatherContainer = document.querySelector('[data-js=city-weather]');
const cityTemperatureContainer = document.querySelector('[data-js=city-temperature]');
const cardContainer = document.querySelector('[data-js=city-card]');
const imgContainer = document.querySelector('[data-js= "time"]');
const iconContainer = document.querySelector('[data-js="time-icon"]');

form.addEventListener('submit', async event=>{
    event.preventDefault();

    const cityName = event.target.city.value;
    const cityData = await getDataCity(cityName);
    const [{Key, LocalizedName}] = cityData;
    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getDataWeatherCity(Key);
    
    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"/>`;

    if(cardContainer.classList.contains('d-none')){
        cardContainer.classList.remove('d-none');
    }

    IsDayTime ? imgContainer.src='./src/day.svg' : imgContainer.src='./src/night.svg';

    iconContainer.innerHTML = timeIcon;
    cityNameContainer.textContent = LocalizedName;
    cityWeatherContainer.textContent = WeatherText;
    cityTemperatureContainer.textContent = Temperature.Metric.Value;

    form.reset();
})