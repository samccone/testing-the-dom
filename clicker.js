!(function() {
  function Clicker() {
    this.elm = document.createElement('div');
    this.elm.textContent = "hi";

    document.body.appendChild(this.elm);

    return this;
  }

  Clicker.prototype.toggleText = function() {
    if (this.elm.textContent == "hi") {
      this.elm.textContent = "bye"
    } else {
      this.elm.textContent = "hi"
    }

    return this; //make sure to return this to allow chaining
  }

  // this is exposing our class to either nodejs env or normal dom interface
  if (typeof module != "undefined") {
    module.exports = Clicker;
  } else {
    window.Clicker = Clicker;
  }
}());
