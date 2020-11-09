/*===================================
|| 
|| NodeJS Server with Express Framework
|| 
===================================*/
/*---------------------------
| Environment Vars
---------------------------*/
require('dotenv').config();

/*---------------------------
| Resources
---------------------------*/
const path = require('path');
// require('dotenv').config({ path: './.env.local' });
const express = require('express');
const session = require('express-session');

/*---------------------------
| Initiaize Instance of Express as app
---------------------------*/
const app = express();

/*---------------------------
| Express specific
---------------------------*/
app.use(express.json()); // JSON support for request response
app.use(session({ secret: 'Shhh. This is private and required to initialize session' })); // Server Session support user access.

/*---------------------------
| Serve the static files from the React app
---------------------------*/
app.use(express.static(path.join(__dirname, 'build')));

/*---------------------------
| !IMPORTANT :: Should not be done in Production
| Bypassing CORS so Node Express can be on NODE_PORT 5000 and react can be on 3000
---------------------------*/
if (process.env.NODE_ENV === 'local') {
    console.log('Bypassing CORS for Local Development.');
    app.use((request, response, next) => {
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Headers", "Content-Type");
        next();
    });
}

/*---------------------------
| Route Collections
---------------------------*/
const routes = require('./express/routes/index.js');
app.use('/api/staff', routes.staff);
app.use('/api/services', routes.services);
app.use('/api/slides', routes.slides);
app.use('/api/email', routes.email);
app.use('/api/user', routes.user);

// Catchall for requests that do not match our routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/*---------------------------
| Port Management
---------------------------*/
const HEROKU_PORT = process.env.PORT;
const EXPRESS_PORT = process.env.EXPRESS_PORT;
const PORT = (EXPRESS_PORT) ? EXPRESS_PORT : HEROKU_PORT;
const FINAL_PORT = (PORT) ? PORT : 5000; // In case none are provided fall back to 5000

/*---------------------------
| Start the Server
---------------------------*/
app.listen(FINAL_PORT, () => { 
    console.log('Express Server is up and running. Currently listening on port: ' + FINAL_PORT ); 
});