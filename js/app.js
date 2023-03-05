const form = document.querySelector('[data-js = "change-location"]');
const cityNameContainer = document.querySelector('[data-js=city-name]');
const cityWeatherContainer = document.querySelector('[data-js=city-weather]');
const cityTemperatureContainer = document.querySelector('[data-js=city-temperature]');
let cardContainer = document.querySelector('[data-js=city-card]');
const imgContainer = document.querySelector('[data-js= "time"]');
const iconContainer = document.querySelector('[data-js="time-icon"]');

const dayOrNight = (boolean)=> boolean ? 
imgContainer.src='./src/day.svg' : imgContainer.src='./src/night.svg';

const showContainerCard=()=>{
    if(cardContainer.classList.contains('d-none')) 
        cardContainer.classList.remove('d-none');
}
const getTimeIcon = (WeatherIcon) =>`<img src="./src/icons/${WeatherIcon}.svg"/>`;

const iconInsert=(timeIcon)=> iconContainer.innerHTML = timeIcon;

const nameCityInsert=(nameCity)=> cityNameContainer.textContent = nameCity;

const weatherInsert=(weather)=> cityWeatherContainer.textContent = weather;

const temperatureInsert=(temperature)=> cityTemperatureContainer.textContent = temperature;

form.addEventListener('submit', async event=>{
    event.preventDefault();

    const cityName = event.target.city.value;
    const cityData = await getDataCity(cityName);

    //Pegar Dados De City
    const [{Key, LocalizedName}] = cityData;

    //Pegar Dados Do Clima De Uma Cidade 
    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getDataWeatherCity(Key);

    //Obter Icon Correspondente
    const timeIcon = getTimeIcon(WeatherIcon);

    //mostrarCard
    showContainerCard();

    //Inserir Valores No Container
    dayOrNight(IsDayTime);
    iconInsert(timeIcon);
    nameCityInsert(LocalizedName);
    weatherInsert(WeatherText);
    temperatureInsert(Temperature.Metric.Value);

    //Resetar Formulário
    form.reset();
})