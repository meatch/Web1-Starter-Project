const express = require('express');
const router = express.Router();

const slides = require('./slidesData');

router.get('/', (req,res) => { 
    res.json(slides);
    console.log('Retrieved Slides');
});

module.exports = router;