require('dotenv').config();

const { response } = require('express');
const express = require('express');

const port = process.env.PORT || 3002;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('./weather', (request, response) => {
    let cityName = request.query.cityName;
    let lon = request.query.lon;
    let lat = request.query.lat;

    // console.log(`${cityName}: lon is ${lon}, lat is ${lat}`);
    const city = weather.find(city => city.city_name.toLowerCase() ===cityName.toLowerCase());
    console.log(city)

    try{
        const weatherArray = city.data.map(day => new Forecast(day));
        response.status(200).send(weatherArray); //puts weather of a certain day in an array then sends to user
    } catch (error) {
      res.status(500).send(error)  
    }
})

class Forecast {
    constructor(day){
        this.date = day.valid_date
    }
}






app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

//API in cutrick's App.js of city-explorer-api