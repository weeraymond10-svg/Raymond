// Light theme is the default. The choice is remembered when storage is available.
(function () {
  var root = document.documentElement;

  function save(theme) {
    try { localStorage.setItem("theme", theme); } catch (e) { /* storage blocked: ignore */ }
  }

  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) { /* ignore */ }
  root.setAttribute("data-theme", saved === "dark" ? "dark" : "light");

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");
    if (!button) return;

    function label() {
      var dark = root.getAttribute("data-theme") === "dark";
      button.textContent = dark ? "Switch to light theme" : "Switch to dark theme";
    }

    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      save(next);
      label();
    });
    label();
  });
})();
