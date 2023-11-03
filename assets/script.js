var requestUrlCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather?q=';
var requestUrlFiveDay = 'https://api.openweathermap.org/data/2.5/forecast?q='
var ApiKey = '&appid=ba33442054f9de507b0968f397619ed5&units=imperial';
var searchCityButton = $('#searchBtn');
var searchInput = $('#city-input');
var currentCityHeader = $('.currentWeatherCity');
var currentWeatherConditions = $('ul');
var stringDate = dayjs();
var stringDate1 = stringDate.add(1, 'day');
var stringDate2 = stringDate.add(2, 'day');
var stringDate3 = stringDate.add(3, 'day');
var stringDate4 = stringDate.add(4, 'day');
var stringDate5 = stringDate.add(5, 'day');
var cityHistoryDisplayEl = $('#citySearchedList');
var cities = [];
var cityForm = $('#city-form');


console.log(stringDate.format("MM-DD-YYYY"))
console.log(stringDate5.format("MM-DD-YYYY"))


function getApiCurrentWeather(cityname) {
    $('#temp').html('');
    $('#wind').html('');
    $('#humidity').html('');
    var searchInput = $('#city-input');
    var cityName = searchInput.val() || cityname;
    console.log(cityname)
    fetch(requestUrlCurrentWeather + cityName + ApiKey)
    
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);
        // current weather data
            $(currentCityHeader).text("Currently in: " + data.name);

            $(".currentWeatherIcon").attr("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");

            $('#date').text('Date: ' + stringDate.format("MM-DD-YYYY"));

            $('#temp').append("Temperature: " + Math.floor(data.main.temp) + "°F");

            $('#wind').append("Wind: " + Math.floor(data.wind.speed) + " MPH");

            $('#humidity').append("Humidity: " + data.main.humidity + "%");

            getApiFiveDay(cityName);
        }
    )
}

function getApiFiveDay(cityname) {
    var searchInput = $('#city-input');
    var cityName = searchInput.val() || cityname;
    console.log(cityname);
    fetch(requestUrlFiveDay + cityName + ApiKey)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);
            // day 1 of 5 day forecast
            $(".day1WeatherIcon").attr("src", "https://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + "@2x.png");
            $('#day1').text("Date: " + stringDate1.format("MM-DD-YYYY"));
            $('#day1').append("<br>" + "Temperature: " + Math.floor(data.list[1].main.temp) + "°F");
            $('#day1').append("<br>" + "Wind: " + Math.floor(data.list[1].wind.speed) + " MPH");
            $('#day1').append("<br>" + "Humidity: " + data.list[1].main.humidity + "%");

            // day 2 of 5 day forecast
            $(".day2WeatherIcon").attr("src", "https://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + "@2x.png");
            $('#day2').text("Date: " + stringDate2.format("MM-DD-YYYY"));
            $('#day2').append("<br>" + "Temperature: " + Math.floor(data.list[2].main.temp) + "°F");
            $('#day2').append("<br>" + "Wind: " + Math.floor(data.list[2].wind.speed) + " MPH");
            $('#day2').append("<br>" + "Humidity: " + data.list[2].main.humidity + "%");

            // day 3 of 5 day forecast
            $(".day3WeatherIcon").attr("src", "https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + "@2x.png");
            $('#day3').text("Date: " + stringDate3.format("MM-DD-YYYY"));
            $('#day3').append("<br>" + "Temperature: " + Math.floor(data.list[3].main.temp) + "°F");
            $('#day3').append("<br>" + "Wind: " + Math.floor(data.list[3].wind.speed) + " MPH");
            $('#day3').append("<br>" + "Humidity: " + data.list[3].main.humidity + "%");

            // day 4 of 5 day forecast
            $(".day4WeatherIcon").attr("src", "https://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + "@2x.png");
            $('#day4').text("Date: " + stringDate4.format("MM-DD-YYYY"));
            $('#day4').append("<br>" + "Temperature: " + Math.floor(data.list[4].main.temp) + "°F");
            $('#day4').append("<br>" + "Wind: " + Math.floor(data.list[4].wind.speed) + " MPH");
            $('#day4').append("<br>" + "Humidity: " + data.list[4].main.humidity + "%");

            // day 5 of 5 day forecast
            $(".day5WeatherIcon").attr("src", "https://openweathermap.org/img/wn/" + data.list[5].weather[0].icon + "@2x.png");
            $('#day5').text("Date: " + stringDate5.format("MM-DD-YYYY"));
            $('#day5').append("<br>" + "Temperature: " + Math.floor(data.list[5].main.temp) + "°F");
            $('#day5').append("<br>" + "Wind: " + Math.floor(data.list[5].wind.speed) + " MPH");
            $('#day5').append("<br>" + "Humidity: " + data.list[5].main.humidity + "%");
        }
    )
}





if(localStorage.getItem('citySearch')) {
    cities = JSON.parse(localStorage.getItem('citySearch'));
    console.log(cities);
    printCityHistory();
}

function printCityHistory() {
    cityHistoryDisplayEl.html('');
    for (var i = 0; i < cities.length; i++) {
        city = cities[i];
        console.log(city);
        var listEl = $('<li>');
        var listBtns = $('<button>');
        listBtns.attr("data-city", city);
        listBtns.attr("class", "button");
        listBtns.text(city);
        cityHistoryDisplayEl.append(listEl);  
        listEl.append(listBtns);
    }
  }

  function captureCityName(event){
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    // getApiCurrentWeather(searchInput.val());
    cities.push(searchInput.val());
    if (cities.length > 5){
        cities.shift();
    }
    localStorage.setItem('citySearch', JSON.stringify(cities));
    printCityHistory();
  }

  
  cityForm.on("click", "button", captureCityName);

  function handleButtonClick(event){
    event.preventDefault();
    console.log(this);
    var cityName = this.getAttribute("data-city");
    console.log(cityName);
      getApiCurrentWeather(cityName);
    }


searchCityButton.on("click", getApiCurrentWeather);

cityHistoryDisplayEl.on("click", "button", handleButtonClick)
