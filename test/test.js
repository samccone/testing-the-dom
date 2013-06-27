var assert  = require('assert');
var jsdom   = require('jsdom');

var Clicker = require('../clicker');

// clear the DOM between each test
beforeEach(function(complete) {
  jsdom.env(
    '<html><body></body></html>',
    function(errors, window) {
      // expose the document to the global scope
      global.document = window.document;
      complete();
    }
  );
});

describe("test toggling", function() {
  it("should say hi", function(complete) {
    var clicker = new Clicker;
    assert.equal("hi", clicker.elm.textContent);
    complete();
  });

  it("should say bye", function(complete) {
    var clicker = new Clicker;
    clicker.toggleText();
    assert.equal("bye", clicker.elm.textContent);
    complete();
  });
});