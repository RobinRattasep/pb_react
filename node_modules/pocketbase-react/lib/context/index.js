"use strict";

exports.__esModule = true;
var _content = require("./content");
Object.keys(_content).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _content[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _content[key];
    }
  });
});
var _client = require("./client");
Object.keys(_client).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _client[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _client[key];
    }
  });
});
var _auth = require("./auth");
Object.keys(_auth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _auth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _auth[key];
    }
  });
});
var _Pocketbase = require("./Pocketbase");
Object.keys(_Pocketbase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Pocketbase[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Pocketbase[key];
    }
  });
});