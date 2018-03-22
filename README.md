# Weather Wizard

A simple interface to retrieve city-specific weather data, sourced through the OpenWeatherMap API, in real-time.

## Setup

1. [Install Node.js and npm](https://www.npmjs.com/get-npm), if not already present in your local environment.
2. Clone this repository.
3. Register a free account at [OpenWeatherMap.org](http://www.openweathermap.org) and retrieve a key from your [API keys page](https://home.openweathermap.org/api_keys).
4. In the root directory of the project folder, create a new file with the name *.env* and save the following text in it:

  ```API_KEY=your_api_key ```

  replacing "your_api_key" with your unique key from OpenWeatherMap.
5. Within your preferred shell, navigate to the project folder and run the following:

  ```npm install```
(this may take a moment to complete)

  ```npm run start```


### Technologies Used

* [OpenWeatherMap](http://www.openweathermap.org) - meteorological-data API
* [Webpack](https://github.com/webpack/webpack) - JavaScript bundler
* [jQuery](https://github.com/jquery/jquery) - JavaScript library
* [Bootstrap](https://github.com/twbs/bootstrap) - Responsive design framework for HTML/CSS/JavaScript

This project was built using [Atom](https://atom.io/) - an open-source, hackable code editor running on the Electron framework.

### Support and Contact Details
If you encounter any bugs or would like to make suggestions regarding this project, please feel free to open an issue within the repository.


### License

This project is distributed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

Copyright © 2018 [Eric Swotinsky](https://github.com/eswotinsky).
Last updated 3/22/2018.
