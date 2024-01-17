require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

let port = process.env.PORT;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader( 'Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type');
  next();
});
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router);
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
console.log(process.env.MONGO_URI)
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {

    useNewUrlParser: true, 
    useUnifiedTopology: true,
    // useFindAndModify: false
    
    }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });
    
    
app.listen(port, () => {
      console.log("Server is running at port ",port);
    });

//     const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'tek-shop@mail.ru', // Change to your recipient
//   from: 'win21g@email.cz', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   }) 
// var request = require("request-json");
// var url = require("url");

// var TILL_URL = url.parse(process.env.TILL_URL);
// var TILL_BASE = TILL_URL.protocol + "//" + TILL_URL.host;
// var TILL_PATH = TILL_URL.pathname;

// if(TILL_URL.query != null) {
//   TILL_PATH += "?"+TILL_URL.query;
// }

// request.createClient(TILL_BASE).post(TILL_PATH, {
//   "phone": ["420732565426"],
//   "questions": [{
//   "text": "Favorite color?",
//     "tag": "favorite_color",
//     "responses": ["Red", "Green", "Yellow"],
//     "webhook": "https://mean-ionic-shop.herokuapp.com/results/"
//   }],
//   "conclusion": "Thank you for your time"
// }, function(err, res, body) {
//   return console.log(res.statusCode,err);
// });