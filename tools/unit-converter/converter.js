// Unit converter: length, temperature and mass.
(function () {
  // Length and mass: each unit is "how many base units it equals".
  // Base units are meters and kilograms.
  var UNITS = {
    length: {
      label: { m: "meters (m)", ft: "feet (ft)", mi: "miles (mi)" },
      factor: { m: 1, ft: 0.3048, mi: 1609.344 }
    },
    mass: {
      label: { kg: "kilograms (kg)", lb: "pounds (lb)" },
      factor: { kg: 1, lb: 0.45359237 }
    },
    temperature: {
      label: { C: "°C", F: "°F", K: "K" }
    }
  };

  // Temperature goes through Celsius.
  function toCelsius(v, unit) {
    if (unit === "F") return (v - 32) * 5 / 9;
    if (unit === "K") return v - 273.15;
    return v;
  }
  function fromCelsius(c, unit) {
    if (unit === "F") return c * 9 / 5 + 32;
    if (unit === "K") return c + 273.15;
    return c;
  }

  function convert(category, value, from, to) {
    if (category === "temperature") {
      return fromCelsius(toCelsius(value, from), to);
    }
    var f = UNITS[category].factor;
    return value * f[from] / f[to];
  }

  function format(n) {
    // Up to 6 significant digits, no trailing zeros, no "-0".
    var s = String(parseFloat(n.toPrecision(6)));
    return s === "-0" ? "0" : s;
  }

  var category = document.getElementById("category");
  var value = document.getElementById("value");
  var from = document.getElementById("from");
  var to = document.getElementById("to");
  var result = document.getElementById("result");

  function fillUnits() {
    var labels = UNITS[category.value].label;
    var keys = Object.keys(labels);
    [from, to].forEach(function (select) {
      select.innerHTML = "";
      keys.forEach(function (key) {
        var option = document.createElement("option");
        option.value = key;
        option.textContent = labels[key];
        select.appendChild(option);
      });
    });
    from.value = keys[0];
    to.value = keys[1];
  }

  function update() {
    var labels = UNITS[category.value].label;
    if (value.value === "" || isNaN(Number(value.value))) {
      result.textContent = "Enter a number to see the result.";
      return;
    }
    var v = Number(value.value);
    var out = convert(category.value, v, from.value, to.value);
    result.textContent = format(v) + " " + labels[from.value] + " = " +
      format(out) + " " + labels[to.value];
  }

  category.addEventListener("change", function () { fillUnits(); update(); });
  [value, from, to].forEach(function (el) {
    el.addEventListener("input", update);
    el.addEventListener("change", update);
  });
  document.getElementById("converter").addEventListener("submit", function (e) {
    e.preventDefault();
  });

  fillUnits();
  update();
})();
