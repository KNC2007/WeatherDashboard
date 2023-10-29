var requestUrlCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather?q=';
var ApiKey = '&appid=ba33442054f9de507b0968f397619ed5&units=imperial';
var searchCityButton = $('#searchBtn');
var searchInput = $('#city-input');
var currentCityHeader = $('.currentWeatherCity');
var currentWeatherConditions = $('ul');


// searchInput.Value



function getApi() {
    fetch(requestUrlCurrentWeather + 'Tampa' + ApiKey)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);
        // for (let i = 0; i < data.length; index++) {
            $(currentCityHeader).text("Currently in: " + data.name);
            // currentCityHeader.appendChild(createCityHeader);

            $('ul').append(Math.floor(data.main.temp) + "°F");
            // currentWeatherConditions.appendChild(listItemCurrentTemp);

            $('ul').append(Math.floor(data.wind.speed) + " MPH");
            // currentWeatherConditions.appendChild(listItemCurrentWind);

            $('ul').append(data.main.humidity + "%");
            // currentWeatherConditions.appendChild(listItemCurrentHumidity);
        }
    // }
    )
}

getApi()
// $(searchCityButton).onclick = getApi;