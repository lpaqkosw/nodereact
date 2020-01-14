const express = require('express');
const axios = require('axios');
var bodyParser = require('body-parser')
var cors = require('cors');
const app = express();
const port = 9000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.get('/', (req, res) => {
    var arr;
    axios.get('https://ipinfo.io/loc?token=815e4a609fdf39')
  .then(respo => {
    var str = respo.data;
    arr= str.split(",")
    arr[1] = arr[1].split("\n")[0];
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(typeof(arr));
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat='+arr[0]+'&lon='+arr[1]+'&appid=8f4c4287523a50f3cfbd74a108384224')
        .then(resp => {
            console.log(resp.data);
            res.send(resp.data);
        
        })
        .catch(error => {
            console.log(error);
          });
        })
    .catch(error => {
    console.log(error);
    });

    

    });

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))



//815e4a609fdf39

//8f4c4287523a50f3cfbd74a108384224