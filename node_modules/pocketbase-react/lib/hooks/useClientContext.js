"use strict";

exports.__esModule = true;
exports.useClientContext = void 0;
var _react = require("react");
var _context = require("../context");
const useClientContext = () => {
  const context = (0, _react.useContext)(_context.ClientContext);
  return context;
};
exports.useClientContext = useClientContext;