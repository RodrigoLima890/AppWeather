const apiKey = "cgAGSfxSLlYaMvUwL2MQvxPpd8BIMy4s";
const baseUrl = "http://dataservice.accuweather.com/"

const getCityUrl = (cityName) =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`;

const getWeatherUrl = (cityKey) =>
  `${baseUrl}currentconditions/v1/${cityKey}?apikey=${apiKey}&language=pt-br`;

const request = async (requestUrl) => {
  try {
    const response = await fetch(requestUrl);

    if (!response.ok) {
      throw new Error("Ocorreu um erro");
    }
    
    return response.json();
  
  } catch ({ name, menssage }) {
    alert(`${name}: ${menssage}`);
  }
};

const getDataCity = (cityName) => request(getCityUrl(cityName));

const getDataWeatherCity = async (key) => request(getWeatherUrl(key));
