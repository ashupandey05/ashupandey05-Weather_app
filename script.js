// let promise = fetch("http://api.weatherapi.com/v1/current.json?key=dbe36d3837084b42b2565906231302&q=Noida+Indiaaqi=no");
// promise.then((response) =>{
//     console.log(response.status)
//     console.log(response.ok)
//     return response.json()
// }).then((value2) => {
//     console.log(value2)
// })
let submit = document.getElementById("submit");
let citySearch = document.getElementById("citySearch");
let countrySearch = document.getElementById("countrySearch");
let cityname = document.getElementById("city");
let countryname = document.getElementById("country")
const getWeather = (city, country) =>{
    cityname.innerHTML = city;
    countryname.innerHTML = country;

    let promise1 = fetch("http://api.weatherapi.com/v1/forecast.json?key=dbe36d3837084b42b2565906231302&q="+city+"+"+country+"&days=6&aqi=no");
    promise1.then((response) => {
        console.log(response.status)
        console.log(response.ok)
        return response.json()
    }).then((value2) => {
        console.log(value2);
        document.getElementById("temp1").innerHTML = value2.current.temp_c;
        document.getElementById("feel-like1").innerHTML = value2.current.feelslike_c;
        document.getElementById("sunrise1").innerHTML = value2.forecast.forecastday[0].astro.sunrise;
        document.getElementById("sunset1").innerHTML = value2.forecast.forecastday[0].astro.sunset;
        document.getElementById("pressure1").innerHTML = value2.current.pressure_in;
        document.getElementById("rain1").innerHTML = value2.current.vis_miles;
        document.getElementById("wind1").innerHTML = value2.current.wind_kph;
        document.getElementById("wind1dir").innerHTML = value2.current.wind_dir;
        document.getElementById("humditiy1").innerHTML = value2.current.humidity;
        document.getElementById("b0").innerHTML = value2.forecast.forecastday[0].hour[0].temp_c;
        document.getElementById("b1").innerHTML = value2.forecast.forecastday[0].hour[6].temp_c;
        document.getElementById("b2").innerHTML = value2.forecast.forecastday[0].hour[10].temp_c;
        document.getElementById("b3").innerHTML = value2.forecast.forecastday[0].hour[14].temp_c;
        document.getElementById("b4").innerHTML = value2.forecast.forecastday[0].hour[18].temp_c;
        document.getElementById("b5").innerHTML = value2.forecast.forecastday[0].hour[22].temp_c;
        document.getElementById("l-heading1").innerHTML = value2.forecast.forecastday[1].date;
        document.getElementById("l-heading2").innerHTML = value2.forecast.forecastday[2].date;
        document.getElementById("l-heading3").innerHTML = value2.forecast.forecastday[3].date;
        document.getElementById("l-heading4").innerHTML = value2.forecast.forecastday[4].date;
        document.getElementById("l-heading5").innerHTML = value2.forecast.forecastday[5].date;
        document.getElementById("c1").innerHTML = value2.forecast.forecastday[1].day.mintemp_c;
        document.getElementById("c2").innerHTML = value2.forecast.forecastday[2].day.mintemp_c;
        document.getElementById("c3").innerHTML = value2.forecast.forecastday[3].day.mintemp_c;
        document.getElementById("c4").innerHTML = value2.forecast.forecastday[4].day.mintemp_c;
        document.getElementById("c5").innerHTML = value2.forecast.forecastday[5].day.mintemp_c;
        document.getElementById("d1").innerHTML = value2.forecast.forecastday[1].day.maxtemp_c;
        document.getElementById("d2").innerHTML = value2.forecast.forecastday[2].day.maxtemp_c;
        document.getElementById("d3").innerHTML = value2.forecast.forecastday[3].day.maxtemp_c;
        document.getElementById("d4").innerHTML = value2.forecast.forecastday[4].day.maxtemp_c;
        document.getElementById("d5").innerHTML = value2.forecast.forecastday[5].day.maxtemp_c;

        
    })
}

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    getWeather(citySearch.value, countrySearch.value);
})
getWeather("Delhi", "India");
