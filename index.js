var config = require('config');

/**
 * Exports the a custom environment transform with the node-config module.
 *
 * @type {Function}
 */
module.exports = require('envify/custom')(config);
