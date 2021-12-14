const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

//add headers before the routes are defined
app.use(cors());

// parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', function (req, res){
    console.log('new request GET to /');
    res.send('Hola desde el back!!!');
});

app.post('/sign-up', function(req,res){
    console.log("New request POST to /sign-up");

    console.log(req.body)

    const token = "hfdasjfefee23423fewfrw24234"

    let data = {
        'success': true,
        'message': `User ${req.body.email} registered correctly`,
        'token': token,
        'data': req.body
    }

    res.json(data);
});

app.listen(port, function(){
    console.log(`app running from port: ${port}`)
})