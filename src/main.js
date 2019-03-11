import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function(){
  $('#submitButton').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('#error').hide();
        $('#results').show();
        $('#city-name').text(`Weather forecast for ${response.name}`);
        $('#humidity').text(`${response.main.humidity}% humidity`);
        $('#tempCelsius').text(`${(response.main.temp - 273.15).toFixed(0)}°C`);
        $('#tempFahrenheit').text(`${(((response.main.temp - 273.15) * 1.8) + 32).toFixed(0)}°F`);
      },
      error: function() {
        $('#results').hide();
        $('#error').show();
        $('#error').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
