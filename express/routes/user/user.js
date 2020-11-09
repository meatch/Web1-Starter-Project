const express = require('express');
const router = express.Router();

const profile = {
    'first': 'John',
    'last': 'Smith',
    'email': 'user@domain.com',
}

router.post('/login', (req,res) => {
    res.json({
        success: true,
        payload: {
            user: profile,
            postedProps: req.body
        },
        message: 'User located, you may proceed.',
    });
});

module.exports = router;