(function() {
  "use strict";
  var btn = document.getElementById('btn');
  btn.addEventListener("click", function() {
    var n = Math.floor(Math.random() * 3);
    this.textContent = n;
  });
  btn.addEventListener("mousedown", function() {
    this.className = "pushed";
  });
  btn.addEventListener("mouseup", function() {
    this.className = "";
  });
})();
