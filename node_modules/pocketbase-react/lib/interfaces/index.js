"use strict";

exports.__esModule = true;
var _Record = require("./Record");
Object.keys(_Record).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Record[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Record[key];
    }
  });
});