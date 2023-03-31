"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.StorageService = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
class StorageService {
  static async get(key) {
    return typeof document !== 'undefined' ? localStorage.getItem(key) : await _asyncStorage.default.getItem(key);
  }
  static async set(key, value) {
    if (typeof document !== 'undefined') {
      return localStorage.setItem(key, value);
    } else {
      return await _asyncStorage.default.setItem(key, value);
    }
  }
  static async remove(key) {
    if (typeof document !== 'undefined') {
      return localStorage.removeItem(key);
    } else {
      return await _asyncStorage.default.removeItem(key);
    }
  }
}
exports.StorageService = StorageService;
StorageService.Constants = {
  SUBSCRIBED: 'subscribed',
  COOKIE: 'cookie'
};