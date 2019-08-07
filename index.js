const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const movies = require('./routes/movies');
const cast = require('./routes/cast');
const actors = require('./routes/actors');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/',(req,res)=>{
    res.status(200).send('HELLO THERE')
})

app.use('/actor',actors);


const port = process.env.PORT || 3100;
const server = http.createServer(app);
server.listen(port);