const express = require('express');
const router = express.Router();

const slides = require('./slidesData');

router.get('/', (req,res) => { 
    res.json({
        success: true,
        payload: {
            slides: slides
        },
        errors: [],
    });
    console.log('Retrieved Slides');
});

module.exports = router;