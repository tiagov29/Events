const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const passport = require('passport');
const public_routes = require('./routes/public')
const auth_routes = require('./routes/auth')
require('./services')
//add headers before the routes are defined
app.use(cors());
app.use(passport.initialize());

// parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(public_routes);
app.use(auth_routes);

app.listen(port, function(){
    console.log(`app running from port: ${port}`)
})