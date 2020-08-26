/*===================================
|| 
|| Proxy to support CRA and Express servers and get past CORS for local dev.
|| 
===================================*/
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const EXPRESS_URL = process.env.EXPRESS_URL || 'http://localhost:5000'; // fallback to 5000 default

console.log('setupProxy allowing traffic to:', EXPRESS_URL);

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: EXPRESS_URL,
            changeOrigin: true
        })
    );
};