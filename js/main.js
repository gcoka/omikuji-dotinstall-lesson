(function() {
  "use strict";
  var btn = document.getElementById('btn');
  btn.addEventListener("click", function() {
    this.textContent = "Hit!";
  });
  btn.addEventListener("mousedown", function() {
    this.className = "pushed";
  });
  btn.addEventListener("mouseup", function() {
    this.className = "";
  });
})();
