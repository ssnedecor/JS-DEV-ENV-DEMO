var express = require('express');
var path = require('path');
var open = require('open');

//add bundler webpack
import webpack from 'webpack';
import config from '../webpack.config.dev';

// eslint-disable no-console // 


//ES5 native node
//var port = 3000;
//var app = express();


//ES6 requires Babel
const port = 3000;
const app = express();

//webpack stuff
const compiler = webpack(config);

app.use ( require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err); // eslint-disable-line no-console
  } else {
    open('http://localhost:' + port);
  }
});
