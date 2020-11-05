const express = require('express');
const router = express.Router();

router.post('/send', (req,res) => {
    console.log('Post Sent Email');
    res.json({
        success: true,
        payload: {
            postedProps: req.body
        },
        errors: [],
    });
});

module.exports = router;