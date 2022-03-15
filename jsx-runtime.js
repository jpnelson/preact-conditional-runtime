if (process.env.PREACT) {
    module.exports = require('preact/jsx-runtime');
} else {
    module.exports = require('react/jsx-runtime');
}