'use strict';

var diagnostics = true // process.env.BROWSERIFYSHIM_DIAGNOSTICS

function inspect(obj, depth) {
  require('util').inspect(obj, false, depth || 5, true);
}

exports = module.exports = function debug() {
  if (diagnostics) console.error.apply(console, arguments);
}

exports.inspect = function(obj, depth) {
  if (diagnostics) console.error(inspect(obj, depth));
}