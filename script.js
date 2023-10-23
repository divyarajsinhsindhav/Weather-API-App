const cityInput = document.getElementById('search-input')
const search = document.getElementById('search-button')
const city = document.getElementById('city-name')
const temp = document.getElementById('temp')
const minTemp = document.getElementById('min-temp')
const maxTemp = document.getElementById('max-temp')
const description = document.getElementById('weather-description')

const url = 'https://open-weather13.p.rapidapi.com/city/rajkot';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '[YOUR-API_KEY]',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};


const main = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        city.innerText = `${result.name}`
        temp.innerText = `${result.main.temp}°F`
        minTemp.innerText = `Min: ${result.main.temp_min}°F`
        maxTemp.innerText = `Max: ${result.main.temp_max}°F`
        description.innerText = `${result.weather[0].description}`
        console.log(result);
    } catch (error) {
        console.error(error);
    }    
}

main()
