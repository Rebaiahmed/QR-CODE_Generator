const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const Grid = require('gridfs-stream');
const fs = require('fs') ;
var qr = require('qr-image');
var bodyParser = require('body-parser')
const app = express();
var qr = require('qr-image');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/multimedia_database');




//****************Define our shema */


var UserSchema = mongoose.Schema({
  nom: String,
  cin : String,
  num : String,
  birthday : String,
  type_sang : String,
img: { data: Buffer, contentType: String }
});

var User = mongoose.model('User', UserSchema);





// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(cors());
app.use(function(req, res, next) {
  console.log("hi hi");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, '.', 'public', 'index.html'));
  res.send("ok ok")
});




app.get('/User?id', (req, res) => {

  var id = req.params.id ;



  res.send("ok ok")
});



//**********************************************//


app.post('/QR', (req, res) => {



var nom = req.body.nom ;
var cin = req.body.cin ;
var type_sang = req.body.type_sang ;
var num = req.body.num ;
var birthday = req.body.birthday;
//path of QR code ****************//

var imgPath = './public/images/';

var user = new User({
  nom : nom ,
  cin : cin ,
  type_sang : type_sang,
  num : num,
})

//*********prepare about the images*************

var text ='User cin' + user.cin + 'type sang' + user.type_sang 
+ 'num' + user.num + 'uer nom' + user.nom ;


var qr_svg = qr.image(text, { type: 'png' });

var img_name = qr_svg.pipe(require('fs').createWriteStream('./public/images/' +user.num + '.png'));



fs.readFile(img_name.path, "utf8", function(err, data) {
       if (err) console.log("error");;
       user.img.data = fs.readFileSync(img_name.path).toString('utf-8');

       //console.log("data " + fs.readFileSync(''+ path+'').toString('utf-8'));
       user.img.contentType = 'image/png';

//*******************************//

//***********save data */


user.save(function (err, user) {
  if (err) return console.error(err);



  //*****GENREATE QR CODE */



});





   });











res.status(200).json({'user':user});

})






//***********************************************//

app.get('/users', function (req,res) {


var id = req.body.id ;
 User.findById('5a7b08a6678dcf2422dbf3e2', function(err, result){

if (err) throw (err);

//********get the result******************//
 var thumb = new Buffer(result.img.data).toString('base64');
 console.log("thumb" + thumb);
res.json({'img': thumb})

})



})












const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
