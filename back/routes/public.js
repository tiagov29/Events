const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    console.log('Peticion Get a /');
    res.send('Hi since public!!')
})

module.exports = router