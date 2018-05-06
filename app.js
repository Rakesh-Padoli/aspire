var express =require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var cors=require('cors');
var path=require('path');
var http=require('http');

var api = require('./routes/login');

var app=express();
app.use(express.static(path.join(__dirname,'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api',api);
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
  });
  var port=process.env.PORT || '80';
  app.set('port',port);

  app.listen(port,function(){
    console.log('server is running....');
  })

  //connect to mongodb
mongoose.connect('mongodb://192.168.0.109:27017/mean');
//on connection
mongoose.connection.on('connected',()=>{
  console.log('conected to the mongodb database over27017');
});
mongoose.connection.on('error',(err)=>{
  if(err)
  {
    console.log('Error in database connection: '+err);
  }
});

  //var server=http.createServer(app);
  //server.listen(port,()=>console.log("server is running....."));

