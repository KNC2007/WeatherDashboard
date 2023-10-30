var requestUrlCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather?q=';
var requestUrlFiveDay = 'https://api.openweathermap.org/data/2.5/forecast?q='
var ApiKey = '&appid=ba33442054f9de507b0968f397619ed5&units=imperial';
var searchCityButton = $('#searchBtn');
var searchInput = $('#city-input');
var currentCityHeader = $('.currentWeatherCity');
var currentWeatherConditions = $('ul');
let stringDate = dayjs().format('M/D/YYYY');

console.log(stringDate)

// searchInput.value


function getApiCurrentWeather() {
    fetch(requestUrlCurrentWeather + 'Philadelphia' + ApiKey)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);
        // for (let i = 0; i < data.length; index++) {
            $(currentCityHeader).text("Currently in: " + data.name);
            // currentCityHeader.appendChild(createCityHeader);

            $(currentCityHeader).img("https://openweathermap.org/img/wn/" + data.weather[0].icon + "2x.png")

            $('#date').text('Date: ' + stringDate);

            $('#temp').append(Math.floor(data.main.temp) + "°F");
            // currentWeatherConditions.appendChild(listItemCurrentTemp);

            $('#wind').append(Math.floor(data.wind.speed) + " MPH");
            // currentWeatherConditions.appendChild(listItemCurrentWind);

            $('#humidity').append(data.main.humidity + "%");
            // currentWeatherConditions.appendChild(listItemCurrentHumidity);
        }
    // }
    )
}

function getApiFiveDay() {
    fetch(requestUrlFiveDay + 'Philadelphia' + ApiKey)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);
        // for (let i = 0; i < data.length; index++) {
            // day 1 of 5 day forecast
            $('#day1').text(data.list[1].dt_txt);
            $('#day1').append(Math.floor(data.list[1].main.temp) + "°F");
            $('#day1').append(Math.floor(data.list[1].wind.speed) + " MPH");
            $('#day1').append(data.list[1].main.humidity + "%");

            // day 2 of 5 day forecast
            $('#day2').text(data.list[2].dt_txt);
            $('#day2').append(Math.floor(data.list[2].main.temp) + "°F");
            $('#day2').append(Math.floor(data.list[2].wind.speed) + " MPH");
            $('#day2').append(data.list[2].main.humidity + "%");

            // day 3 of 5 day forecast
            $('#day3').text(data.list[3].dt_txt);
            $('#day3').append(Math.floor(data.list[3].main.temp) + "°F");
            $('#day3').append(Math.floor(data.list[3].wind.speed) + " MPH");
            $('#day3').append(data.list[3].main.humidity + "%");

            // day 4 of 5 day forecast
            $('#day4').text(data.list[4].dt_txt);
            $('#day4').append(Math.floor(data.list[4].main.temp) + "°F");
            $('#day4').append(Math.floor(data.list[4].wind.speed) + " MPH");
            $('#day4').append(data.list[4].main.humidity + "%");

            // day 5 of 5 day forecast
            $('#day5').text(data.list[5].dt_txt);
            $('#day5').append(Math.floor(data.list[5].main.temp) + "°F");
            $('#day5').append(Math.floor(data.list[5].wind.speed) + " MPH");
            $('#day5').append(data.list[5].main.humidity + "%");
        }
    )
}

getApiCurrentWeather()
getApiFiveDay()
// $(searchCityButton).onclick = getApi;