const environment = (process.env.NODE_ENV || 'development').trim();

if (environment === 'development') {
    module.exports = require('./config/webpack.dev.config.js');
} else {
    console.log('In PROD')
    module.exports = require('./config/webpack.prod.config.js');
}