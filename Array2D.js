// Array2D.js 0.0.1
// Copyright (c) 2014 Matthew Trost
// Array2D.js may be freely distributed under the MIT license.

(function() {

  // Baseline setup.
  // ===============

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `Array2D` variable.
  var previousArray2D = root.Array2D;

  // Create a safe reference to the Array2D object for use below.
  var Array2D = function() {
    if (!(this instanceof Array2D)) return new Array2D();
  };

  // Export the Array2D object for Node.js, with backwards-compatibility for the
  // old `require()` API. If we're in the browser, add `Array2D` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Array2D;
    }
    exports.Array2D = Array2D;
  } else {
    root.Array2D = Array2D;
  }

  // Current version.
  Array2D.VERSION = '0.0.1';

  // Run Array2D.js in *noConflict* mode, returning the `Array2D` variable to its
  // previous owner. Returns a reference to the Array2D object.
  Array2D.noConflict = function() {
    root.Array2D = previousArray2D;
    return this;
  };  

  // Private utilities.
  // ==================

  // Return T/F if the passed `thing` is an array.
  function isArray(thing) {
    return Object.prototype.toString.call(thing) === '[object Array]';
  }

  // Return T/F if the passed `thing` is `null`.
  function isNull(thing) {
    return thing === null;
  }

  // Return T/F if the passed `thing` is `undefined`.
  function isUndefined(thing) {
    return thing === undefined;
  }

  // Return T/F if the passed `thing` is `null` or `undefined`.
  function isBlank(thing) {
    return isNull(thing) || isUndefined(thing);
  }

  // Return T/F if the passed `thing` is neither `null` nor `undefined`.
  function isPresent(thing) {
    return !isBlank(thing);
  }

}.call(this));
