(function() {
  "use strict";

  // generate results
  var resultsSet = {
    "大吉": 15,
    "吉": 30,
    "末吉": 20,
    "凶": 20,
    "大凶": 15
  };
  var results = [];
  for (var k in resultsSet) {
    for (var i = 0; i < resultsSet[k]; i++) {
      results.push(k);
    }
  }

  var btn = document.getElementById('btn');

  btn.addEventListener("click", function() {
    var n = Math.floor(Math.random() * results.length);
    this.textContent = results[n];
  });
  btn.addEventListener("mousedown", function() {
    this.className = "pushed";
  });
  btn.addEventListener("mouseup", function() {
    this.className = "";
  });
})();
