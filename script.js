const cityInput = document.getElementById('search-input').value
const search = document.getElementById('search-button')

const url = `https://weather-api99.p.rapidapi.com/weather?city=london`
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '[YOUR_API_KEY]',
		'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
	}
};

const main = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const city = document.getElementById('city-name')
        const temp = document.getElementById('temp')
        const minTemp = document.getElementById('min-temp')
        const maxTemp = document.getElementById('max-temp')
        const description = document.getElementById('weather-description')
        city.innerText = `${result.name}`
        temp.innerText = `${(result.main.temp-273).toFixed(2)}°C`
        minTemp.innerText = `Min: ${(result.main.temp_min-273).toFixed(2)}°C`
        maxTemp.innerText = `Max: ${(result.main.temp_max-273).toFixed(2)}°C`
        description.innerText = `${result.weather[0].description}`
        console.log(result);
    } catch (error) {
        console.error(error);
    }    
}

main()

