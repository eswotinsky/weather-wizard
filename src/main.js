import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(function(){
  $('#weatherLocation').click(function() {
      let city = $('#location').val();
      $('#location').val("");
      $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          $('#errors').hide();
          $('#results').show();
          $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
          $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
        },
        error: function() {
          $('#results').hide();
          $('#errors').show();
          $('#errors').text("There was an error processing your request. Please try again.")
        }
      });
    });
});
