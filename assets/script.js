var requestUrlCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather?q=';
var ApiKey = '&appid=ba33442054f9de507b0968f397619ed5&units=imperial';
var searchCityButton = $('.btn');
var searchInput = $('#city-input');
var currentCityHeader = $('.currentWeatherCity');
var currentWeatherConditions = $('ul');






function getApi() {
    fetch(requestUrlCurrentWeather + searchInput.value + ApiKey)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);
        for (let i = 0; i < data.length; index++) {
            var createCityHeader = document.createElement('h3');
            createCityHeader.text(data[i].name);
            currentCityHeader.appendChild(createCityHeader);

            var listItemCurrent = $('li').text(Math.floor(data[i].main.temp) + "°F");
            currentWeatherConditions.appendChild(listItemCurrent);

            
            
        }

    }
    
    )
}

searchCityButton.addEventListener('click', getApi());