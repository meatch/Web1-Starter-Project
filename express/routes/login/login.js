const express = require('express');
const router = express.Router();

const profile = {
    'first': 'John',
    'last': 'Smith',
    'email': 'user@domain.com',
}

router.post('/validate', (req,res) => {
    res.json({
        success: true,
        payload: {
            profile: profile,
            postedProps: req.body
        },
        errors: [],
    });
});

module.exports = router;