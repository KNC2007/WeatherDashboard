var requestUrlCurrentWeather = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=ba33442054f9de507b0968f397619ed5';
var searchCityButton = 
var tableBody = document.getElementById('repo-table');





function getApi() {
    fetch(requestUrlCurrentWeather)
    .then(function (response) {
     return response.json()   ;
    })
    .then(function (data){
        console.log(data)
        for (let i = 0; i < data.length; index++) {
            var createCityHeader = document.createElement('h3');
            createCityHeader.appendChild()

            
            
        }

    }
    
    )
}