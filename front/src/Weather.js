import React, { Component } from 'react';
const axios = require('axios');

class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          data: []
        };
      }

    componentDidMount(){
        axios.get("http://localhost:9000")
        .then(res => 
            this.setState({
                data : {
                    coord: res.coord,
                    weather: res.weather,
                    temp: res.main,
                    time: res.dt,
                    timezone: res.timezone,
                    sys: res.sys,
                    name: res.name
                },
                isLoaded: true,
                }
            )
        )
        .catch(error => 
            this.setState({
                isLoaded: true,
                error
            })
        )
    }

    render(){
        const { error, isLoaded, data} = this.state;
        if(error){
            return{

            }
        }

        else if(!isLoaded){
            return{

            }
        }

        else{
            return{

            }
        }

    }

}


//{
//     "coord":{"lon":126.95,"lat":37.5},
//     "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],
//     "base":"stations",
//     "main":{"temp":269.93,"feels_like":266.03,"temp_min":268.15,"temp_max":271.15,"pressure":1026,"humidity":58},
//     "visibility":10000,
//     "wind":{"speed":1.18,"deg":342},
//     "clouds":{"all":75},
//     "dt":1578965481,
//     "sys":{"type":1,"id":8117,"country":"KR","sunrise":1578955571,"sunset":1578990909},
//     "timezone":32400,
//     "id":6800035,
//     "name":"Banpobondong",
//     "cod":200
// }