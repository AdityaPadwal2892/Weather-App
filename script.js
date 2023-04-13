const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '77a9ea7e6cmshc872bc1796bf28ap1cadaejsn86faf082db93',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.comweather-by-api-ninjas.p.rapidapi.com'
	}
};



const getWeather = (city)=>{

cityName.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)


		cloud_pct.innerHTML=response.cloud_pct
		feels_like.innerHTML=response.feels_like
		temp.innerHTML=response.temp
		

		humidity.innerHTML=response.humidity
		

		max_temp.innerHTML=response.max_temp
		min_temp.innerHTML=response.min_temp
		sunrise.innerHTML=response.sunrise
		sunset.innerHTML=response.sunset
		wind_degrees.innerHTML=response.wind_degrees
		wind_speed.innerHTML=response.wind_speed
		

	})
	.catch(err => console.error(err));

}

submit.addEventListener("click",(e)=>
{
	e.preventDefault();
	getWeather(city.value)

})

getWeather("Delhi")

