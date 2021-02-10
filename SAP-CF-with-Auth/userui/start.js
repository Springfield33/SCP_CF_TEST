/* eslint-env es6 */

/* eslint-disable no-console */

const express = require('express');
const passport = require('passport');
const xsenv = require('@sap/xsenv');
const JWTStrategy = require('@sap/xssec').JWTStrategy;



const app = express();


// require('./routes/routes.js')(app);

// app.use(express.static(__dirname + '/webapp'));  
console.log('navigation added');

const services = xsenv.getServices({ uaa:'uaa_UI5user' });

passport.use(new JWTStrategy(services.uaa));

app.use(passport.initialize());
app.use(passport.authenticate('JWT', { session: false }));


app.get('/', function (req, res, next) { 
  var user = req.user;
  console.log('req' + JSON.stringify(req.user));
  
  // app.use(express.static(__dirname + '/webapp'));  
  res.send(req.user.id);

});



// app.get('/SevenWonders', function(req, res) {
//   var items = [{name:'saurabh', location:'bangalore'}];
//   res.send(items);
// });




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("app listening on port ' + port);
});