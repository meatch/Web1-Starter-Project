const staff = require('./staff/staff.js');
const services = require('./services/services.js');
const slides = require('./slides/slides.js');
const email = require('./email/email.js');
const user = require('./user/user.js');

const routes = {
    staff: staff,
    services: services,
    slides: slides,
    email: email,
    user: user,
}

module.exports = routes;