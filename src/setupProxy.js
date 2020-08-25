/*===================================
|| 
|| Proxy to support CRA and Express servers and get past CORS for local dev.
|| 
===================================*/
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const EXPRESS_PORT = process.env.EXPRESS_PORT || 5000; // fallback to 5000 default

console.log('setupProxy working with EXPRESS_PORT', EXPRESS_PORT);

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: `http://localhost:${EXPRESS_PORT}`,
            changeOrigin: true
        })
    );
};