const express = require('express');
const router = express.Router();

const services = require('./servicesData');

router.get('/', (req,res) => { 
    res.json({
        success: true,
        payload: {
            services: services
        },
        errors: [],
    });
    console.log('Retrieved Services'); 
});

module.exports = router;