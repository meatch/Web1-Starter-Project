const express = require('express');
const router = express.Router();

const staff = require('./staffData.js');
router.get('/', (req,res) => { 
    res.json({
        success: true,
        payload: {
            staff: staff
        },
        errors: [],
    });
    console.log('Retrieved Staff'); 
});

module.exports = router;